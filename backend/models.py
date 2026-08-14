from sqlalchemy import Integer, String, Text, JSON
from sqlalchemy.orm import Mapped, mapped_column
from database import Base

class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    title: Mapped[str] = mapped_column(String, nullable=False)
    category: Mapped[str] = mapped_column(String, nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)
    technologies: Mapped[list] = mapped_column(JSON, nullable=False)
    highlights: Mapped[list] = mapped_column(JSON, nullable=False)
    github_url: Mapped[str | None] = mapped_column(String, default=None)
    live_url: Mapped[str | None] = mapped_column(String, default=None)