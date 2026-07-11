class HistoryModel:

    def __init__(self):
        self.history = []

    def add(self, prompt: str, enhanced_prompt: str):

        self.history.append(
            {
                "prompt": prompt,
                "enhanced_prompt": enhanced_prompt,
            }
        )

    def get_all(self):
        return self.history[-20:]