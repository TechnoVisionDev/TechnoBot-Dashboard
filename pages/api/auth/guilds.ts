import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import axios from "axios";
import { getSession } from "next-auth/react";

import { connectToDatabase } from "../../../lib/mongodb";

/**
 * Retrieves a list of guilds that the authenticated user owns.
 */
const handler = nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
        return res.status(500).send({'error': '500: Internal server error'});
      }
});

handler.get(async (req, res) => {
    // Check if user is authenticated
    // TODO: Move this to a middelware
    const session = await getSession({ req });
    if (!session) return res.status(401).send({'error': '401: Unauthorized'});

    // Get access token from database
    const email = session.user?.email;
    const { db } = await connectToDatabase();

    const user = await db.collection('users').findOne({ email });
    if (!user) throw new Error();
    const account = await db.collection('accounts').findOne({ userId: user._id});
    if (!account) throw new Error();
    const accessToken = account.access_token;

    // Request guilds from Discord using access token
    const headers = {headers: {'Authorization' : `Bearer ${accessToken}`}};
    const { data } = await axios.get('https://discord.com/api/v8/users/@me/guilds', headers);
    
    // Filter out servers the user does not own
    const ownedServers = [];
    for (let server of data) {
        if (server.owner) {
            ownedServers.push(server);
        }
    }

    res.send(ownedServers);
});

export default handler;