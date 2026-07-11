def extract_requirements(prompt: str):
    requirements = []

    words = prompt.lower()

    if "step by step" in words:
        requirements.append("Step-by-step explanation")

    if "example" in words:
        requirements.append("Include examples")

    if "table" in words:
        requirements.append("Table format")

    if "code" in words:
        requirements.append("Source code")

    if "json" in words:
        requirements.append("JSON output")

    return requirements