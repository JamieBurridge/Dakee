import React from "react";

import styles from "./Button.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface Button {
  children: any;
  link?: string;
  type: "button" | "submit";
}

export default function Button({ children, link, type }: Button) {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      type={type}
      onClick={() => link && router.push(link)}
    >
      {children}
    </button>
  );
}
