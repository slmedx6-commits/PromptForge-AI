def validate(prompt: str):

    if prompt is None:
        return False

    prompt = prompt.strip()

    if len(prompt) < 5:
        return False

    return True