import React from "react";
import styles from './index.module.css';

const Qualification = () => {
    return (
        <section className={styles.section} id="qualifications">
            <h2 className={styles.section__title}>Qualifications</h2>
            <span className={styles.section__subtitle}>My personal journey</span>

            <div className={styles.qualification__container}>
                <div className={styles.qualification__columns}>

                    {/* Experience Column */}
                    <div className={styles.qualification__content}>
                        <h3 className={styles.column__title}>
                            <i className="uil-briefcase-alt"></i> Experience
                        </h3>
                        <div className={styles.qualification__box}>
                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Senior Software Engineer</h3>
                                    <span className={styles.qualification__subtitle}>Remita (SystemSpecs)</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2025 – Present
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Lead Software Engineer</h3>
                                    <span className={styles.qualification__subtitle}>Prunny Technologies</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2024 – Present
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Software Engineering Trainee</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon Africa</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2023 – 2024
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className={styles.qualification__content}>
                        <h3 className={styles.column__title}>
                            <i className="uil-graduation-cap"></i> Education
                        </h3>
                        <div className={styles.qualification__box}>
                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Master of Business Administration</h3>
                                    <span className={styles.qualification__subtitle}>University of Chichester, UK</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2020
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>B.Sc. Accounting</h3>
                                    <span className={styles.qualification__subtitle}>Caritas University, Nigeria</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2016
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
