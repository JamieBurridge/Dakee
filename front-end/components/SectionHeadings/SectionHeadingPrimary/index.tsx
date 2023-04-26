import React from "react";
import styles from "./index.module.scss";
import { ReactNode } from "react";

interface HeadingInterface {
  children: ReactNode;
  padding?: string;
}

export default function SectionHeadingPrimary({
  children,
  padding,
}: HeadingInterface) {
  return (
    <h1 className={styles.heading} style={{ padding: padding }}>
      {children}
    </h1>
  );
}
