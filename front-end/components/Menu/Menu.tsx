import Link from "next/link";
import styles from "./Menu.module.scss";
import SectionHeadingSecondary from "../SectionHeadings/SectionHeadingSecondary";

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
            <SectionHeadingSecondary padding="50px 0 100px 0">
              Menu
            </SectionHeadingSecondary>
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
