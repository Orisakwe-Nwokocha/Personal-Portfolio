import React from "react";
import styles from "./index.module.css";

const Social = () => {
    return (
        <div className={styles.home__social}>
            <a href="https://www.linkedin.com/in/orisha/" className={styles.home__socialIcon} target='_blank'
               rel='noopener noreferrer'>
                <i className="fab fa-linkedin"></i>
            </a>

            <a href="https://github.com/Orisakwe-Nwokocha" className={styles.home__socialIcon} target='_blank'
               rel='noopener noreferrer'>
                <i className="fab fa-github"></i>
            </a>
        </div>
    );
};

export default Social;
