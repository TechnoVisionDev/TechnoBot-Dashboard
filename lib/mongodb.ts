import { Db, MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI!;

// check the MongoDB URI
if (!MONGODB_URI) {
    throw new Error('Define the MONGODB_URI environmental variable');
}

let cachedClient : MongoClient | null = null;
let cachedDb : Db | null = null;

export async function connectToDatabase() {
    // check the cached.
    if (cachedClient && cachedDb) {
        // load from cache
        return {
            client: cachedClient,
            db: cachedDb,
        };
    }

    // Connect to cluster
    let client = new MongoClient(MONGODB_URI);
    await client.connect();
    let db = client.db('TechnoBot');

    // set cache
    cachedClient = client;
    cachedDb = db;

    return {
        client: cachedClient,
        db: cachedDb,
    };
}