import React from "react";
import Topbar from "../../../components/Topbar/Topbar";
import styles from "./index.module.scss";
import { useState } from "react";

export default function Chat() {
  const [rating, setRating] = useState(1);

  return (
    <main className="main_secondary">
      <Topbar
        showBackArrow={true}
        showMenu={true}
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
              <div className={styles.stars}>
                {Array.from({ length: rating }, (v, i) => (
                  <img
                    src="/assets/star.svg"
                    alt="Star"
                    onClick={() => {
                      setRating(i + 1);
                    }}
                  />
                ))}

                {Array.from({ length: 5 - rating }, (v, i) => (
                  <img
                    src="/assets/star_orange.svg"
                    alt="Star"
                    onClick={() => {
                      console.log(i + rating);
                      setRating(i + rating + 1);
                    }}
                  />
                ))}
              </div>
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
