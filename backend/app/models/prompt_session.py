from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship

from app.db.base import Base


class PromptSession(Base):
    __tablename__ = "prompt_sessions"

    id = Column(Integer, primary_key=True, index=True)

    session_uuid = Column(String(100), unique=True, index=True)

    title = Column(String(255))

    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User")