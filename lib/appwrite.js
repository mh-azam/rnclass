import { Client, Account, Avatars } from "react-native-appwrite";

const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6808e8950015c23f3082")
  .setPlatform("dev.usim.rnclass");

export const account = new Account(client);
export const avatars = new Avatars(client);
