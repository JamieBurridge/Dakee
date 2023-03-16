import { useEffect, useState } from "react";
import { stepsData } from "../../helpers/stepsData";
import styles from "./index.module.scss";
import Link from "next/link";

export default function Tutorial() {
  const [currentStep, setCurrentStep] = useState(0);

  function nextStep() {
    setCurrentStep((currStep) => currStep + 1);
  }

  function previousStep() {
    setCurrentStep((currStep) => currStep - 1);
  }

  useEffect(() => {
    if (currentStep >= stepsData.length) {
      setCurrentStep(0);
    } else if (currentStep < 0) {
      setCurrentStep(stepsData.length - 1);
    }
  }, [currentStep]);

  return (
    <main className={styles.tutorial_main}>
      <div className={styles.small_logo_container}>
        <img src="/assets/logo_small.svg" alt="Small Dakee logo" />
      </div>

      {currentStep < stepsData.length && currentStep >= 0 ? (
        <div className={styles.step_information}>
          <h2>
            {stepsData[currentStep].heading.map((step, index) => (
              <>
                {step}
                <br />
              </>
            ))}
          </h2>

          <div className={styles.step_logo_container}>
            <img
              src={`/assets/${stepsData[currentStep].icon}`}
              alt={stepsData[currentStep].iconAlt}
            />
          </div>

          {stepsData[currentStep].text.map((text, index: number) => (
            <div>
              <p>{text}</p>
              {text == "" && <br />}
            </div>
          ))}
        </div>
      ) : (
        <p>There is no data available for the current step.</p>
      )}

      <div className={styles.steps_progress}>
        {stepsData.map((step, index) => (
          <div
            key={index}
            style={
              currentStep == index
                ? { backgroundColor: "var(--color-primary)" }
                : { backgroundColor: "var(--color-muted)" }
            }
          ></div>
        ))}
      </div>

      <Link href="/" className={styles.skip_tutorial}>
        Skip the tutorial
      </Link>

      <button onClick={nextStep}>next</button>
      <button onClick={previousStep}>previous</button>
    </main>
  );
}
