import Link from "next/link";
import styles from "./Menu.module.scss";

interface MenuInterface {
  showMenu: boolean;
  setShowMenu: any;
}

const navLinksData = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/chat",
    text: "Chat",
  },
  {
    href: "/profile",
    text: "My profile",
  },
  {
    href: "/settings",
    text: "Settings",
  },
  {
    href: "/faq",
    text: "FAQ",
  },
];

export default function Menu({ showMenu, setShowMenu }: MenuInterface) {
  return (
    <>
      {showMenu && (
        <div className={styles.menu}>
          <div
            className={styles.back_arrow_container}
            onClick={() => setShowMenu(false)}
          >
            <img src="/assets/back_orange.svg" alt="Back arrow" />
          </div>
          <div className={styles.content}>
            <h1>Menu</h1>
            <ul>
              {navLinksData?.map((data, index) => (
                <li key={index} onClick={() => setShowMenu(false)}>
                  <Link href={data.href}>{data.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
