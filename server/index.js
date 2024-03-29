import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./Routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.use(router);

app.get("/", (req, res) => {
  res.send("Welcome");
});
