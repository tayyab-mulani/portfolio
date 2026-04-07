import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaCertificate,
    FaJava,
    FaServer,
    FaDatabase,
    FaCloud,
} from 'react-icons/fa';
import {FiFileText, FiUser, FiExternalLink} from 'react-icons/fi';
import {
    SiHtml5, SiJavascript, SiCss3, SiTypescript, SiPython,
    SiAngular, SiReact, SiMui, SiBootstrap, SiTailwindcss,
    SiMongodb, SiNodedotjs, SiExpress, SiNextdotjs, SiMysql,
    SiGraphql, SiVuedotjs, SiAmazons3, SiAmazonec2, SiAwslambda,
    SiCplusplus,
} from 'react-icons/si';

import Work1 from './assets/elder-prj.webp';
import Work2 from './assets/AMZN-prj.webp';
import Work3 from './assets/Smarttime-prj.webp';
import Work4 from './assets/BeyondCoffee.webp';
import Work5 from './assets/fairshare-prj.webp';
import Work6 from './assets/ClubHub.webp';
import Work7 from './assets/ARS - prj.webp';
import Work8 from './assets/Analytics.webp';
import Work9 from './assets/budgetwise.webp';

export const links = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome className='nav__icon'/>,
        path: '/',
    },

    {
        id: 2,
        name: 'About',
        icon: <FaUser className='nav__icon'/>,
        path: '/about',
    },

    {
        id: 3,
        name: 'Projects',
        icon: <FaFolderOpen className='nav__icon'/>,
        path: '/projects',
    },

    {
        id: 4,
        name: 'Contact',
        icon: <FaEnvelopeOpen className='nav__icon'/>,
        path: '/contact',
    },
];

export const personalInfo = [
    {
        id: 1,
        title: 'First Name : ',
        description: 'Tayyab',
    },

    {
        id: 2,
        title: 'Last Name : ',
        description: 'Mulani',
    },
    {
        id: 6,
        title: 'Address : ',
        description: 'Boston, MA, USA (Open to Relocation)',
    },

    {
        id: 7,
        title: 'Phone : ',
        description: '+1 (857) 693-3709',
    },

    {
        id: 8,
        title: 'Email : ',
        description: 'mulani.ta@northeastern.edu',
    },
];

export const stats = [
    {
        id: 1,
        no: '1+',
        title: 'Years of Experience',
    },

    {
        id: 2,
        no: '10+',
        title: 'Completed Projects',
    },

    {
        id: 3,
        no: '22+',
        title: 'Acquired Skills',
    },
];

