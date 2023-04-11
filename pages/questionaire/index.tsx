import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import styles from "./index.module.scss";
import { useState } from "react";
import QuestionaireOption from "../../components/QuestionaireOption/QuestionaireOption";
import { questionaireData } from "../../helpers/questionaireData";
import Button from "../../components/Button/Button";
import { agesData } from "../../helpers/ages";
import { gendersData } from "../../helpers/genders";
import { userTypeData } from "../../helpers/user_type";
import { topicsData } from "../../helpers/topics";

export default function questionaire() {
  const [step, setStep] = useState(0);
  const [countryInputsAmount, setCountryInputsAmount] = useState(1);
  const countryInputs = Array(countryInputsAmount).fill("");

  return (
    <main className={styles.questionaire_main}>
      <div>
        <Topbar link="tutorial-done" />
      </div>
      <div className={styles.content}>
        <p className={styles.step}>{step + 1}/5</p>
        <p className={styles.options_heading}>
          {questionaireData[step].heading}
        </p>
        <div
          className={styles.options_grid}
          style={{
            gridTemplateColumns: `${
              questionaireData[step].stepType == "CardSelection"
                ? "repeat(2, 1fr)"
                : "repeat(1, 1fr)"
            }`,
            gap: `${
              questionaireData[step].stepType == "CardSelection"
                ? "20px"
                : "80px"
            }`,
          }}
        >
          {questionaireData[step].stepType == "CardSelection" &&
            questionaireData[step]?.options?.map((option, index) => (
              <QuestionaireOption
                icon={option.icon}
                text={option.text}
                key={index}
              />
            ))}

          {questionaireData[step]?.stepType == "Country" && (
            <>
              <div className={styles.inputOption}>
                <label htmlFor="country">I currently live in:</label>
                <input type="text" name="country" placeholder="City, Country" />
              </div>

              <div className={styles.inputOption}>
                <label htmlFor="country">I can give advices for:</label>

                {countryInputs.map((input, index) => (
                  <input
                    type="text"
                    name="country"
                    placeholder="City, Country"
                    key={index}
                  />
                ))}
              </div>

              <div
                onClick={() => setCountryInputsAmount(countryInputsAmount + 1)}
                className={styles.addCountry}
              >
                + Add another place
              </div>
            </>
          )}
        </div>

        {step == questionaireData.length - 1 ? (
          <Button type="button" link="/questionaire-done">
            Done
          </Button>
        ) : (
          <div
            className={styles.next_button}
            onClick={() => setStep((currStep) => (currStep += 1))}
          >
            Next &gt;
          </div>
        )}
      </div>
    </main>
  );
}
