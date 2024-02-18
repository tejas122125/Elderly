import { Client, Databases, Storage } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65ce07295ed684988eab');

export const storage = new Storage(client);    
export const databases = new Databases(client)