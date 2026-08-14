from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session

from database import Base, engine, get_db
from models import Project
from schemas import ProjectBase, ProjectResponse

from fastapi.middleware.cors import CORSMiddleware


Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get(
        "/projects", 
        response_model=list[ProjectResponse]
)
def get_projects(db: Session = Depends(get_db)):  

    return db.query(Project).all() 

@app.post(
    "/projects", 
    response_model=ProjectBase
)
def create_project(
    project: ProjectBase, 
    db: Session = Depends(get_db)
): 
    new_project = Project(
        title=project.title,
        category=project.category,
        description=project.description,
        technologies=project.technologies,
        highlights=project.highlights,
        github_url=project.github_url,
        live_url=project.live_url
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return new_project

@app.delete("/projects/{project_id}")
def delete_project(project_id: int, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.id == project_id).first()

    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")

    db.delete(project)
    db.commit()

    return {"message": "Project deleted"}

@app.put(
    "/projects/{project_id}", 
    response_model=ProjectResponse
)
def update_project(
    project_id: int, 
    updated_project: ProjectBase, 
    db: Session = Depends(get_db)
): 
    project = db.query(Project).filter(Project.id == project_id).first()

    if project is None: 
        raise HTTPException(status_code=404, detail="Project not found")

    project.title = updated_project.title
    project.category = updated_project.category
    project.description = updated_project.description
    project.technologies = updated_project.technologies
    project.highlights = updated_project.highlights
    project.github_url = updated_project.github_url
    project.live_url = updated_project.live_url

    db.commit()
    db.refresh(project)

    return project