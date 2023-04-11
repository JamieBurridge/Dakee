import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar/Topbar";
import styles from "./index.module.scss";
import FiltersOverlay from "../components/FiltersOverlay/FiltersOverlay";

export default function Home() {
  // const hasVisited: boolean = false;

  // const router = useRouter();

  // useEffect(() => {
  //   if (!hasVisited) {
  //     router?.push("/welcome");
  //   }
  // }, []);

  const [showFilterOverlay, setShowFilterOverlay] = useState<boolean>(false);

  return (
    <main className={styles.main}>
      <Topbar showBackArrow={false} />

      <FiltersOverlay
        showOverlay={showFilterOverlay}
        setShowOverlay={setShowFilterOverlay}
      />

      <div className={styles.content}>
        <h1>Find the Local!</h1>
        <div className={styles.search_input_container}>
          <input type="text" placeholder="Choose a city..." />
        </div>
        <div className={styles.search_options}>
          <div onClick={() => setShowFilterOverlay(true)}>
            <img src="/assets/filter.svg" alt="Filter icon" />
            Filters
          </div>
          <div>Search &gt;</div>
        </div>

        <div className={styles.search_empty}>
          <img src="/assets/magnifying_glass.svg" alt="Magnifying glass icon" />
          <p>
            Choose a city <br /> to search for the Locals!
          </p>
        </div>
      </div>
    </main>
  );
}
