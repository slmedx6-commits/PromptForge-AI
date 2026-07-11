def detect_domain(prompt: str):
    prompt = prompt.lower()

    domains = {
        "python": "Programming",
        "java": "Programming",
        "react": "Programming",
        "django": "Programming",
        "fastapi": "Programming",
        "marketing": "Marketing",
        "seo": "Marketing",
        "sales": "Marketing",
        "resume": "Career",
        "interview": "Career",
        "business": "Business",
        "startup": "Business",
        "research": "Research",
        "thesis": "Research",
        "article": "Writing",
        "blog": "Writing",
        "story": "Writing",
    }

    for keyword, domain in domains.items():
        if keyword in prompt:
            return domain

    return "General"