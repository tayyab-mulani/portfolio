import {useState} from "react";
import parse from "html-react-parser";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

const ResumeItem = ({icon, year, title, desc, overview, overviewLabel = 'Overview'}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={"resume__item"}>
                <div className={"resume__icon"}>{icon}</div>
                <span className={"resume__date"}>{year}</span>
                <h3 className={"resume__subtitle"}>{parse(title)}</h3>
                <p className={"resume__description"}>{desc}</p>

                {overview && (
                    <div className={"resume__overview"}>
                        <button
                            className={"resume__overview-toggle"}
                            onClick={() => setOpen(o => !o)}
                        >
                            {overviewLabel}
                            {open ? <FiChevronUp /> : <FiChevronDown />}
                        </button>

                        {open && (
                            <ul className={"resume__overview-list"}>
                                {overview.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default ResumeItem;
