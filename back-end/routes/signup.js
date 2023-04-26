import connection from "../database.js";
import { Router } from "express";

const router = Router();

// Create a user
router.post("/", async (req, res) => {
  const { email, name, password } = req.body;

  const rows = await (
    await connection
  ).execute("INSERT INTO users (email, name, password) VALUES (?, ?, ?)", [
    email,
    name,
    password,
  ]);
});

export default router;
