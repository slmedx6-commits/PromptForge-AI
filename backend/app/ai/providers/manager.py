from app.core.config import settings


def get_provider():

    provider = getattr(settings, "AI_PROVIDER", "gemini")

    if provider == "gemini":
        from app.ai.providers.gemini import GeminiProvider
        return GeminiProvider()

    raise ValueError(
        f"Unsupported AI provider: {provider}"
    )