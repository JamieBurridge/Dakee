import React from "react";

import styles from "./Button.module.scss";
import Link from "next/link";

interface Button {
  text: string;
  link: string;
  type: "button" | "submit";
}

export default function Button({ text, link, type }: Button) {
  return (
    <button className={styles.button} type={type}>
      {link ? <Link href={link}>{text}</Link> : text}
    </button>
  );
}
