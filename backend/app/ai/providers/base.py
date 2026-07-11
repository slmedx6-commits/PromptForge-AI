from abc import ABC, abstractmethod

from app.ai.providers.response import AIResponse


class AIProvider(ABC):

    @abstractmethod
    def generate(
        self,
        system_prompt: str,
        user_prompt: str,
    ) -> AIResponse:
        pass