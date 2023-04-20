import { useState } from "react";
import Button from "../../components/Button/Button";
import QuestionaireOption from "../../components/QuestionaireOption/QuestionaireOption";
import Topbar from "../../components/Topbar/Topbar";
import { questionaireData } from "../../helpers/userInformationData";
import styles from "./index.module.scss";

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
              step === 3 ? "repeat(1, 1fr)" : "repeat(2, 1fr)"
            }`,
            gap: `${step === 3 ? "80px" : "20px"}`,
          }}
        >
          {step === 0 &&
            questionaireData[0].data.map((option, index) => (
              <QuestionaireOption
                icon={option.icon}
                text={option.type}
                key={index}
              />
            ))}

          {step === 1 &&
            questionaireData[1].data.map((option, index) => (
              <QuestionaireOption text={option.age} key={index} />
            ))}

          {step === 2 &&
            questionaireData[2].data.map((option, index) => (
              <QuestionaireOption
                icon={option.icon}
                text={option.type}
                key={index}
              />
            ))}

          {step === 3 && (
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

          {step === 4 &&
            questionaireData[4].data.map((option, index) => (
              <QuestionaireOption
                icon={option.icon}
                text={option.type}
                key={index}
              />
            ))}
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
