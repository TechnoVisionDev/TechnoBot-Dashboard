import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

import clientPromise from "../../../lib/mongodb";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_OAUTH_CLIENT_ID,
            clientSecret: process.env.DISCORD_OAUTH_SECRET,
            authorization: { params: { scope: 'identify email guilds' } },
        }),
    ],
});