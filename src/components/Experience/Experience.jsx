import experiences from "../../data/experience.js";
import ExperienceCard from "./ExperienceCard.jsx";
import "./Experience.css";

function Experience() {
    return (
        <section id="experience" className="experience">
            <div className="sectionContainer">
                <p className="sectionLabel">Experience</p>

                <h2>How I have applied my skills</h2>

                <div className="experience__list">
                    {experiences.map(experience => (
                        <ExperienceCard
                            key={experience.id}
                            experience={experience}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;