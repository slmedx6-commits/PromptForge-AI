from pydantic import BaseModel


class EnhanceRequest(BaseModel):
    title: str
    prompt: str
    session_id: str | None = None