import { useState } from "react";
import FiltersOverlay from "../components/FiltersOverlay/FiltersOverlay";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import Topbar from "../components/Topbar/Topbar";
import styles from "./index.module.scss";

const dummyProfiles = [
  {
    name: "Iva Hardy",
    rating: "4.6",
    picture: "https://picsum.photos/id/1001/200/180",
    topics: [{ name: "art" }, { name: "food" }, { name: "music" }],
  },
];

export default function Home() {
  // const hasVisited: boolean = false;

  // const router = useRouter();

  // useEffect(() => {
  //   if (!hasVisited) {
  //     router?.push("/welcome");
  //   }
  // }, []);

  const [showFilterOverlay, setShowFilterOverlay] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <main className={styles.main}>
      <Topbar showBackArrow={false} menu={true} />

      <FiltersOverlay
        showOverlay={showFilterOverlay}
        setShowOverlay={setShowFilterOverlay}
      />

      <div className={styles.content}>
        <h1>Find the Local!</h1>
        <div className={styles.search_input_container}>
          <input
            type="text"
            placeholder="Choose a city..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className={styles.search_options}>
          <div onClick={() => setShowFilterOverlay(true)}>
            <img src="/assets/filter.svg" alt="Filter icon" />
            Filters
          </div>
          <div>Search &gt;</div>
        </div>

        {/* If no data */}
        {!dummyProfiles && (
          <div className={styles.search_empty}>
            <img
              src="/assets/magnifying_glass.svg"
              alt="Magnifying glass icon"
            />
            <p>
              Choose a city <br /> to search for the Locals!
            </p>
          </div>
        )}

        {/* If data */}
        {dummyProfiles && (
          <div className={styles.search_results}>
            {dummyProfiles?.map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
