import React from "react";
import styles from "./index.module.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";

export default function Login() {
  const [passwordHidden, setPasswordHidden] = useState(true);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    await response.text();
  };

  return (
    <main className={styles.login_container}>
      <div>
        <Topbar link="welcome" />
      </div>
      <img src="/assets/logo.svg" alt="Dakee logo" className={styles.logo} />
      <div>
        <h2 className={styles.heading}>Login</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
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
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </div>
    </main>
  );
}
