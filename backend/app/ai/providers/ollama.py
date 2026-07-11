import ollama

from app.core.config import settings
from app.ai.providers.base import AIProvider
from app.ai.providers.response import AIResponse


class OllamaProvider(AIProvider):

    def generate(
        self,
        system_prompt: str,
        user_prompt: str,
    ) -> AIResponse:

        response = ollama.chat(
            model=settings.OLLAMA_MODEL,
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": user_prompt,
                },
            ],
            stream=False,
            options={
                "temperature": 0.1,
                "top_p": 0.8,
                "top_k": 20,
                "repeat_penalty": 1.05,
                "num_predict": 350,
                "num_ctx": 2048,
                "num_thread": 0,
            },
        )

        return AIResponse(
            text=response["message"]["content"].strip(),
            provider="Ollama",
            model=settings.OLLAMA_MODEL,
            tokens=0,
        )