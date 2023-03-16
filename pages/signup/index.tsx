import React from "react";
import styles from "./index.module.scss";
import Button from "../../components/Button/Button";

export default function Signup() {
  return (
    <main className={styles.signup_container}>
      <div>
        <img
          src="/assets/back.svg"
          alt="Back arrow"
          className={styles.back_arrow}
        />
      </div>
      <img src="/assets/logo.svg" alt="Dakee logo" className={styles.logo} />
      <div>
        <h2 className={styles.heading}>
          Sign up <br />
          with e-mail
        </h2>
        <form>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="E-mail" />
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <Button text="Sign up" link="/tutorial" type="button" />
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
