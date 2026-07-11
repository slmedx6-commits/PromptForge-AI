class SuggestionModel:

    def predict(self, prompt: str):

        suggestions = []

        if len(prompt.split()) < 30:
            suggestions.append("Add more details.")

        if "example" not in prompt.lower():
            suggestions.append("Provide examples.")

        if "tone" not in prompt.lower():
            suggestions.append("Specify the tone.")

        if "format" not in prompt.lower():
            suggestions.append("Specify the output format.")

        if "step" not in prompt.lower():
            suggestions.append("Request step-by-step output.")

        return suggestions