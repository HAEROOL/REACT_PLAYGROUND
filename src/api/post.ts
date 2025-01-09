import client from "./client";
import { Post } from "./types/Post";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const res = await client.get("/posts");
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
