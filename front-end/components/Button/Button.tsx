import React from "react";

import styles from "./Button.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface Button {
  children: any;
  link?: string;
  onClick?: any;
  type: "button" | "submit";
}

export default function Button({ children, link, type, onClick }: Button) {
  const router = useRouter();

  return (
    <button
      className={styles.button}
      type={type}
      onClick={() => (onClick ? onClick() : link && router.push(link))}
    >
      {children}
    </button>
  );
}
