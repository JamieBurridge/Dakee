import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import SectionHeadingSecondary from "../../components/SectionHeadings/SectionHeadingSecondary";
import { dummyUsers } from "../../helpers/users";
import styles from "./index.module.scss";

export default function Rewards() {
  return (
    <main className="main_secondary">
      <Topbar useSecondaryColor={true} showMenu={true} />
      <SectionHeadingSecondary>Rewards</SectionHeadingSecondary>

      <div className={styles.profile_stars}>
        <p>{dummyUsers[0].stars}</p>
        <img src="/assets/star.svg" alt="Star" />
      </div>
    </main>
  );
}
