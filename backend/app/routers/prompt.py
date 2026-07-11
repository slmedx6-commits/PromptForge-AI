from fastapi import APIRouter
from pydantic import BaseModel

from app.services.prompt_service import enhance_prompt

router = APIRouter()


class PromptRequest(BaseModel):
    prompt: str


@router.post("/enhance")
async def enhance(request: PromptRequest):
    return enhance_prompt(request.prompt)