import express from "express";
import { connectToDatabase } from "./database";
connectToDatabase();

const app = express();
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
