import connection from "../database.js";
import { Router } from "express";
import md5 from "md5";

const router = Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await (
    await connection
  ).execute("SELECT * FROM users WHERE email = ? AND password = ?", [
    email,
    md5(password),
  ]);
  if (rows.length === 1) {
    res.send("Login successful");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

export default router;
