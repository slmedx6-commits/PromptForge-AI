from app.core.config import settings


def get_provider():

    provider = getattr(settings, "AI_PROVIDER", "local")

    if provider == "ollama":
        from app.ai.providers.ollama import OllamaProvider
        return OllamaProvider()

    if provider == "openai":
        from app.ai.providers.openai import OpenAIProvider
        return OpenAIProvider()

    if provider == "gemini":
        from app.ai.providers.gemini import GeminiProvider
        return GeminiProvider()

    raise ValueError(
        f"Unsupported AI provider: {provider}"
    )