import { useState } from "react";
import styles from "./index.module.scss";
import Button from "../../components/Button/Button";
import Link from "next/link";

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
            <Button link="/signup" type="button">
              Sign up
            </Button>
            <Link href="/login">
              <button className={styles.button_login}>Log in</button>
            </Link>
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
