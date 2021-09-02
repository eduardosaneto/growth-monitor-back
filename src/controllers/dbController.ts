import { Request, Response } from "express";

import * as dbService from "../services/dbService";

export async function populateDb(req: Request, res: Response) {
  const empty = checkDb();
  if (empty) {
    dbService.populateDb();
    dbService.populatePosts();
  }
  res.sendStatus(201);
}

export async function checkDb() {
  const empty = dbService.checkDb();
  if (empty) return true;
}
