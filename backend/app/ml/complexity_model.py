class ComplexityModel:

    def predict(self, prompt: str):

        words = len(prompt.split())

        if words < 10:
            return "Easy"

        if words < 30:
            return "Medium"

        return "Advanced"