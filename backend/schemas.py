from pydantic import BaseModel, Field

class ProjectBase(BaseModel): 
    title: str
    category: str
    description: str
    technologies: list[str]
    highlights: list[str]
    github_url: str | None = None
    live_url: str | None = None

class ProjectResponse(ProjectBase): 
    id: int
    title: str
    category: str
    description: str
    technologies: list[str]
    highlights: list[str]

    github_url: str | None = Field(
        default=None,
        serialization_alias="githubUrl"
    )

    live_url: str | None = Field(
        default=None,
        serialization_alias="liveUrl"
    )