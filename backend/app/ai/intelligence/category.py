def detect_category(prompt: str) -> str:

    p = prompt.lower()

    categories = {

        "Programming": [
            "python", "java", "javascript", "react", "django",
            "fastapi", "sql", "code", "api", "bug", "algorithm",
            "html", "css", "nextjs", "node"
        ],

        "Writing": [
            "essay", "article", "blog", "story", "novel",
            "email", "letter", "caption", "script"
        ],

        "Research": [
            "research", "analysis", "compare", "study",
            "advantages", "disadvantages", "review"
        ],

        "Business": [
            "startup", "business", "marketing", "sales",
            "finance", "investment", "strategy"
        ],

        "Education": [
            "learn", "teach", "explain", "tutorial",
            "course", "question", "exam"
        ],

        "Image Generation": [
            "image", "logo", "poster", "banner", "3d",
            "illustration", "photorealistic", "midjourney"
        ],

        "Resume": [
            "resume", "cv", "linkedin", "cover letter"
        ],

        "Translation": [
            "translate", "translation"
        ]
    }

    for category, words in categories.items():

        if any(word in p for word in words):

            return category

    return "General"