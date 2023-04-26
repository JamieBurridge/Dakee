import React from "react";
import styles from "./index.module.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";

export default function Signup() {
  const [passwordHidden, setPasswordHidden] = useState(true);

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    });
    const data = await response.text();
    console.log(data);
  };

  return (
    <main className={styles.signup_container}>
      <div>
        <Topbar link="welcome" />
      </div>
      <img src="/assets/logo.svg" alt="Dakee logo" className={styles.logo} />
      <div>
        <h2 className={styles.heading}>
          Sign up <br />
          with e-mail
        </h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className={styles.password_input_container}>
            <img
              src={`/assets/${
                passwordHidden ? "eye_closed.svg" : "eye_open.svg"
              }`}
              alt={`Eye ${passwordHidden ? "closed" : "open"}`}
              onClick={() => setPasswordHidden(!passwordHidden)}
            />
            <input
              type={passwordHidden ? "password" : "text"}
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Sign up</Button>
        </form>
        <div className={styles.other_signup_methods}>
          <p>or sign up using:</p>
          <div>
            <img src="/assets/facebook.svg" alt="facebook" />
            <img src="/assets/google.svg" alt="google" />
            <img src="/assets/apple.svg" alt="apple" />
          </div>
        </div>
      </div>
    </main>
  );
}
