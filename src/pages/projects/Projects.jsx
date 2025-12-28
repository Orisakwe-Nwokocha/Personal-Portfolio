import React, {useEffect, useRef, useState} from 'react';
import styles from './index.module.css'

const ServiceModal = ({ toggleTab, toggleState, index, title, description, projects }) => {

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                toggleTab(0);
            }
        };

        if (toggleState === index) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleState, index, toggleTab]);

    return (
        <div className={toggleState === index ? `${styles.services__modal} ${styles.active_modal}` : styles.services__modal}>
            <div className={styles.services__modal_content} ref={modalRef}>
                <i onClick={() => toggleTab(0)} className={`uil uil-times ${styles.services__modal_close}`}></i>
                <h3 className={styles.services__modal_title}>{title}</h3>
                <p className={styles.services__modal_description}>{description}</p>

                <h4>Projects</h4>
                <ul className={styles.services__modal_projects}>
                    {projects.map((project, i) => (
                        <li key={i} className={styles.services__modal_project}>
                            <i className={`uil uil-folder ${styles.services__modal_icon}`}></i>
                            <p className={styles.services__modal_info}>

                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    {project.projectName} -{" "}view
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ServiceContent = ({ icon, title, toggleTab, index }) => {
    return (
        <div className={styles.services__content}>
            <div>
                <i className={`uil ${icon} ${styles.services__icon}`}></i>
                <h3 className={styles.services__title}>{title}</h3>
            </div>
            <span className={styles.services__button} onClick={() => toggleTab(index)}>
                View More
                <i className={`uil uil-arrow-right ${styles.services__button_icon}`}></i>
            </span>
        </div>
    );
};

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const serviceData = [
        {
            title: "Professional Experience",
            description: "Enterprise-grade fintech and core banking solutions built at REMITA (SystemSpecs) " +
                "and Prunny Technologies. These systems handle high-volume financial transactions, " +
                "regulatory compliance, and real-time processing using Java, Spring Boot, Apache Fineract, " +
                "and event-driven architectures.",
            icon: "uil-building",
            projects: [
                {
                    projectName: "Invoice Aggregation Framework (E-Invoicing & Tax Compliance)",
                    githubLink: "#"
                },
                {
                    projectName: "Budget & Financial Management Platform (UFMS)",
                    githubLink: "#"
                },
                {
                    projectName: "Core Banking & Account Services (Apache Fineract CBA)",
                    githubLink: "#"
                },
                {
                    projectName: "CTFMB Core Banking Platform - 10K+ monthly transactions",
                    githubLink: "#"
                }
            ]
        },
        {
            title: "Live Fullstack Projects",
            description: "Built scalable and efficient fullstack systems using Java Spring Boot for the backend, " +
                "React, Next.js, TypeScript, TailwindCSS for the frontend, and PostgreSQL for data persistence. " +
                "These projects follow TDD principles and are deployed on cloud platforms.",
            icon: "uil-layers",
            projects: [
                {
                    projectName: "EaziRent Housing Platform (Paystack Payments)",
                    githubLink: "https://eazi-rent-eight.vercel.app/"
                },
                {
                    projectName: "Alexandria Library System",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/Alexandria-Library-Management-System"
                }
            ]
        },
        {
            title: "Backend Projects",
            description: "Scalable backend systems built with Java (Spring Boot) and Python (Django). " +
                "Focus on clean architecture, security, and performance optimization.",
            icon: "uil-database",
            projects: [
                {
                    projectName: "E-Commerce App (Spring Boot)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/eStore"
                },
                {
                    projectName: "User Auth-Authz Manager (Spring Boot)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/User-Auth-Authz-Mgt-Service"
                },
                {
                    projectName: "Account Management System (Django)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/AccountManagementSystem"
                },
                {
                    projectName: "Election Management System (Spring Boot)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/ElectionManagementSystem"
                }
            ]
        }
    ];

    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.section__title}>Projects</h2>
            <span className="section__subtitle">What I Have Done</span>

            <div className={styles.services__container}>
                {serviceData.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceContent
                            icon={service.icon}
                            title={service.title}
                            toggleTab={toggleTab}
                            index={index + 1}
                        />
                        <ServiceModal
                            toggleTab={toggleTab}
                            toggleState={toggleState}
                            index={index + 1}
                            title={service.title}
                            description={service.description}
                            projects={service.projects}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
