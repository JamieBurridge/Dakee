import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Button from "../../components/Button/Button";
import styles from "./index.module.scss";

export default function tutorialDone() {
  return (
    <main className={styles.tutorial_done_main}>
      <div>
        <Topbar link="/tutorial" />
      </div>
      <div className={styles.content}>
        <h1>
          Done! <br /> <br /> Let us ask five quick questions before we start.
        </h1>
        <p>You can edit your anwsers later.</p>
        <div>
          <Button link="/questionaire" type="button">
            Ok
          </Button>
        </div>
      </div>
    </main>
  );
}
