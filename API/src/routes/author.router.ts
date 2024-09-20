import { createAuthorController } from "../controllers/create.auth.controller";
import { getAuthorsController } from "../controllers/get.authors.controllers";

const { Router } = require("express");

export const authorRouter = Router();

authorRouter.post("/", createAuthorController).get("/", getAuthorsController);
