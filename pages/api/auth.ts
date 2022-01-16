import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';
import url from 'url';

async function handler(req : NextApiRequest, res : NextApiResponse) {
    if (req.method === 'POST') {
      // Process a POST request



    } 
    else if (req.method === 'GET') {
        // Get application data
        const { code } = req.query;
        const authHeaders = { headers : {'Content-Type': 'application/x-www-form-urlencoded'} };
        const data = new url.URLSearchParams({
            'client_id': process.env.DISCORD_OAUTH_CLIENT_ID!,
            'client_secret': process.env.DISCORD_OAUTH_SECRET!,
            'grant_type': 'authorization_code',
            'code': code.toString(),
            'redirect_uri': process.env.DISCORD_REDIRECT_URI!,
        });

        try {
            // Exchange code for token
            const response = await axios.post('https://discord.com/api/v8/oauth2/token', data.toString(), authHeaders);
            const { access_token, refresh_token } = response.data;

            // Use token to access user data
            // TODO: Move this to a new API call like /api/auth/user
            const userHeaders = {headers: {'Authorization' : `Bearer ${access_token}`}};
            const { data: userResponse } = await axios.get('https://discord.com/api/v8/users/@me', userHeaders);
            return res.send(userResponse);

            //TODO: Save access_token and refresh_token in database

        } catch (err) {
            console.log(err);
            return res.send(400);
        }

        return res.send(200);
    }
}

export default handler;