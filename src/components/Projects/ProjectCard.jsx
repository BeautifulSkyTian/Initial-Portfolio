import { useState } from "react";

function ProjectCard({ project, onDelete, onUpdate}) {
    const [isEditing, setIsEditing] = useState(false); 

    const [formData, setFormData] = useState({
        title: project.title,
        category: project.category,
        description: project.description,
        technologies: project.technologies.join(", "),
        highlights: project.highlights.join(", "),
        githubUrl: project.githubUrl || "",
        liveUrl: project.liveUrl || ""
    });

    function handleChange(event){
        const {name, value} = event.target; 
        setFormData(currentData => ({
            ...currentData, 
            [name]: value
        })); 
    }

    function handleCancel(){
        setFormData({
            title: project.title,
            category: project.category,
            description: project.description,
            technologies: project.technologies.join(", "),
            highlights: project.highlights.join(", "),
            githubUrl: project.githubUrl || "",
            liveUrl: project.liveUrl || ""
        });
        setIsEditing(false);
    }

    async function handleSave(){
        const updatedData = {
            title: formData.title,
            category: formData.category,
            description: formData.description,
            technologies: formData.technologies
                .split(",")
                .map(item => item.trim())
                .filter(item => item !== ""),
            highlights: formData.highlights
                .split(",")
                .map(item => item.trim())
                .filter(item => item !== ""),
            github_url: formData.githubUrl,
            live_url: formData.liveUrl
        };

        await onUpdate(project.id, updatedData); 
        setIsEditing(false); 
    }

    if (isEditing) {
        return (
            <article className="projectCard projectCard--editing">
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <input
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <input
                    name="technologies"
                    value={formData.technologies}
                    onChange={handleChange}
                    placeholder="Comma-separated: React, FastAPI, SQLite"
                />

                <input
                    name="highlights"
                    value={formData.highlights}
                    onChange={handleChange}
                    placeholder="Comma-separated highlights"
                />

                <input
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleChange}
                />

                <input
                    name="liveUrl"
                    value={formData.liveUrl}
                    onChange={handleChange}
                />

                <div className="projectCard__editActions">
                    <button type="button" onClick={handleSave}>
                        Save
                    </button>

                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </article>
        );
    }

    return (
        <article className="projectCard">
            <div className="projectCard__header">
                <p className="projectCard__category">{project.category}</p>
                <h3>{project.title}</h3>
            </div>

            <p className="projectCard__description">{project.description}</p>

            <ul className="projectCard__highlights">
                {project.highlights.map(highlight => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>

            <ul className="projectCard__technologies">
                {project.technologies.map(technology => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

            <div className="projectCard__links">
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                )}

                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live Demo
                    </a>
                )}
            </div>

            <div className="projectCard__actions">
                <button type="button" onClick={() => setIsEditing(true)}>
                    Edit
                </button>

                <button type="button" onClick={() => onDelete(project.id)}>
                    Delete
                </button>
            </div>
        </article>
    );
}

export default ProjectCard;