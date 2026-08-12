import "./Hero.css";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero__content">
                <p className="hero__eyebrow">
                    Computer Science @ UofT
                </p>

                <h1>Tianqi Pan</h1>

                <h2>
                    Building intelligent software and AI-powered applications
                </h2>

                <p className="hero__description">
                    I am a computer science student interested in AI agents,
                    language models, backend systems, and practical software
                    that solves meaningful problems.
                </p>

                <div className="hero__actions">
                    <a href="#projects" className="button button--primary">
                        View Projects
                    </a>

                    <a href="#contact" className="button button--secondary">
                        Contact Me
                    </a>
                </div>

                <div className="hero__socials">
                    <a
                        href="https://github.com/BeautifulSkyTian"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/skytian/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="hero__imageContainer">
                <img
                    className="hero__image"
                    src="/profile.jpg"
                    alt="Tianqi Pan"
                />
            </div>
        </section>
    );
}

export default Hero;