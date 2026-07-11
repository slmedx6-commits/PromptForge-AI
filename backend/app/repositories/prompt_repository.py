from sqlalchemy.orm import Session

from app.models.prompt import Prompt
from app.schemas.prompt import PromptCreate


def create_prompt(db: Session, prompt: PromptCreate, owner_id: int):
    db_prompt = Prompt(
        title=prompt.title,
        original_prompt=prompt.original_prompt,
        owner_id=owner_id,
    )

    db.add(db_prompt)
    db.commit()
    db.refresh(db_prompt)

    return db_prompt


def get_prompts(db: Session, owner_id: int):
    return db.query(Prompt).filter(Prompt.owner_id == owner_id).all()