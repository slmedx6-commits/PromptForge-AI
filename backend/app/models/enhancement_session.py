from sqlalchemy import Column, Integer, String
from app.db.base import Base


class EnhancementSession(Base):
    __tablename__ = "enhancement_sessions"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(100), unique=True, index=True)
    owner_id = Column(Integer)