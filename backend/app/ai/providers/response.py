from dataclasses import dataclass


@dataclass
class AIResponse:

    text: str

    model: str

    provider: str

    tokens: int = 0