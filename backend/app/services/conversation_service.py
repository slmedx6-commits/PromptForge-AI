from app.repositories.conversation_repository import (
    ConversationRepository,
)

repository = ConversationRepository()


def create_conversation(
    db,
    user_id,
    title,
):
    return repository.create(
        db,
        user_id,
        title,
    )


def get_conversations(
    db,
    user_id,
):
    return repository.get_all(
        db,
        user_id,
    )


def get_conversation(
    db,
    conversation_id,
):
    return repository.get(
        db,
        conversation_id,
    )


def delete_conversation(
    db,
    conversation,
):
    repository.delete(
        db,
        conversation,
    )