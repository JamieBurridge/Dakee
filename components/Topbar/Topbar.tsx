import React from "react";
import styles from "./Topbar.module.scss";
import { useRouter } from "next/router";

interface Topbar {
  link?: string | undefined;
  showLogo?: boolean;
  showBackArrow?: boolean;
  offsetTop?: string;
}

export default function Topbar({
  link,
  showBackArrow = true,
  showLogo = true,
  offsetTop = "35px",
}: Topbar) {
  const router = useRouter();

  return (
    <div
      className={styles.small_logo_container}
      style={{ paddingTop: offsetTop }}
    >
      <div>
        {showBackArrow && (
          <img
            src="/assets/back.svg"
            alt="Back arrow"
            onClick={() => router.push(link)}
            className={styles.arrow}
          />
        )}
      </div>

      <div>
        {showLogo && (
          <img
            src="/assets/logo_small.svg"
            alt="Small Dakee logo"
            className={styles.logo}
          />
        )}
      </div>
    </div>
  );
}
