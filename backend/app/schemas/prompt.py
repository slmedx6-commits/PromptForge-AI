from pydantic import BaseModel


class PromptRequest(BaseModel):
    prompt: str


class PromptResponse(BaseModel):
    enhanced_prompt: str
    provider: str
    model: str
    score: float
    scores: dict