import nextConnect from "next-connect";
import axios from "axios";
import { getSession } from "next-auth/react";

import { connectToDatabase } from "../../../lib/mongodb";
import { Session } from "next-auth";

/**
 * Retrieves a list of guilds that the authenticated user owns.
 */
const handler = nextConnect({
    onError: (err, req, res, next) => {
        return res.status(500).send({'error': '500: Internal server error'});
      }
});

handler.get(async (req, res) => {
    // Check if user is authenticated
    // TODO: Move this to a middelware
    const session = await getSession({ req });
    if (!session) return res.status(401).send({'error': '401: Unauthorized'});
    
    const ownedServers = await retrieveOwnedGuilds(session);
    res.send(ownedServers);
});

/**
 * Retrieves all of the guilds that the current session user is the owner of.
 * @param session session of the current user.
 * @returns a JSON array of guild data.
 */
export const retrieveOwnedGuilds = async (session) => {
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
    return ownedServers;
}

/**
 * Checks if the TechnoBot bot is a member of a specified guild.
 * @param guildID ID of the guild to check.
 * @returns true if bot is in the guild, otherwise false.
 */
export const isBotInGuild = async (guildID) => {
    const botID = process.env.DISCORD_OAUTH_CLIENT_ID
    const botToken = process.env.BOT_TOKEN;
    const headers = {headers: {'Authorization' : `Bot ${botToken}`}};
    try {
        const { data } = await axios.get(`https://discord.com/api/v8/guilds/${guildID}/members/${botID}`, headers);
    } catch (e) {
        return false;
    }
    return true;
}

export default handler;