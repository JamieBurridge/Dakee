import React from "react";
import styles from "./index.module.scss";
import Topbar from "../../components/Topbar/Topbar";
import SectionHeadingSecondary from "../../components/SectionHeadings/SectionHeadingSecondary";
import { dummyUsers } from "../../helpers/users";

export default function Profile() {
  return (
    <main className="main_secondary">
      <Topbar showMenu={true} useSecondaryColor={true} />

      <section className={styles.content}>
        <SectionHeadingSecondary padding="0 0 25px 0">
          My Profile
        </SectionHeadingSecondary>

        <div className={styles.profile}>
          <img
            src="https://picsum.photos/250"
            alt="Profile pic"
            className={styles.profile_picture}
          />
          <a href="#" className={styles.profile_change_picture}>
            Change photo &gt;
          </a>

          <div className={styles.profile_rating}>
            {Array.from({ length: dummyUsers[0].rating }, (v, i) => (
              <img src="/assets/star.svg" alt="Star"></img>
            ))}
          </div>

          <div className={styles.profile_stars}>
            <p>{dummyUsers[0].stars}</p>
            <img src="/assets/star.svg" alt="Star" />
          </div>
        </div>

        <div className={styles.profile_links}>
          <a href="/rewards">Get rewards</a>
          <a href="#">Saved rewards</a>
          <a href="#">Edit preferences</a>
          <a href="#">Log out</a>
        </div>
      </section>
    </main>
  );
}
