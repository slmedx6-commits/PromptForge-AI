def detect_intent(prompt: str) -> str:

    p = prompt.lower()

    if any(word in p for word in [
        "write",
        "create",
        "build",
        "develop",
        "code"
    ]):
        return "creation"

    if any(word in p for word in [
        "explain",
        "teach",
        "learn"
    ]):
        return "education"

    if any(word in p for word in [
        "design",
        "logo",
        "image",
        "poster"
    ]):
        return "image"

    return "general"