from fastapi import FastAPI, Depends
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