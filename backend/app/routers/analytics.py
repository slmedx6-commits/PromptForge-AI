from fastapi import APIRouter
from pydantic import BaseModel

from app.ml.analytics_model import AnalyticsModel

router = APIRouter()

analytics = AnalyticsModel()


class AnalyticsRequest(BaseModel):
    original: str
    enhanced: str


@router.post("/")
def analyze(request: AnalyticsRequest):

    return analytics.analyze(
        request.original,
        request.enhanced,
    )