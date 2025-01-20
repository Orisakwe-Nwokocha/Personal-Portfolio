import React from 'react';
import styles from './index.module.css'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
       <footer className={styles.footer}>
           <div className={styles.footer__container}>

               <div className={styles.footer__social}>
                   <a href='https://www.linkedin.com/in/orisha/' className={styles.footer__social_link}
                      target='_blank' rel='noopener noreferrer'>
                       <i className='fab fa-linkedin'></i> LinkedIn
                   </a>
                   <a href='https://github.com/Orisakwe-Nwokocha' className={styles.footer__social_link} target='_blank'
                      rel='noopener noreferrer'>
                       <i className='fab fa-github'></i> GitHub
                   </a>
               </div>
               <span className={styles.footer__copy}>&#169; {year} Orisakwe Nwokocha. All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;
