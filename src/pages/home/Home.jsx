import {Link} from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"
import Resume from "../../assets/TayyabResume.pdf";

const Home = () => {
    return (
        <section className='home section'>
            <div className='home__content'>
                <div className={'home__data'}>
                    <span className={'home__greeting'}>Hello, I'm</span>
                    <h1 className={'home__name'}>Tayyab Mulani</h1>
                    <h2 className={'home__tagline'}>I build scalable, full-stack web apps and cloud-native products.</h2>
                    <p className={'home__description'}>
                        I'm a passionate full-stack software engineer with a knack for turning complex problems into
                        elegant solutions. With a strong foundation in both front-end and back-end technologies,
                        I thrive on crafting intuitive user interfaces and developing robust server-side logic.
                        Explore my work and see how I bring ideas to life through code.
                    </p>

                    <div className={'home__buttons'}>
                        <Link to='/about' className='button'>
                            More About Me
                            <span className={'button__icon'}><FaArrowRight/></span>
                        </Link>
                        <a
                            href={Resume}
                            className='button'
                            target='_blank'
                            rel='noreferrer'
                        >
                            View Resume
                            <span className={'button__icon'}><FaArrowRight/></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home
