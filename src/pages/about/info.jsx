import React from "react";
import styles from "./index.module.css";

const Info = () => {
    return (
        <div className={styles.about__info}>
            <div className={styles.about__box}>
                <i className={`bx bx-award ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Experience</h3>
                <span className={styles.about__subtitle}>3+ years in fintech</span>
            </div>

            <div className={styles.about__box}>
                <i className={`bx bx-credit-card ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Specialization</h3>
                <span className={styles.about__subtitle}>Payments & Core Banking</span>
            </div>

            <div className={styles.about__box}>
                <i className={`bx bx-briefcase-alt ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Current Role</h3>
                <span className={styles.about__subtitle}>Senior Software Engineer</span>
            </div>

            <div className={styles.about__box}>
                <i className={`bx bx-globe ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Availability</h3>
                <span className={styles.about__subtitle}>Open to Remote</span>
            </div>
        </div>
    );
}

export default Info;
