import re


def classify(prompt: str) -> str:

    prompt = prompt.lower()

    rules = {

        "software": [
            "website",
            "web",
            "app",
            "software",
            "python",
            "django",
            "fastapi",
            "react",
            "next",
            "api",
            "database",
            "code",
        ],

        "research": [
            "research",
            "paper",
            "journal",
            "study",
            "analysis",
        ],

        "marketing": [
            "marketing",
            "brand",
            "seo",
            "campaign",
            "advertisement",
        ],

        "business": [
            "business",
            "startup",
            "company",
            "erp",
        ],

        "image": [
            "logo",
            "image",
            "poster",
            "design",
            "banner",
        ],

        "education": [
            "course",
            "learn",
            "teacher",
            "education",
            "student",
        ],
    }

    for category, keywords in rules.items():

        for keyword in keywords:

            if re.search(rf"\b{keyword}\b", prompt):

                return category

    return "general"