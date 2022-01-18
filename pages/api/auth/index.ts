import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import axios from 'axios';
import url from 'url';

import { connectToDatabase } from '../../../lib/mongodb';

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
    // Get application data
    const { code } = req.query;
    if (!code) { res.status(400).end("400: Bad request!"); }
    const authHeaders = { headers : {'Content-Type': 'application/x-www-form-urlencoded'} };
    const payload = buildOAuth2CredentialsRequest(code.toString());

    try {
        // Exchange code for token
        const response = await axios.post('https://discord.com/api/v8/oauth2/token', payload, authHeaders);
        const { access_token, refresh_token } = response.data;

        //TODO: Save access_token and refresh_token in database
        let { db } = await connectToDatabase();
        //await db.collection('sessions').insertOne({});

        return res.send(`Access Token: ${access_token}`);
    } catch (err) {
        console.log(err);
        res.status(500).end("500: Internal Server Error!");
    }
});

function buildOAuth2CredentialsRequest(code : string) {
    return new url.URLSearchParams({
        'client_id': process.env.DISCORD_OAUTH_CLIENT_ID!,
        'client_secret': process.env.DISCORD_OAUTH_SECRET!,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': process.env.DISCORD_REDIRECT_URI!,
    }).toString();
}

export default handler;