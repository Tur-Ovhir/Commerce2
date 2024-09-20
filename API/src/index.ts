import express from "express";
import { connectToDatabase } from "./database";
import { authorRouter } from "./routes/author.router";
connectToDatabase();

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.use("/author", authorRouter);
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
