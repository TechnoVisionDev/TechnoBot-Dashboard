import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

async function handler(req : NextApiRequest, res : NextApiResponse) {
    if (req.method === 'GET') {
        try {
            // Use token to access user data
            // TODO: Get access token from session store
            const access_token = 's5FzTgHAmcXgU6sao5vxACB88V1X0k'; //TEMPORARY!!!
            const userHeaders = {headers: {'Authorization' : `Bearer ${access_token}`}};
            const { data } = await axios.get('https://discord.com/api/v8/users/@me', userHeaders);
            return res.send(data);
        } catch (err) {
            console.log(err);
            return res.send(400);
        }
    }
}

export default handler;