from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.conversation import (
    ConversationCreate,
    ConversationResponse,
)
from app.services.conversation_service import (
    create_conversation,
    get_conversations,
    get_conversation,
    delete_conversation,
)

router = APIRouter()


# Temporary user id until JWT integration
USER_ID = 1


@router.post("/", response_model=ConversationResponse)
def create(
    request: ConversationCreate,
    db: Session = Depends(get_db),
):
    return create_conversation(
        db,
        USER_ID,
        request.title,
    )


@router.get("/", response_model=list[ConversationResponse])
def all_conversations(
    db: Session = Depends(get_db),
):
    return get_conversations(
        db,
        USER_ID,
    )


@router.get("/{conversation_id}")
def one_conversation(
    conversation_id: int,
    db: Session = Depends(get_db),
):
    conversation = get_conversation(
        db,
        conversation_id,
    )

    if not conversation:
        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    return conversation


@router.delete("/{conversation_id}")
def delete(
    conversation_id: int,
    db: Session = Depends(get_db),
):
    conversation = get_conversation(
        db,
        conversation_id,
    )

    if not conversation:
        raise HTTPException(
            status_code=404,
            detail="Conversation not found",
        )

    delete_conversation(
        db,
        conversation,
    )

    return {
        "message": "Conversation deleted"
    }