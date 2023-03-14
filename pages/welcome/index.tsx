import styles from "./index.module.scss";

export default function welcome() {
  return (
    <main className={styles.splash_screen}>
      <div className={styles.logo_container}>
        <img src="/assets/logo.svg" alt="Dakee logo" />
        <p>Live it like the Locals</p>
      </div>
      <div className={styles.continue_container}>
        <p>
          Tap anywhere to <br /> continue
        </p>
      </div>
    </main>
  );
}
