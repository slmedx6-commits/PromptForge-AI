from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class MessageCreate(BaseModel):
    conversation_id: int
    role: str
    content: str
    analysis_json: Optional[str] = "{}"


class MessageResponse(BaseModel):
    id: int
    conversation_id: int
    role: str
    content: str
    analysis_json: Optional[str] = "{}"
    created_at: datetime

    class Config:
        from_attributes = True