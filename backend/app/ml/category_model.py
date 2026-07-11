class CategoryModel:

    def predict(self, prompt: str):

        text = prompt.lower()

        if any(x in text for x in [
            "python",
            "java",
            "c++",
            "program",
            "code",
            "api",
            "software",
            "website"
        ]):
            return "Programming"

        if any(x in text for x in [
            "image",
            "logo",
            "poster",
            "design",
            "art"
        ]):
            return "Design"

        if any(x in text for x in [
            "essay",
            "blog",
            "article",
            "story"
        ]):
            return "Writing"

        return "General"