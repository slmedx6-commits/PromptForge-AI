from fastapi import APIRouter

from app.routers.auth import router as auth_router
from app.routers.prompt import router as prompt_router
from app.routers.comparison import router as comparison_router
from app.routers.analytics import router as analytics_router
from app.routers.conversation import router as conversation_router
from app.routers.message import router as message_router
from app.routers.dashboard import router as dashboard_router

router = APIRouter()

# Authentication
router.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"],
)

# Prompt Forge
router.include_router(
    prompt_router,
    prefix="/prompt",
    tags=["Prompt Forge"],
)
router.include_router(
    conversation_router,
    prefix="/conversations",
    tags=["Conversations"],
)
router.include_router(
    message_router,
    prefix="/messages",
    tags=["Messages"],
)
router.include_router(
    dashboard_router,
    tags=["Dashboard"]
)
