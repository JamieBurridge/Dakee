import React from "react";
import styles from "./Topbar.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
import Menu from "../Menu/Menu";

interface Topbar {
  link?: string | undefined;
  showLogo?: boolean;
  showBackArrow?: boolean;
  offsetTop?: string;
  menu?: boolean;
  onClick?: any;
}

export default function Topbar({
  link,
  showBackArrow = true,
  showLogo = true,
  offsetTop = "35px",
  menu = false,
  onClick,
}: Topbar) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Menu showMenu={showMenu} setShowMenu={setShowMenu} />

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
              onClick={() => (menu ? setShowMenu(true) : onClick())}
            />
          )}
        </div>
      </div>
    </>
  );
}
