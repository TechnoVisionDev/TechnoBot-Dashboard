import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from 'next-connect';
import axios from 'axios';

const handler = nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res, next) => {
      res.status(500).end("500: Internal server error!");
    }
})

handler.get(async (req, res) => {
    // Use token to access user data
    // TODO: Get access token from session store
    const access_token = 's5FzTgHAmcXgU6sao5vxACB88V1X0k'; //TEMPORARY!!!
    const userHeaders = {headers: {'Authorization' : `Bearer ${access_token}`}};
    const { data } = await axios.get('https://discord.com/api/v8/users/@me', userHeaders);
    return res.send(data);
});

export default handler;