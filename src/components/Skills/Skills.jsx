import skillGroups from "../../data/skills";
import "./Skills.css"; 

function Skills(){
    return(
        <section id="skills" className="skills"> 
            <div className="sectionContainer">
                <p className="sectionLabel">Skills</p>

                <h2>Technologies I work with</h2>

                <div className="skills_grid">
                    {skillGroups.map(group => (
                        <article
                            key={group.id}
                            className="skillGroup"
                        >
                            <h3>{group.title}</h3>

                            <ul className="skillGroupo_list">
                                {group.skills.map(skill => (
                                    <li key={skill}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    ); 
}

export default Skills; 