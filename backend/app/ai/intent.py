from typing import Dict


def detect_intent(user_prompt: str) -> Dict:
    text = user_prompt.lower()

    if any(word in text for word in ["build", "develop", "create", "code", "program"]):
        return {
            "intent": "development",
            "confidence": 0.95,
        }

    if any(word in text for word in ["write", "article", "blog", "story"]):
        return {
            "intent": "writing",
            "confidence": 0.95,
        }

    if any(word in text for word in ["design", "logo", "ui", "ux"]):
        return {
            "intent": "design",
            "confidence": 0.95,
        }

    if any(word in text for word in ["teach", "learn", "explain"]):
        return {
            "intent": "education",
            "confidence": 0.95,
        }

    return {
        "intent": "general",
        "confidence": 0.50,
    }