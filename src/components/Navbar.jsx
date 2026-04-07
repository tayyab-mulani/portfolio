import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {FiSun, FiMoon} from "react-icons/fi";
import { links }  from '../data';
import "./navbar.css"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const getInitialDark = () => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [isDark, setIsDark] = useState(getInitialDark);

    useEffect(() => {
        document.documentElement.classList.toggle('dark-theme', isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return(
        <nav className='nav'>
            <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu' }`}>
                <ul className='nav__list'>
                    {links.map(({name, icon, path}, index) => {
                        return(
                            <li className= 'nav__item' key={index}>
                                <NavLink to={path} className={ ({isActive}) => isActive ? 'nav__link active-nav' : 'nav__link'
                                }
                                onClick={() => setShowMenu(!showMenu)}
                                >
                                    {icon}
                                    <h3 className='nav__name'>{name}</h3>
                                </NavLink>
                            </li>
                        )
                        }
                    )}

                    {/* Theme toggle — inside list so border matches nav links */}
                    <li className='nav__item'>
                        <button className='nav__link theme__toggle theme__toggle--mobile' onClick={() => setIsDark(!isDark)} aria-label="Toggle theme">
                            {isDark ? <FiSun className='nav__icon'/> : <FiMoon className='nav__icon'/>}
                            <h3 className='theme__label'>{isDark ? 'Light Mode' : 'Dark Mode'}</h3>
                        </button>
                    </li>
                </ul>
            </div>

            {/* Theme toggle — visible on desktop sidebar */}
            <button className='theme__toggle theme__toggle--desktop' onClick={() => setIsDark(!isDark)} aria-label="Toggle theme">
                {isDark ? <FiSun/> : <FiMoon/>}
            </button>

            <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle' }`} onClick={() => setShowMenu(!showMenu)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

export default Navbar