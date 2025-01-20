import React from "react";
import styles from './index.module.css'

const Technologies = () => {
    return (
        <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>Technologies</h3>

            <div className={styles.skills__box}>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Spring Boot</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Test Driven Development (TDD)</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Fineract</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>PostgreSQL</h3>
                        </div>
                    </div>

                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Django</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Git & GitHub Actions</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>MySQL</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Postman</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>GitLab</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Maven</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>CI/CD</h3>
                        </div>

                    </div>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Gradle</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>
                        <div>
                            <h3 className={styles.skills__name}>Microservices</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>
                        <div>
                            <h3 className={styles.skills__name}>Docker</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
