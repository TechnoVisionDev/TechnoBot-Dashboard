import nextConnect from "next-connect";
import { getSession } from "next-auth/react";

const handler = nextConnect({
    onError: (err, req, res, next) => {
        return res.status(500).send({'error': '500: Internal server error'});
      }
});

handler.get(async (req, res) => {
    // Check if user is authenticated
    const session = await getSession({ req });
    if (!session) return res.status(401).send({'error': '401: Unauthorized'});
    
    // Redirect to dashboard for this guild
    const {guild_id} = req.query
    res.redirect(`/dashboard/${guild_id}/settings`);
});

export default handler;