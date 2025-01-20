import React from "react";
import styles from "./index.module.css"

const Frontend = () => {
    return (
        <div className={styles.skills__content}>
            <h3 className={styles.skills__title}>Frontend Engineer</h3>

            <div className={styles.skills__box}>
                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                        <h3 className={styles.skills__name}>JavaScript</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>NextJS</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>ReactJS</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Tailwind CSS</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>HTML</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>TypeScript</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.skills__group}>
                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>CSS</h3>
                        </div>
                    </div>

                    <div className={styles.skills__data}>
                        <i className={`bx bx-badge-check ${styles.icon}`}></i>

                        <div>
                            <h3 className={styles.skills__name}>Vite</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;
