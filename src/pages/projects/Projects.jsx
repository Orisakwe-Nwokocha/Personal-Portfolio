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
            title: "Frontend Projects",
            description: "I create user-friendly, responsive web pages using modern JavaScript frameworks like React, " +
                "as well as basic HTML and CSS. With a strong background in building dynamic web applications, I leverage " +
                "technologies like React, TypeScript, JavaScript, Tailwind, and have extensive experience in API integration " +
                "using Axios. My work is optimized for performance and accessibility, ensuring seamless experiences across " +
                "mobile devices.",
            icon: "uil-browser",
            projects: [
                {
                    projectName: "Nexcent Landing page",
                    githubLink: "https://intermediate-figma-project.vercel.app/"
                },
                {
                    projectName: "Practice Personal Portfolio",
                    githubLink: "https://codepen.io/Codinhood/full/gORgoRw"
                },
                {
                    projectName: "Tribute Page",
                    githubLink: "https://codepen.io/Codinhood/full/dyRMKeL"
                }
            ]
        },
        {
            title: "Live Fullstack Projects (Deployed)",
            description: "Built scalable and efficient fullstack systems using Java Spring Boot for the backend, Reactjs, " +
                "Nextjs, Typescript, TailwindCSS for the frontend and " +
                "databases like PostgreSQL or MySQL. These projects follow TDD (Test-Driven Development) principles, " +
                "utilize GitHub Actions for CI/CD, and are deployed on platforms such as Render or AWS for the backend. ",
            icon: "uil-layers",
            projects: [
                {
                    projectName: "EaziRent Housing Platform",
                    githubLink: "https://eazi-rent-eight.vercel.app/"
                },
                {
                    projectName: "Alexandria Library System",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/Alexandria-Library-Management-System"
                }
            ]
        },
        {
            title: "Backend Projects (GitHub Repos)",
            description: "Experienced in building scalable and efficient backend systems using technologies such as " +
                "Java (Spring Boot) and Python (Django). These projects include both robust backend applications and " +
                "data structure/algorithm implementations written in Java and JavaScript, ensuring performance, security, " +
                "and optimal problem-solving capabilities.",
            icon: "uil-database",
            projects: [
                {
                    projectName: "E-Commerce app (Springboot)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/eStore"
                },
                {
                    projectName: "User Auth-Authz Manager (Springboot)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/User-Auth-Authz-Mgt-Service"
                },
                {
                    projectName: "Account Management System (Django)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/AccountManagementSystem"
                },
                {
                    projectName: "Data Structures & Algorithms (Java)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/SemicolonJava"
                },
                {
                    projectName: "Data Structures & Algorithms (Python)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/semicolon_python"
                },
                {
                    projectName: "Data Structures & Algorithms (JavaScript)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/SemicolonJavaScript"
                },
                {
                    projectName: "Election Management System (Springboot)",
                    githubLink: "https://github.com/Orisakwe-Nwokocha/ElectionManagementSystem"
                },
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
