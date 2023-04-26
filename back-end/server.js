import express from "express";
import cors from "cors";
import signupRouter from "./routes/signup.js";
import * as dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

// Routes
app.use("/signup", signupRouter);

app.listen(process.env.PORT);
