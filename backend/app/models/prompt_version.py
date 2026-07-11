from sqlalchemy import Column, Integer, ForeignKey, Text

from app.db.base import Base


class PromptVersion(Base):
    __tablename__ = "prompt_versions"

    id = Column(Integer, primary_key=True)

    session_id = Column(Integer, ForeignKey("prompt_sessions.id"))

    version = Column(Integer)

    original_prompt = Column(Text)

    enhanced_prompt = Column(Text)