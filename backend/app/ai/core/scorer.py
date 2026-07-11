from dataclasses import dataclass


@dataclass
class PromptScore:
    clarity: int
    specificity: int
    context: int
    reasoning: int
    structure: int
    constraints: int
    completeness: int
    total: int


class PromptScorer:

    def score(self, prompt: str) -> PromptScore:

        words = len(prompt.split())

        clarity = min(100, 60 + words // 4)

        specificity = min(100, 55 + words // 5)

        context = min(100, 50 + words // 6)

        reasoning = min(100, 55 + words // 5)

        structure = 95 if "#" in prompt else 75

        constraints = (
            90
            if "CONSTRAINT" in prompt.upper()
            else 70
        )

        completeness = min(100, 55 + words // 4)

        total = round(
            (
                clarity
                + specificity
                + context
                + reasoning
                + structure
                + constraints
                + completeness
            )
            / 7
        )

        return PromptScore(
            clarity=clarity,
            specificity=specificity,
            context=context,
            reasoning=reasoning,
            structure=structure,
            constraints=constraints,
            completeness=completeness,
            total=total,
        )