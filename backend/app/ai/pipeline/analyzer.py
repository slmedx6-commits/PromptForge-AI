from dataclasses import dataclass


@dataclass
class PromptAnalysis:
    intent: str
    category: str
    complexity: str
    word_count: int


def analyze(prompt: str):

    text = prompt.lower()

    words = len(prompt.split())

    if words < 8:
        complexity = "simple"

    elif words < 30:
        complexity = "medium"

    else:
        complexity = "advanced"

    if any(k in text for k in [
        "website",
        "app",
        "python",
        "software",
        "api",
        "database",
        "react",
        "next",
    ]):

        category = "software"

        intent = "build"

    elif any(k in text for k in [
        "research",
        "paper",
        "journal",
    ]):

        category = "research"

        intent = "research"

    elif any(k in text for k in [
        "logo",
        "image",
        "poster",
        "banner",
    ]):

        category = "image"

        intent = "design"

    elif any(k in text for k in [
        "marketing",
        "seo",
        "brand",
    ]):

        category = "marketing"

        intent = "marketing"

    else:

        category = "general"

        intent = "general"

    return PromptAnalysis(
        intent=intent,
        category=category,
        complexity=complexity,
        word_count=words,
    )