import "./Projects.css"; 
import projects from "../../data/project.js";
import ProjectCard from "./ProjectCard.jsx";
import { useEffect, useState } from "react";

function Projects(){

    const [projectList, setProjectList] = useState([]); 
    const [selectedFilter, setSelectedFilter] = useState("All"); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);  

    const filters = [
        "All", 
        "AI", 
        "Personal Project", 
        "Hackathon Project", 
        "School Project"
    ]; 
    
    const filteredProjects = projectList.filter(project => {
        if (selectedFilter === "All"){
            return true; 
        }

        return project.category === selectedFilter; 
    }); 

    async function handleDelete(projectId) {
        try{
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/projects/${projectId}`,
                {
                    method: "DELETE"
                }
            )
        
            if(!response.ok){
                throw new Error("Failed to delete project"); 
            }

            setProjectList(currentProjects =>
                currentProjects.filter(project => project.id !== projectId)
            );
        } catch(error){
            setError(error.message); 
        }
         
    }

    async function loadProjects(){
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/projects`
            );
            
            if (!response.ok){
                throw new Error("failed to fetch projects"); 
            }

            const data = await response.json(); 

            setProjectList(data)
            setLoading(false); 

        } catch(error) {
            setError(error.message); 
            setLoading(false); 
        }
    }

    useEffect(() => {
        loadProjects(); 
    }, []);

    if (loading){
        return <p>Loading projects...</p>; 
    }

    if (error){
        return <p>{error}</p>; 
    }

    return(
        <section id="projects" className="projects"> 
            <div className="projectFilters">
                {filters.map(filter => {
                    const isActive = selectedFilter === filter;

                    return (
                        <button
                            key={filter}
                            type="button"
                            className={
                                isActive
                                    ? "filterButton active"
                                    : "filterButton"
                            }
                            aria-pressed={isActive}
                            onClick={() => setSelectedFilter(filter)}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>

            <div className="projectGrid">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDelete={handleDelete}
                        />
                    ))
                ) : (
                    <p className="projects__empty">
                        No projects are available in this category yet.
                    </p>
                )}
            </div>
        </section>
    ); 
}

export default Projects; 