import connection from "../database.js";
import { Router } from "express";
import md5 from "md5";

const router = Router();

// Create a user
router.post("/", async (req, res) => {
  const { email, name, password } = req.body;

  const rows = await (
    await connection
  ).execute("INSERT INTO users (email, name, password) VALUES (?, ?, ?)", [
    email,
    name,
    md5(password),
  ]);
});

export default router;
