from sqlalchemy.orm import Session


def get_dashboard(db: Session | None = None):
    return {
        "total_conversations": 0,
        "total_prompts": 0,
        "average_score": 0,
        "top_intent": None,
        "top_category": None,
        "recent_conversations": [],
    }