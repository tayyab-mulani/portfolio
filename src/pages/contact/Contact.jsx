import React, {useState} from "react";
import emailjs from "emailjs-com";
import {FaEnvelopeOpen, FaPhoneSquareAlt, FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";
import {FiSend, FiCheckCircle} from "react-icons/fi";
import "./contact.css"

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_xim7l36', 'template_oc6hdqm', formData, 'zYofQhRAgDy4_S0_R')
            .then(() => setSent(true))
            .catch(err => console.log('FAILED...', err));
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <section className="contact section">
            <h2 className="section__title">Get in <span>Touch</span></h2>
            <div className="contact__inner">

                {/* ── Left panel ── */}
                <div className="contact__left">
                    <div className="contact__left-accent" aria-hidden="true"/>
                    <h2 className="contact__heading">
                        Let's build<br/>
                        something <em>great</em><br/>
                        together.
                    </h2>

                    <p className="contact__desc">
                        I'm eager to connect and explore full-time and co-op opportunities.
                        As a Master's student in Software Engineering Systems at Northeastern,
                        I'd love to discuss how I can contribute to your team.
                    </p>

                    <div className="contact__details">
                        <a href="mailto:mulani.ta@northeastern.edu" className="contact__detail-item">
                            <span className="contact__detail-icon"><FaEnvelopeOpen/></span>
                            <span className="contact__detail-text">mulani.ta@northeastern.edu</span>
                        </a>
                        <a href="tel:+18576933709" className="contact__detail-item">
                            <span className="contact__detail-icon"><FaPhoneSquareAlt/></span>
                            <span className="contact__detail-text">+1 (857) 693-3709</span>
                        </a>
                    </div>

                    <div className="contact__socials">
                        <a href="https://github.com/tayyab-mulani" target="_blank" rel="noreferrer" className="contact__social-chip">
                            <FaGithub/> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/tayyab-mulani" target="_blank" rel="noreferrer" className="contact__social-chip">
                            <FaLinkedin/> LinkedIn
                        </a>
                        <a href="https://www.instagram.com/tayyab_4050" target="_blank" rel="noreferrer" className="contact__social-chip">
                            <FaInstagram/> Instagram
                        </a>
                    </div>
                </div>

                {/* ── Right panel ── */}
                <div className="contact__right">
                    {sent ? (
                        <div className="contact__success">
                            <FiCheckCircle className="contact__success-icon"/>
                            <h3>Message sent!</h3>
                            <p>Thanks for reaching out — I'll get back to you soon.</p>
                            <button className="contact__btn" onClick={() => setSent(false)}>Send another</button>
                        </div>
                    ) : (
                        <form className="contact__form" onSubmit={handleSubmit}>
                            <div className="contact__form-row">
                                <div className="contact__field">
                                    <label className="contact__label">Your Name</label>
                                    <input
                                        type="text" name="name"
                                        className="contact__input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="contact__field">
                                    <label className="contact__label">Your Email</label>
                                    <input
                                        type="email" name="email"
                                        className="contact__input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact__field">
                                <label className="contact__label">Subject</label>
                                <input
                                    type="text" name="subject"
                                    className="contact__input"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Let's work together"
                                    required
                                />
                            </div>

                            <div className="contact__field">
                                <label className="contact__label">Your Message</label>
                                <textarea
                                    name="message"
                                    className="contact__input contact__textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    required
                                />
                            </div>

                            <button type="submit" className="contact__btn">
                                Send Message <FiSend/>
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Contact;
