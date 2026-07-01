from fastapi import FastAPI

from app.api.v1.router import router
from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Backend API for PromptForge AI",
)

app.include_router(router)