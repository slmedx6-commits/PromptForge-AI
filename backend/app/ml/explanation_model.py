class ExplanationModel:

    def explain(
        self,
        prompt: str,
        intent: str,
        category: str,
        complexity: str,
    ):

        reasons = []

        words = len(prompt.split())

        if words > 100:
            reasons.append(
                "Long prompt detected."
            )

        if "python" in prompt.lower():
            reasons.append(
                "Python-related keywords found."
            )

        if "step" in prompt.lower():
            reasons.append(
                "Step-by-step instruction detected."
            )

        if complexity == "Hard":
            reasons.append(
                "High information density."
            )

        return reasons