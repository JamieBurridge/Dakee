import React from "react";

import styles from "./Button.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface Button {
  text: string;
  link?: string;
  type: "button" | "submit";
}

export default function Button({ text, link, type }: Button) {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      type={type}
      onClick={() => link && router.push(link)}
    >
      {text}
    </button>
  );
}
