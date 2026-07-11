from sqlalchemy.orm import Session

from app.models.conversation import Conversation


class ConversationRepository:

    def create(
        self,
        db: Session,
        user_id: int,
        title: str,
    ):
        conversation = Conversation(
            user_id=user_id,
            title=title,
        )

        db.add(conversation)

        db.commit()

        db.refresh(conversation)

        return conversation

    def get_all(
        self,
        db: Session,
        user_id: int,
    ):
        return (
            db.query(Conversation)
            .filter(
                Conversation.user_id == user_id
            )
            .order_by(
                Conversation.updated_at.desc()
            )
            .all()
        )

    def get(
        self,
        db: Session,
        conversation_id: int,
    ):
        return (
            db.query(Conversation)
            .filter(
                Conversation.id == conversation_id
            )
            .first()
        )

    def delete(
        self,
        db: Session,
        conversation,
    ):
        db.delete(conversation)

        db.commit()