export const resume = [
    {
        id: 1,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'January 2026 - Present',
        title: 'Full Stack Devloper Intern<span>Find Me LLC, New York, NY, USA </span>',
        desc: 'Tech Stack: Next.js, Python Flask, Express.js, MongoDB, Supabase',
        overview: [
            'Redesigned the company website using WordPress and Elementor, improving visual consistency, responsiveness, and SEO across the site.',
            'Developed and deployed full-stack features on a Next.js and Node.js platform, including a dark/light theme toggle synced across 10+ frontend components and persisted via MongoDB.',
            'Built a Feedback & Support Tickets system from scratch using Next.js App Router, Supabase, Tailwind CSS, and Zustand, enabling platform-wide ticket submission and tracking for all users.',
            'Delivered features across 2 deployments per week in an Agile environment, collaborating across frontend and backend repositories with a cross-functional team.',
        ],
    },

    {
        id: 2,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'June 2023 - August 2023',
        title: 'Web Developer Intern<span>Oasis Infobyte, Pune, MH, India</span>',
        desc: 'Tech Stack: HTML, CSS, JavaScript, Bootstrap, Figma, React.js',
        overview: [
            'Contributed to building a CRM platform using the MERN stack, designing MongoDB schemas and ExpressJS routes for a 5,000+ user system',
            'Integrated AWS S3 functionality, implementing secure file upload mechanisms that reduced upload errors by 15% and maintained data integrity across client document storage.',
            'Researched UI/UX best practices with the design team, creating wireframes and implementing responsive components to achieve 95% cross-browser compatibility'
        ],
    },

    {
        id: 3,
        category: 'experience',
        icon: <FaBriefcase/>,
        year: 'November 2022  - May 2023',
        title: 'Full Stack Devloper Intern<span>TechnoSwift Ltd., Pune, MH, India</span>',
        desc: 'Tech Stack: Java, WebSocket, AWS Lambda, EC2, React.js, Wordpress, Redis, JUnit,',
        overview: [
            'Optimized frontend load times by 30% by refining React state management, implementing code splitting, and virtualizing lists, improving rendering efficiency and user experience on high-traffic pages.',
            'Improved API response times by 40% by optimizing Django REST APIs following MVC architecture with asynchronous processing, efficient query handling, and caching strategies, enhancing system scalability.',
            'Reduced chat latency from 800ms to under 300ms, increasing engagement by 35% through developing a WebSocket-driven real-time chat system and optimizing MongoDB queries, indexing, and Redis caching.',
        ],
    },

    {
        id: 4,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: 'September 2024 - Expected December 2026',
        title: 'Degree: Master of Science in Software Engineering Systems <span> \n Northeastern University, Boston, MA, USA </span>',
        overviewLabel: 'Coursework',
        overview: [
            'Object-Oriented Design',
            'Web Design and User Experience Engineering',
            'Software Engineering',
            'Program Structure and Algorithms',
            'Data Science Engineering',
        ],
    },

    {
        id: 5,
        category: 'education',
        icon: <FaGraduationCap/>,
        year: 'September 2020 - July 2024',
        title: 'Degree: Bachelor of Technology in Electronics & Telecommunication <span> Savitribai Phule Pune University, Pune, MH, India </span>',
        overviewLabel: 'Coursework',
        overview: [
            'Object Oriented Programming',
            'JavaScript',
            'Database Design and Management Systems',
        ],
    },
];

