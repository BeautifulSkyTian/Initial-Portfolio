function ExperienceCard({ experience }) {
    return (
        <article className="experienceCard">
            <div className="experienceCard__heading">
                <div>
                    <h3>{experience.title}</h3>
                    <p>{experience.organization}</p>
                </div>

                <p>{experience.period}</p>
            </div>

            <p>{experience.description}</p>

            <ul>
                {experience.achievements.map(achievement => (
                    <li key={achievement}>
                        {achievement}
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default ExperienceCard;