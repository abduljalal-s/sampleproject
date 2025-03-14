import { Client, Databases } from "./databaseService";

const config = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
    col: {
        notes: process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID
    }
};

const client = new Client()
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

const database = new Databases(client);

export { client, config, database };
