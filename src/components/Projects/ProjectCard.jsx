function ProjectCard({ project }) {
    return (
        <article className="projectCard">
            <div className="projectCard__header">
                <p className="projectCard__category">
                    {project.category}
                </p>

                <h3>{project.title}</h3>
            </div>

            <p className="projectCard__description">
                {project.description}
            </p>

            <ul className="projectCard__highlights">
                {project.highlights.map(highlight => (
                    <li key={highlight}>
                        {highlight}
                    </li>
                ))}
            </ul>

            <ul className="projectCard__technologies">
                {project.technologies.map(technology => (
                    <li key={technology}>
                        {technology}
                    </li>
                ))}
            </ul>

            <div className="projectCard__links">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                )}

                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    );
}

export default ProjectCard;