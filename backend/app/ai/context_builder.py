def build_context(prompt: str, intent: str):
    return {
        "intent": intent,
        "original_prompt": prompt,
    }