import re


class PromptScorer:

    def score(self, prompt: str):

        score = 0

        words = prompt.split()

        score += min(len(words), 50)

        if len(prompt) > 200:
            score += 15

        if ":" in prompt:
            score += 10

        if "\n" in prompt:
            score += 10

        if re.search(r"\b(example|examples)\b", prompt.lower()):
            score += 5

        if re.search(r"\b(step|steps)\b", prompt.lower()):
            score += 5

        if re.search(r"\b(format|output)\b", prompt.lower()):
            score += 5

        score = min(score, 100)

        return {
            "score": score,
            "grade": (
                "Excellent"
                if score >= 90 else
                "Good"
                if score >= 70 else
                "Average"
                if score >= 50 else
                "Poor"
            )
        }