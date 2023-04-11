import React from "react";
import styles from "./index.module.scss";
import Topbar from "../../components/Topbar/Topbar";
import Button from "../../components/Button/Button";

export default function index() {
  return (
    <main className={styles.questionaire_done_main}>
      <Topbar link="/questionaire" />
      <div className={styles.content}>
        <div>
          <h1>
            Perfect! <br /> Let's start!
          </h1>
          <Button link="/" type="button">
            Ok
          </Button>
        </div>
      </div>
    </main>
  );
}
