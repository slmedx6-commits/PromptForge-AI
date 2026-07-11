class CollectionModel:

    def __init__(self):
        self.collections = {}

    def add(self, category: str, prompt: str):

        if category not in self.collections:
            self.collections[category] = []

        self.collections[category].append(prompt)

    def get_all(self):
        return self.collections