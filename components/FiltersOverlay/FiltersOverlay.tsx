import React from "react";
import styles from "./FiltersOverlay.module.scss";
import IconBack from "../Icons/IconBack";
import IconFilter from "../Icons/IconFilter";
import { useState, useEffect } from "react";
import { topicsData } from "../../helpers/topics";
import { gendersData } from "../../helpers/genders";

const FiltersOverlay = ({ showOverlay, setShowOverlay }) => {
  const [filterSelections, setFilterSelections] = useState({
    gender: null,
    age: null,
    topic: null,
  });

  const handleFilterSelectionChange = (key: string, value: string) => {
    setFilterSelections((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  useEffect(() => {
    console.log(filterSelections);
  }, [filterSelections]);

  return (
    <>
      {showOverlay && (
        <div className={styles.filters_overlay}>
          <div
            className={styles.back_arrow_container}
            onClick={() => setShowOverlay(false)}
          >
            <IconBack
              color={"var(--color-secondary)"}
              height={"23px"}
              width={"10px"}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.heading_container}>
              <IconFilter
                color={"var(--color-secondary)"}
                height={"15px"}
                width={"15px"}
              />
              Filters
            </div>

            <div className={styles.gender_container}>
              <p className={styles.filter_section_heading}>Gender</p>
              <ul>
                {gendersData?.map((gender, index) => (
                  <li
                    key={index}
                    onClick={() =>
                      handleFilterSelectionChange("gender", gender.type)
                    }
                    className={` ${
                      gender.type === filterSelections.gender
                        ? styles.filter_selected
                        : ""
                    }`}
                  >
                    {gender.type}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.age_container}>
              <p className={styles.filter_section_heading}>Age</p>
              <div className={styles.age_bar_container}>
                <input
                  type="range"
                  min={"20"}
                  defaultValue={"40"}
                  max={"60"}
                  onChange={(e) =>
                    handleFilterSelectionChange("age", e.target.value)
                  }
                />
                <ul>
                  <li>&lt;20</li>
                  <li>40</li>
                  <li>60+</li>
                </ul>
              </div>
            </div>

            <div className={styles.advice_container}>
              <p className={styles.filter_section_heading}>Advices in</p>
              <div className={styles.advice_grid}>
                {topicsData.map((topic, index) => (
                  <div
                    className={`${styles.topic} ${
                      topic.type === filterSelections.topic
                        ? styles.filter_selected
                        : ""
                    }`}
                    key={index}
                    onClick={() =>
                      handleFilterSelectionChange("topic", topic.type)
                    }
                  >
                    <div>{topic.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersOverlay;
