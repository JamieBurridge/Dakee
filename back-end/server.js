import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import loginRouter from "./routes/login.js";
import * as dotenv from "dotenv";

const app = express();

dotenv.config();

app.use(express.json());

app.use(express.static("public"));

app.use(cors());

// Routes
app.use("/auth", authRouter);
// app.use("/login", loginRouter);

app.listen(process.env.PORT);
