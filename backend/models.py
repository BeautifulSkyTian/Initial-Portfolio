from sqlalchemy import Column, Integer, String, Text, JSON
from database import Base


class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String, nullable=False)

    category = Column(String, nullable=False)

    description = Column(Text, nullable=False)

    technologies = Column(JSON, nullable=False)

    highlights = Column(JSON, nullable=False)

    github_url = Column(String)

    live_url = Column(String)