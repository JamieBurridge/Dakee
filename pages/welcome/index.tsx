import { useState } from "react";
import styles from "./index.module.scss";

export default function welcome() {
  const [hasTapped, setHasTapped] = useState<boolean>(false);

  return (
    <main
      className={
        hasTapped ? styles.splash_screen_clicked : styles.splash_screen
      }
      onClick={() => setHasTapped(true)}
    >
      {hasTapped ? (
        <>
          <div className={styles.logo_container}>
            <img src="/assets/logo.svg" alt="Dakee logo" />
          </div>
          <div className={styles.auth_container}>
            <h1>
              Hey, <br /> have we met?
            </h1>
            <p>Sign up to start or log in to your account.</p>
            <button className={styles.button_signup}>Sign up</button>
            <button className={styles.button_login}>Log in</button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.logo_container}>
            <img src="/assets/logo.svg" alt="Dakee logo" />
            <p>Live it like the Locals</p>
          </div>
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
