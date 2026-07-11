def detect_intent(prompt: str):
    prompt = prompt.lower()

    if any(word in prompt for word in ["python", "code", "program", "api", "bug"]):
        return "programming"

    if any(word in prompt for word in ["essay", "article", "blog", "write"]):
        return "writing"

    if any(word in prompt for word in ["business", "startup", "marketing"]):
        return "business"

    if any(word in prompt for word in ["research", "study", "paper"]):
        return "research"

    return "general"