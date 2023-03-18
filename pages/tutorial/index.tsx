import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { stepsData } from "../../helpers/stepsData";
import styles from "./index.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export default function Tutorial() {
  const [currentStep, setCurrentStep] = useState(0);
  const [startX, setStartX] = useState(null);

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

  const handleTouchStart = (event) => {
    setStartX(event.touches[0].pageX);
  };

  const handleTouchEnd = (event) => {
    const endX = event.changedTouches[0].pageX;
    const deltaX = endX - startX;
    if (deltaX > 0) {
      previousStep();
    } else if (deltaX < 0) {
      nextStep();
    }
  };

  return (
    <main
      className={styles.tutorial_main}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchEnd={(e) => handleTouchEnd(e)}
    >
      <div className={styles.small_logo_container}>
        <img src="/assets/logo_small.svg" alt="Small Dakee logo" />
      </div>

      {currentStep < stepsData.length && currentStep >= 0 ? (
        <div className={styles.step_information}>
          {stepsData[currentStep].heading.map((heading, index) => (
            <h2>{heading}</h2>
          ))}

          <div className={styles.step_logo_container}>
            <img
              src={`/assets/${stepsData[currentStep].icon}`}
              alt={stepsData[currentStep].iconAlt}
            />
          </div>

          <section className={styles.step_information_text}>
            {stepsData[currentStep].text.map((text, index: number) => (
              <div key={index}>
                <p>{text}</p>
                {text == "" && <br />}
              </div>
            ))}
          </section>

          {currentStep == stepsData.length - 1 && (
            <Button text="Done" type="button" link="/tutorial-done" />
          )}

          {/* Progress dots */}
          <div className={styles.steps_progress}>
            {stepsData.map((step, index) => (
              <div
                key={index}
                style={
                  currentStep == index
                    ? { backgroundColor: "var(--color-primary)" }
                    : { backgroundColor: "var(--color-muted)" }
                }
                onClick={() => setCurrentStep(index)}
              ></div>
            ))}
          </div>

          {currentStep != stepsData.length - 1 && (
            <Link href="/" className={styles.skip_tutorial}>
              Skip the tutorial
            </Link>
          )}
        </div>
      ) : (
        <p>There is no data available for the current step.</p>
      )}
    </main>
  );
}
