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
                            <h3 className={styles.skills__name}>Apache Fineract</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Apache Kafka</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>JHipster</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>PostgreSQL</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Redis</h3>
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

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Kubernetes</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>AWS (EC2, RDS, ECS)</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>CI/CD</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Grafana & Prometheus</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Event-Driven Architecture</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;
