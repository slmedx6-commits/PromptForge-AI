class IntentModel:

    def predict(self, prompt: str):

        text = prompt.lower()

        if "create" in text:
            return "Creation"

        if "generate" in text:
            return "Generation"

        if "explain" in text:
            return "Explanation"

        if "improve" in text:
            return "Improvement"

        return "General"