import { Request, Response } from "express";

import * as postService from "../services/postService";

export async function getPosts(req: Request, res: Response) {
  const posts = await postService.getAllPosts();
  res.send(posts);
}
