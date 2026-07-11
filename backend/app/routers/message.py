from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.schemas.message import (
    MessageCreate,
    MessageResponse,
)

from app.services.message_service import (
    create_message,
    get_messages,
)

router = APIRouter()


@router.post("/", response_model=MessageResponse)
def create(
    request: MessageCreate,
    db: Session = Depends(get_db),
):
    return create_message(
        db,
        request.conversation_id,
        request.role,
        request.content,
        request.analysis_json,
    )


@router.get("/{conversation_id}")
def messages(
    conversation_id: int,
    db: Session = Depends(get_db),
):
    return get_messages(
        db,
        conversation_id,
    )