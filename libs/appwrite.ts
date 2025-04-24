import { Client, Account, ID } from 'appwrite';

const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68090810001559a0969a');

export const ACCOUNT = new Account(client);
export const UNIQUE_ID = ID.unique();