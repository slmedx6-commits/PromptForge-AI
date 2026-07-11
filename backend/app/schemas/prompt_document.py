from pydantic import BaseModel
from typing import List, Optional


class PromptSection(BaseModel):
    title: str
    content: str


class PromptScore(BaseModel):
    clarity: int
    specificity: int
    context: int
    reasoning: int
    structure: int
    constraints: int
    completeness: int
    overall: int


class PromptDocument(BaseModel):

    original_prompt: str

    enhanced_prompt: str

    category: str

    difficulty: str

    provider: str

    model: str

    sections: List[PromptSection]

    score: PromptScore

    session_id: Optional[str] = None