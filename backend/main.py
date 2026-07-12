from dotenv import load_dotenv

# Load .env before anything else
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.db.database import Base, engine

import app.models.user
import app.models.conversation
import app.models.message

Base.metadata.create_all(bind=engine)

from app.api.v1.router import router
from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Backend API for PromptForge AI",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    router,
    prefix=settings.API_V1_PREFIX,
    tags=["Version 1"],
)