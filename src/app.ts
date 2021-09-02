import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

// import * as dbController from "./controllers/dbController";

const app = express();
app.use(cors());
app.use(express.json());

// app.post("/populate-database", dbController.populateDb);

export async function init () {
  await connectDatabase();
}

export default app;
