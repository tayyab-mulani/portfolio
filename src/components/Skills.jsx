import {skillCategories} from "../data.jsx";

const Skills = () => {
    return (
        <>
            {skillCategories.map(({id, category, icon, skills}) => (
                <div className="skill__card" key={id}>
                    <div className="skill__card-header">
                        <div className="skill__card-icon">{icon}</div>
                        <div>
                            <h3 className="skill__card-title">{category}</h3>
                            <div className="skill__card-underline"></div>
                        </div>
                    </div>
                    <div className="skill__card-list">
                        {skills.map(({title, icon: skillIcon}, index) => (
                            <div className="skill__card-item" key={index}>
                                <span className="skill__card-item-icon">{skillIcon}</span>
                                <span className="skill__card-item-name">{title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skills;
