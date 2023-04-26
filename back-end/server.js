import express from "express";
import cors from "cors";
import signupRouter from "./routes/signup.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static("public"));

// Routes
app.use("/signup", signupRouter);

app.listen(port);
