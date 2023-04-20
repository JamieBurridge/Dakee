import React from "react";
import styles from "./index.module.scss";
import Topbar from "../../components/Topbar/Topbar";

const dummyUserData = {
  picture: "",
  rating: 5,
  stars: 160,
};

export default function Profile() {
  return (
    <main className="main_secondary">
      <Topbar
        showBackArrow={true}
        showLogo={true}
        menu={true}
        useSecondaryColor={true}
      />

      <section className={styles.content}>
        <h1>My profile</h1>

        <div className={styles.profile}>
          <img
            src="https://picsum.photos/250"
            alt="Profile pic"
            className={styles.profile_picture}
          />
          <a href="#" className={styles.profile_change_picture}>
            Change photo &gt;
          </a>

          <div className={styles.profile_stars}>
            {Array.from({ length: dummyUserData.rating }, (v, i) => (
              <img src="/assets/star.svg" alt="Star"></img>
            ))}
          </div>

          <div className={styles.profile_rating}>
            <p>{dummyUserData.stars}</p>
            <img src="/assets/star.svg" alt="Star" />
          </div>
        </div>

        <div className={styles.profile_links}>
          <a href="#">Get rewards</a>
          <a href="#">Saved rewards</a>
          <a href="#">Edit preferences</a>
          <a href="#">Log out</a>
        </div>
      </section>
    </main>
  );
}
