import React from "react";
import styles from "./ProfileCard.module.scss";

interface Topics {
  name: string;
  icon?: string;
}

interface ProfileCardInterface {
  name: string;
  rating: number;
  picture: string;
  topics: Topics[];
}

export default function ProfileCard({
  name,
  rating,
  picture,
  topics,
}: ProfileCardInterface) {
  return (
    <div className={styles.profile_card}>
      <div className={styles.profile_details}>
        <p className={styles.profile_name}>{name}</p>
        <p className={styles.profile_rating}>
          <img src="/assets/star.svg" alt="Star icon" /> {rating}
        </p>
      </div>
      <div className={styles.profile_picture_container}>
        <img src={picture} alt={`${name}'s profile picture`} />
      </div>
      <div className={styles.profile_topics}>
        <ul>
          {topics?.map((topic, index) => (
            <li key={index}>{topic.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.profile_ask_for_advice}>
        <p>Ask for advice &gt;</p>
      </div>
    </div>
  );
}
