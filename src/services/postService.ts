import { getRepository } from "typeorm";
import Posts from "../entities/Posts";

export async function getAllPosts() {
  const posts = await getRepository(Posts).find();
  return posts;
}
