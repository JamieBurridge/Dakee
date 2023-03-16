import { useState } from "react";
import styles from "./index.module.scss";
import Button from "../../components/Button/Button";

export default function welcome() {
  const [hasTapped, setHasTapped] = useState<boolean>(false);

  return (
    <main
      className={
        hasTapped ? styles.splash_screen_clicked : styles.splash_screen
      }
      onClick={() => setHasTapped(true)}
    >
      <img src="/assets/logo.svg" alt="Dakee logo" className={styles.logo} />
      {hasTapped ? (
        <>
          <div className={styles.auth_container}>
            <h1>
              Hey, <br /> have we met?
            </h1>
            <p>Sign up to start or log in to your account.</p>
            <Button text="Sign up" link="/signup" type="button"></Button>
            <button className={styles.button_login}>Log in</button>
          </div>
        </>
      ) : (
        <>
          <p className={styles.tagline}>Live it like the Locals</p>
          <div className={styles.continue_container}>
            <p>
              Tap anywhere to <br /> continue
            </p>
          </div>
        </>
      )}
    </main>
  );
}
