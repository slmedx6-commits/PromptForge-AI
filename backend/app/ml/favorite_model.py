class FavoriteModel:

    def __init__(self):
        self.favorites = []

    def add(self, prompt: str):

        if prompt not in self.favorites:
            self.favorites.append(prompt)

    def get_all(self):

        return self.favorites