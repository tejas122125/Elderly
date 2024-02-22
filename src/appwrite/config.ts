import { Account, Avatars, Client, Databases, Storage } from "appwrite";
// import 'dotenv/config'
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECTID!);

export const storage = new Storage(client);    
export const databases = new Databases(client)
export const avatars = new Avatars(client)
export const account = new Account(client)
