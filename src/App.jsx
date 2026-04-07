import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Portfolio from "./pages/projects/Projects.jsx";
import Contact from "./pages/contact/Contact.jsx";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import React, {useEffect} from "react";

// Clear any color previously saved by the style switcher and force the fixed brand color
localStorage.removeItem('color');
document.documentElement.style.setProperty('--first-color', '#2563eb');

function App() {
    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', '#2563eb');
    }, []);

    return (
        <BrowserRouter>
            <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
            <Navbar/>
            <div style={{flex:1, display:'flex', flexDirection:'column'}}>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='projects' element={<Portfolio/>}/>
                <Route path='contact' element={<Contact/>}/>
            </Routes>
            </div>
            <div>
                <footer>
                    <p>&copy; 2026 Tayyab Mulani</p>
                    <div className={"contact__socials"}>
                        <a href={"https://github.com/tayyab-mulani"} className={"contact__social-link"}>
                            <FaGithub/>
                        </a>
                        <a href={"https://www.linkedin.com/in/tayyab-mulani"} className={"contact__social-link"}>
                            <FaLinkedin/>
                        </a>
                        <a href={"https://www.instagram.com/tayyab_4050"} className={"contact__social-link"}>
                            <FaInstagram/>
                        </a>
                    </div>
                </footer>
            </div>
            </div>
        </BrowserRouter>
    )
}

export default App
