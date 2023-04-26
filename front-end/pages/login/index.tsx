import React from "react";
import styles from "./index.module.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";

export default function Login() {
  const [passwordHidden, setPasswordHidden] = useState(true);

  return (
    <main className={styles.login_container}>
      <div>
        <Topbar link="welcome" />
      </div>
      <img src="/assets/logo.svg" alt="Dakee logo" className={styles.logo} />
      <div>
        <h2 className={styles.heading}>Login</h2>
        <form>
          <input type="email" name="email" placeholder="E-mail" />
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
            />
          </div>
          <Button link="/tutorial" type="button">
            Login
          </Button>
        </form>
        <div className={styles.other_login_methods}>
          <p>or login using:</p>
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
