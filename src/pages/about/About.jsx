import React from "react";
import Info from "../../components/Info.jsx";
import Stats from "../../components/Stats.jsx";
import Skills from "../../components/Skills.jsx"
import ResumeItem from "../../components/ResumeItem.jsx"
import "./about.css"
import {resume} from "../../data.jsx";

const About = () => {
    return (
        <main className={"section container"}>
            <section className={'about'}>
                <h2 className={'section__title'}>
                    About <span>Me</span>
                </h2>

                <div className={'about__container grid'}>
                    <div className={"about__info"}>
                        <h3 className={"section__subtitle"}>
                            Personal Information
                        </h3>
                        <ul className={"info__list grid"}>
                            <Info/>
                        </ul>
                    </div>

                    <div className={"about__stats"}>
                        <h3 className={"section__subtitle"}>
                            Stats
                        </h3>
                        <div className={"stats grid"}>
                            <Stats/>
                        </div>
                    </div>
                </div>

            </section>

            <div className={"separator"}></div>

            <section className={"skills"}>
                <h3 className={"section__subtitle subtitle__center"}>
                   My Skills
                </h3>
                <div className={"skills__categories"}>
                    <Skills/>
                </div>
            </section>

            <div className={"separator"}></div>
            <section className={"resume"}>
                <h3 className={"section__subtitle subtitle__center"}>
                    Experience
                </h3>
                <div className={"resume__data"}>
                    {resume.map((val) => {
                        if (val.category === 'experience'){
                            return <ResumeItem key={val.id} {...val}/>;
                        }
                    })}
                </div>
            </section>

            <div className={"separator"}></div>
            <section className={"resume"}>
                <h3 className={"section__subtitle subtitle__center"}>
                    Education
                </h3>
                <div className={"resume__data"}>
                    {resume.map((val) => {
                        if (val.category === 'education'){
                            return <ResumeItem key={val.id} {...val}/>;
                        }
                    })}
                </div>
            </section>
        </main>
    )
}
export default About