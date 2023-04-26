import React from "react";
import styles from "./ChatMessagePreview.module.scss";

export default function ChatMessagePreview({
  name,
  message,
  timeSinceLastMessage,
  profilePicture,
  onClick,
}) {
  return (
    <div className={styles.chat_preview} onClick={() => onClick()}>
      <div>
        <img
          src={profilePicture}
          alt={`${name}'s profile pic`}
          className={styles.chat_profile_pic}
        />
      </div>

      <div className={styles.chat_details}>
        <div className={styles.chat_info}>
          <span>{name}</span> {timeSinceLastMessage}
        </div>
        <div className={styles.chat_message_preview}>
          {message.substring(0, 25)}...
        </div>
      </div>
    </div>
  );
}
