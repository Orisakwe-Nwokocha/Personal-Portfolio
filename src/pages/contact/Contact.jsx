import React from 'react';
import styles from './index.module.css';

const Contact = () => {
    return (
        <section className={styles.section} id='contact'>
            <h2 className={styles.section__title}>Get in touch</h2>
            <span className='section__subtitle'>Contact Me</span>

            <div className={styles.contact__container}>
                <div className={styles.contact__info}>
                    <div className={styles.contact__card}>
                        <i className={`bx bx-mail-send ${styles.contact__card_icon}`}></i>
                        <h3 className={styles.contact__card_title}>Email Address</h3>
                        <span className={styles.contact__card_data}>orisakwenwokocha1@gmail.com</span>
                        <a href='mailto:orisakwenwokocha1@gmail.com' className={styles.contact__button}>
                            Write me
                            <i className={`bx bx-right-arrow-alt ${styles.contact__button_icon}`}></i>
                        </a>
                    </div>

                    <div className={styles.contact__card}>
                        <i className={`bx bxl-whatsapp ${styles.contact__card_icon}`}></i>
                        <h3 className={styles.contact__card_title}>WhatsApp</h3>
                        <span className={styles.contact__card_data}>+234 812 535 8910</span>
                        <a href='https://wa.me/2348125358910' className={styles.contact__button} target='_blank' rel='noopener noreferrer'>
                            Message me
                            <i className={`bx bx-right-arrow-alt ${styles.contact__button_icon}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
