from fastapi import APIRouter
from pydantic import BaseModel

from app.ml.comparison_model import ComparisonModel

router = APIRouter()

comparison = ComparisonModel()


class ComparisonRequest(BaseModel):
    original: str
    enhanced: str


@router.post("/")
def compare(request: ComparisonRequest):

    return comparison.compare(
        request.original,
        request.enhanced,
    )