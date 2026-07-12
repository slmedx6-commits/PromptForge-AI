from google import genai

from app.core.config import settings
from app.ai.providers.base import AIProvider
from app.ai.providers.response import AIResponse


class GeminiProvider(AIProvider):

    def generate(
        self,
        system_prompt: str,
        user_prompt: str,
    ) -> AIResponse:

        client = genai.Client(api_key=settings.GEMINI_API_KEY)

        response = client.models.generate_content(
            model=settings.GEMINI_MODEL,
            contents=f"""
System Instructions:
{system_prompt}

User Prompt:
{user_prompt}
"""
        )

        text = response.text.strip()

        text = text.replace("**Enhanced Prompt:**", "")
        text = text.replace("Enhanced Prompt:", "")
        text = text.replace("Here is the enhanced prompt:", "")
        text = text.strip()

        return AIResponse(
            text=text,
            provider="Google Gemini",
            model=settings.GEMINI_MODEL,
            tokens=0,
        )