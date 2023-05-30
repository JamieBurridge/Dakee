import connection from "../database.js";
import { Router } from "express";
import md5 from "md5";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../models/user.js";

const router = Router();

// Create passport
passport.use(
  new LocalStrategy(function (email, password, done) {
    User.findOne(
      { email: email, password: password },
      function (err = null, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        // if (!user.verifyPassword(password)) {
        //   return done(null, false);
        // }
        return done(null, user);
      }
    );
  })
);

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: User signup
 *     description: Create a new user.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully.
 *       400:
 *         description: Invalid request body.
 */
router.post("/signup", async (req, res) => {
  const { email, name, password } = req.body;

  try {
    // Create a user
    const rows = await (
      await connection
    ).execute("INSERT INTO users (email, name, password) VALUES (?, ?, ?)", [
      email,
      name,
      md5(password),
    ]);

    // Create a profile
    await (
      await connection
    ).execute("INSERT INTO profiles (user_id) VALUES(?)", [rows[0].insertId]);

    res.json({ success: 1 });
  } catch (error) {
    res.json({ success: 0, error: error });
  }
});

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     description: Login.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User logged in successfully.
 *       400:
 *         description: Invalid request body.
 */
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

export default router;
