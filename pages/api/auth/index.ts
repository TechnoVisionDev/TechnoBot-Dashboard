import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import url from 'url';

async function handler(req : NextApiRequest, res : NextApiResponse) {
    if (req.method === 'GET') {
        // Get application data
        const { code } = req.query;
        if (!code) { return res.redirect(400, '/error') }
        const authHeaders = { headers : {'Content-Type': 'application/x-www-form-urlencoded'} };
        const payload = buildOAuth2CredentialsRequest(code.toString());

        try {
            // Exchange code for token
            const response = await axios.post('https://discord.com/api/v8/oauth2/token', payload, authHeaders);
            const { access_token, refresh_token } = response.data;

            //TODO: Save access_token and refresh_token in database
            return res.send(`Access Token: ${access_token}`);
        } catch (err) {
            console.log(err);
            return res.send(400);
        }
    }
}

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