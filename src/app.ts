import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import { errorHandler } from "./middlewares/errorHandler";
import * as dbController from "./controllers/dbController";
import * as postController from "./controllers/postController";

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.post("/populate-database", dbController.populateDb);
app.get("/", postController.getPosts);

export async function init () {
  await connectDatabase();
}

export default app;
