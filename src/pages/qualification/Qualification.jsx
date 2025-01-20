import React from "react";
import styles from './index.module.css';

const Qualification = () => {
    return (
        <section className={styles.section} id="qualifications">
            <h2 className={styles.section__title}>Qualifications</h2>
            <span className={styles.section__subtitle}>My personal journey</span>

            <div className={styles.qualification__container}>
                <div className={styles.qualification__columns}>

                    {/* Education Column */}
                    <div className={styles.qualification__content}>
                        <h3 className={styles.column__title}>
                            <i className="uil-graduation-cap"></i> Education
                        </h3>
                        <div className={styles.qualification__box}>
                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Diploma in Software Engineering</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon Africa</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2023 - 2024
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Diploma in Business Education</h3>
                                    <span className={styles.qualification__subtitle}>Henley Business School, UK</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2024
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>MBA</h3>
                                    <span className={styles.qualification__subtitle}>University of Chichester, UK</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2020
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>OTHM Level 7 Diploma in Strategic
                                        Management and Leadership</h3>
                                    <span
                                        className={styles.qualification__subtitle}>Metropolitan School of Business
                                        & Management, UK</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2019 - 2020
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>BSc Accounting</h3>
                                    <span
                                        className={styles.qualification__subtitle}>Caritas University, Enugu</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2010 - 2016
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div className={styles.qualification__content}>
                        <h3 className={styles.column__title}>
                            <i className="uil-briefcase-alt"></i> Experience
                        </h3>
                        <div className={styles.qualification__box}>
                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Backend Engineer</h3>
                                    <span className={styles.qualification__subtitle}>Prunny Technologies Ltd</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Feb 2024 (current)
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Backend Developer (Intern)</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon, Lagos</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Nov 2023 – Feb 2024
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Software Engineer Trainee</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon Africa</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Jan 2023 – Nov 2023
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Computer Science Teacher</h3>
                                    <span
                                        className={styles.qualification__subtitle}>Government Day Secondary School
                                        (GDSS), Kirfi</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Dec 2016 - Oct 2017
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
