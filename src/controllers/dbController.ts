import { Request, Response } from "express";

import * as dbService from "../services/dbService";

export async function populateDb(req: Request, res: Response) {
  const empty = checkDb();
  if (empty) {
    dbService.getUsers();
    dbService.getPosts();
  }
}

export async function checkDb() {
  const empty = dbService.checkDb();
  if (empty) return true;
}
