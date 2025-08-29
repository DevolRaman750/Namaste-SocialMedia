import { Client, Databases, Account, Storage, Avatars } from 'appwrite';

export const appwriteConfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url: import.meta.env.VITE_APPWRITE_URL || 'https://fra.cloud.appwrite.io/v1',
    databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
    userCollectionId: import.meta.env.VITE_APPWRITE_USER_TABLE_ID,
    postCollectionId: import.meta.env.VITE_APPWRITE_POST_TABLE_ID,
    savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_TABLE_ID,
}

export const client = new Client();

client.setProject(appwriteConfig.projectId!);
client.setEndpoint(appwriteConfig.url)
export const account = new Account(client);
export const databases = new Databases(client);
export const Storagetorage = new Storage(client);
export const avatars = new Avatars(client);