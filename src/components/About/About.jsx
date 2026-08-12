import "./About.css";

function About() {
    return (
        <section id="about" className="about">
            <div className="sectionContainer">
                <p className="sectionLabel">About</p>

                <h2>Learning deeply and building practically</h2>

                <div className="about__content">
                    <p>
                        I am a computer science student at the University of
                        Toronto with a strong interest in artificial
                        intelligence, software engineering, and backend
                        development.
                    </p>

                    <p>
                        I enjoy understanding how systems work beneath the
                        surface and then applying that understanding to real
                        projects. My recent work has included FastAPI,
                        Gemini-powered applications, React interfaces, and
                        experiments with AI agents and memory systems.
                    </p>

                    <p>
                        I am currently focused on developing the full-stack
                        skills needed to build and deploy useful AI
                        applications.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;