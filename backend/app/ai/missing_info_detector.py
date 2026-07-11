def detect_missing_info(prompt: str):
    missing = []

    if len(prompt.split()) < 8:
        missing.append("More details needed")

    if "for" not in prompt.lower():
        missing.append("Target audience or purpose missing")

    if "using" not in prompt.lower():
        missing.append("Tools/technology not specified")

    return missing