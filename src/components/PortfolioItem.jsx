import React, {useState} from "react";
import {FiX, FiExternalLink, FiCalendar, FiCode, FiFileText, FiAward} from "react-icons/fi";
import parse from "html-react-parser";

const PortfolioItem = ({img, title, details}) => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    const project  = details.find(d => d.title?.startsWith('Project'));
    const date     = details.find(d => d.title?.startsWith('Date'));
    const tech     = details.find(d => d.title?.startsWith('Tech'));
    const github   = details.find(d => d.link);
    const course   = details.find(d => d.title?.startsWith('Course'));

    const techList = tech?.desc?.split(',').map(t => t.trim()).filter(Boolean) || [];

    return (
        <div className={"projects__item"}>
            <img src={img} alt={title} className={"projects__img"}/>
            <div className={"projects__hover"} onClick={toggleModal}>
                <h3 className={"projects__title"}>{title}</h3>
            </div>

            {modal && (
                <div className={"projects__modal"} onClick={toggleModal}>
                    <div className={"projects__modal-content"} onClick={e => e.stopPropagation()}>

                        {/* Hero */}
                        <div className={"modal__hero"}>
                            <img src={img} alt={title} className={"modal__hero-img"}/>
                            <div className={"modal__hero-overlay"}>
                                <h3 className={"modal__title"}>{title}</h3>
                            </div>
                            <button className={"modal__close-btn"} onClick={toggleModal}>
                                <FiX/>
                            </button>
                        </div>

                        {/* Body */}
                        <div className={"modal__body"}>

                            {project && (
                                <div className={"modal__section"}>
                                    <span className={"modal__section-label"}>
                                        <FiFileText/> About
                                    </span>
                                    <p className={"modal__section-text"}>{parse(project.desc)}</p>
                                </div>
                            )}

                            <div className={"modal__row"}>
                                {date && (
                                    <div className={"modal__section"}>
                                        <span className={"modal__section-label"}>
                                            <FiCalendar/> Timeline
                                        </span>
                                        <p className={"modal__section-text"}>{date.desc}</p>
                                    </div>
                                )}
                                {course && (
                                    <div className={"modal__section"}>
                                        <span className={"modal__section-label"}>
                                            <FiAward/> Course
                                        </span>
                                        <p className={"modal__section-text"}>{course.desc}</p>
                                    </div>
                                )}
                            </div>

                            {techList.length > 0 && (
                                <div className={"modal__section"}>
                                    <span className={"modal__section-label"}>
                                        <FiCode/> Tech Stack
                                    </span>
                                    <div className={"modal__tech-list"}>
                                        {techList.map((t, i) => (
                                            <span className={"modal__tech-pill"} key={i}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {github && (
                                <a href={github.link} target="_blank" rel="noreferrer" className={"modal__github-btn"}>
                                    <FiExternalLink/> {github.title ? `View ${github.title}` : 'View on GitHub'}
                                </a>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PortfolioItem;
