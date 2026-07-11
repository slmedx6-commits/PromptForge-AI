from sqlalchemy import Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship

from app.db.base import Base


class Prompt(Base):
    __tablename__ = "prompts"

    id = Column(Integer, primary_key=True, index=True)

    title = Column(String(255), nullable=False)

    original_prompt = Column(Text, nullable=False)

    enhanced_prompt = Column(Text)

    score = Column(Integer, default=0)


    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User")