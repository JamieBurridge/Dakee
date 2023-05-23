import React from "react";
import styles from "./index.module.scss";
import Topbar from "../../components/Topbar/Topbar";
import SectionHeadingSecondary from "../../components/SectionHeadings/SectionHeadingSecondary";
import { dummyUsers } from "../../helpers/users";
import { useState } from "react";
import Button from "../../components/Button/Button";

export default function ProfileEdit() {
  return (
    <main className="main_secondary">
      <Topbar showMenu={true} useSecondaryColor={true} link="/" />

      <section className={styles.content}>
        <SectionHeadingSecondary padding="0 0 25px 0">
          Edit Profile
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
        </div>

        <div className={styles.profile_edit}>
          <label htmlFor="name">
            Name (this will be public on your Profile)
          </label>
          <input type="text" name="name" placeholder="Name..." />

          <label htmlFor="current-city">Current City</label>
          <input
            type="text"
            name="current-city"
            placeholder="Current city..."
          />

          <label htmlFor="bio">Bio</label>
          <textarea name="bio" placeholder="Your bio..."></textarea>

          <Button type="button" secondaryColor={true}>
            Save
          </Button>
        </div>
      </section>
    </main>
  );
}
