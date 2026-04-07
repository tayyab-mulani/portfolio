import React from "react";
import {projects} from "../../data.jsx";
import PortfolioItem from "../../components/PortfolioItem.jsx"
import "./projects.css"

const Portfolio =() => {
    return(
        <section className={"projects section"}>
            <h2 className={"section__title"}> My <span>Projects</span></h2>

            <p className={"projects_section_tag"}>
                Click on a card to view detailed information about each project.
            </p>
            <div className={"projects__container container grid"}>
                {projects.map((item) => {
                    return <PortfolioItem key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}
export default Portfolio