export const skillCategories = [
    {
        id: 1,
        category: 'Frontend',
        icon: <FaCode />,
        skills: [
            { title: 'HTML5',        icon: <SiHtml5       color="#E34F26" /> },
            { title: 'JavaScript',   icon: <SiJavascript  color="#F7DF1E" /> },
            { title: 'CSS3',         icon: <SiCss3        color="#1572B6" /> },
            { title: 'TypeScript',   icon: <SiTypescript  color="#3178C6" /> },
            { title: 'React',        icon: <SiReact       color="#61DAFB" /> },
            { title: 'Angular',      icon: <SiAngular     color="#DD0031" /> },
            { title: 'Vue',          icon: <SiVuedotjs    color="#4FC08D" /> },
            { title: 'Next.js',      icon: <SiNextdotjs   color="#888888" /> },
            { title: 'Material UI',  icon: <SiMui         color="#007FFF" /> },
            { title: 'Bootstrap',    icon: <SiBootstrap   color="#7952B3" /> },
            { title: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
        ],
    },
    {
        id: 2,
        category: 'Backend',
        icon: <FaServer />,
        skills: [
            { title: 'Java',       icon: <FaJava      color="#ED8B00" /> },
            { title: 'Python',     icon: <SiPython    color="#3776AB" /> },
            { title: 'Node.js',    icon: <SiNodedotjs color="#339933" /> },
            { title: 'Express.js', icon: <SiExpress   color="#888888" /> },
            { title: 'C/C++',      icon: <SiCplusplus color="#00599C" /> },
        ],
    },
    {
        id: 3,
        category: 'Databases',
        icon: <FaDatabase />,
        skills: [
            { title: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { title: 'SQL',     icon: <SiMysql   color="#4479A1" /> },
            { title: 'GraphQL', icon: <SiGraphql color="#E10098" /> },
        ],
    },
    {
        id: 4,
        category: 'Cloud & AWS',
        icon: <FaCloud />,
        skills: [
            { title: 'AWS S3',     icon: <SiAmazons3  color="#FF9900" /> },
            { title: 'AWS EC2',    icon: <SiAmazonec2 color="#FF9900" /> },
            { title: 'AWS Lambda', icon: <SiAwslambda color="#FF9900" /> },
        ],
    },
];

export const projects = [
    {
        id: 1,
        img: Work1,
        title: 'Alexander Elder Biography Assistant & Triple Screen Trading System',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'An AI-powered financial research tool combining a RAG-based biography chatbot with an interactive backtesting dashboard. <b>Key features include:</b><br/>• Built a RAG chatbot using LangChain, ChromaDB, and paraphrase-MiniLM-L6-v2 embeddings over a custom 647-row Q&A dataset covering Elder\'s trading philosophy across 4 labels<br/>• Integrated Groq (Llama 3) as the LLM backend for fast, context-grounded responses with source transparency<br/>• Implemented Alexander Elder\'s Triple Screen Trading Strategy (EMA trend + MACD momentum + RSI timing) as a fully parameterized backtesting engine<br/>• Designed an interactive Streamlit dashboard allowing users to backtest any U.S. stock with adjustable EMA windows, RSI thresholds, and date ranges<br/>• Visualized trade signals, MACD histogram, RSI levels, and portfolio PnL equity curve using Plotly',
            },
            {
                icon: <FiUser/>,
                title: 'Date',
                desc: 'Jan 2026 - Present',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'Python, LangChain, ChromaDB, Groq, Sentence-Transformers, Streamlit, yFinance, Plotly, RAG',
            },
            // {
            //     icon: <FiExternalLink/>,
            //     title: 'GitHub',
            //     link: 'https://github.com/tayyab-mulani/',
            // },
            {
                icon: <FaCertificate/>,
                title: 'Course',
                desc: 'CSYE 7380 - Theory and Practical Applications of AI Generative Modeling',
            },
        ],
    },

    {
        id: 2,
        img: Work2,
        title: 'AMZN Algorithmic Trading Strategy & Predictive Modeling',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'An end-to-end quantitative research pipeline applied to Amazon (AMZN) stock, covering statistical modeling, feature engineering, machine learning-based return prediction, and backtested trading simulation for data from January 2020 to June 2025.',
            },
            {
                icon: <FiUser/>,
                title: 'Date',
                desc: 'Sept 2025 to Dec 2025',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'Python, Jupyter Notebook, pandas, pandas-ta, yfinance, scikit-learn, XGBoost, Random Forest, SVR, Fama-French Factors, Matplotlib, Seaborn',
            },
            {
                icon: <FiExternalLink/>,
                title: 'GitHub',
                link: 'https://github.com/tayyab-mulani/AMZN-Algorithmic-Trading-Strategy-Predictive-Modeling',
            },
            {
                icon: <FaCertificate/>,
                title: 'Course',
                desc: 'INFO 6105 - Data Science Engineering Methods and Tools',
            },
        ],
    },

    {
        id: 3,
        img: Work3,
        title: 'SmartTime',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'SmartTime is a lightweight JavaFX-based task management tool built for students to plan, organize, and track academic work efficiently.',
            },
            {
                icon: <FiUser/>,
                title: 'Date',
                desc: 'Sept 2025 to Dec 2025',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'Java, JavaFX, Git',
            },
            {
                icon: <FiExternalLink/>,
                title: 'GitHub',
                link: 'https://github.com/tayyab-mulani/smart-time',
            },
            {
                icon: <FaCertificate/>,
                title: 'Course',
                desc: 'INFO 6205 - Program Structure and Algorithms',
            },
        ],
    },

    {
        id: 4,
        img: Work4,
        title: 'Beyond Coffee',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'Beyond Coffee is a mobile app UI/UX prototype for a full-featured café loyalty and ordering platform, designed end-to-end in Figma. <b>Key Features:</b><br/>• A streamlined onboarding and authentication flow covering user registration, login, OTP-based password recovery, and guest access<br/>• A dynamic menu browsing experience with categorized items (Coffee, Savories, Seasonal Favorites) and personalized greetings for logged-in users<br/>• A tiered rewards system where users earn points per dollar spent ($1 = 12 points) and redeem them across customizable categories — Coffee, Savories, and Pastries — with milestone-based unlocks<br/>• A full cart and checkout flow supporting item quantity management, subtotal and tax calculation, Dine-In and Takeaway order options, and Apple Pay / card payment integration<br/>• Real-time order status tracking with timestamped updates (Order Received → Preparing → Ready for Pickup) and in-app support contact<br/>• A transaction history screen displaying past orders, reward points earned, and coupon redemptions organized by date',
            },
            {
                icon: <FiUser/>,
                title: 'Date',
                desc: 'Jan 2025 to Apr 2025',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'Figma, User Experience (UX), Wireframing, Prototyping, User Research, Design Thinking, Product Design',
            },
            {
                icon: <FaCertificate/>,
                title: 'Course',
                desc: 'CSYE 7280 - User Experience Design and Testing',
            },
            {
                icon: <FiExternalLink/>,
                title: 'Figma Prototype',
                link: 'https://www.figma.com/design/fc0K2zX15oZmzp9Non9s16/BeyondCoffee?node-id=0-1&p=f',
            },
        ],
    },

    {
        id: 5,
        img: Work5,
        title: 'FairShare - Group Expense & Investment Management',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'FairShare is a full-stack web application for group financial management helping users track shared expenses, investments, settlements, and contributions within financial groups.',
            },
            {
                icon: <FiUser/>,
                title: 'Date',
                desc: 'Jan 2025 to Apr 2025',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'React, Tailwind CSS, Node.js, Express, JWT, MongoDB, Jest, Sinon, GitHub Actions, Render',
            },
            {
                icon: <FiExternalLink/>,
                title: 'GitHub',
                link: 'https://github.com/tayyab-mulani/FairShare',
            },
            {
                icon: <FaCertificate/>,
                title: 'Course',
                desc: 'CSYE 7230 - Software Engineering',
            },
        ],
    },

    {
        id: 6,
        img: Work6,
        title: 'Northeastern Club Hub PWA Application',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'A Centralized platform where clubs can share events, announcements, and updates',
            },
            {
                icon: <FiUser/>,
                title: 'Date ',
                desc: 'Sept 2024 to Dec 2024',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'React JS, TypeScript, MongoDB, Node JS, i18next, JWT Authentication',
            },
            {
                icon: <FiExternalLink/>,
                title: 'GitHub',
                link: 'https://github.com/tayyab-mulani/northeastern-clubhub',
            },
            {
                icon: <FaCertificate/>,
                title: 'Course',
                desc: 'INFO 6150 - Web Design and User Experience Engineering',
            },
        ],
    },

    {
        id: 7,
        img: Work7,
        title: 'Academic Registration System',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'A full-stack web application for managing university course registration. Supports three user roles: Student, Faculty, and Admin each with dedicated dashboards and workflows.',
            },
            {
                icon: <FiUser/>,
                title: 'Date ',
                desc: 'Sept 2024 to Dec 2024',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'Java, Spring Boot, React, Material-UI, MongoDB, Maven, REST API',
            },
            {
                icon: <FiExternalLink/>,
                title: 'GitHub',
                link: 'https://github.com/tayyab-mulani/Academic-Registration-System',
            },
            {
                icon: <FaCertificate/>,
                title: 'Course',
                desc: 'CSYE 6200 - Concepts of Object-Oriented Design',
            },
        ],
    },

    {
        id: 8,
        img: Work8,
        title: 'Supply Chain Analytics Platform',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'An analytics platform that transforms supply chain data into actionable insights through interactive Tableau dashboards.',
            },
            {
                icon: <FiUser/>,
                title: 'Date',
                desc: 'Sept 2024 to Dec 2024',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'Node.js, Express.js, PostgreSQL, Tableau, AWS EC2, GitHub Actions (CI/CD), Docker, Postman, Git.',
            },
        ],
    },

    {
        id: 9,
        img: Work9,
        title: 'BudgetWise',
        details: [
            {
                icon: <FiFileText/>,
                title: 'Project',
                desc: 'A financial management app that tracks expenses.',
            },
            {
                icon: <FiUser/>,
                title: 'Date',
                desc: 'Aug 2023 to Sept 2023',
            },
            {
                icon: <FaCode/>,
                title: 'Technologies',
                desc: 'MongoDB, Express.js, React, Node.js, Chart.js, Git/GitHub',
            },
            {
                icon: <FiExternalLink/>,
                title: 'GitHub',
                link: 'https://github.com/tayyab-mulani/budgetwise',
            },
        ],
    },
];
