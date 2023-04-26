import React from "react";
import styles from "./NotificationBubble.module.scss";

interface NotificationBubbleInterface {
  number: number;
}

export default function NotificationBubble({
  number,
}: NotificationBubbleInterface) {
  return <div className={styles.bubble}>{number}</div>;
}
