import connection from "../database";
import { Router } from "express";

const router = Router();

// Create a user
app.post("/signup", async (req, res) => {
  const { email, name, password } = req.body;

  const [rows] = await connection.execute(
    "INSERT INTO users (email, name, password) VALUES (?, ?, ?)",
    [email, name, password]
  );

  if (rows.affectedRows === 1) {
    res.send("User created successfully");
  } else {
    res.status(400).send("Error creating user");
  }
});

export default router;
