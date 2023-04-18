import React from "react";
import Topbar from "../../../components/Topbar/Topbar";
import styles from "./index.module.scss";

export default function Chat() {
  return (
    <main className="main_secondary">
      <Topbar
        showBackArrow={true}
        menu={true}
        link="/chat"
        useSecondaryColor={true}
      />

      <section className={styles.user_card}>
        <div>
          <img
            src="https://picsum.photos/200"
            alt="Profile picture"
            className={styles.profile_picture}
          />
        </div>

        <div className={styles.profile_info}>
          <p className={styles.profile_info_name}>John</p>
          <p className={styles.profile_info_city}>Faro</p>

          <hr />

          <div className={styles.profile_info_rating}>
            <p>Rate:</p>
            <div>
              <div className={styles.star}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.chat_container}>
        <div className={styles.messages}>
          <div className={styles.message_yours}>Hello there.</div>
          <div className={styles.message_theirs}>
            Hi Jane! Would you like to meet up? I'm not a creep! This app is
            safe and doesn't facilitate me exploiting tourists!
          </div>
        </div>
        <input type="text" placeholder="Type something..." />
      </section>
    </main>
  );
}
