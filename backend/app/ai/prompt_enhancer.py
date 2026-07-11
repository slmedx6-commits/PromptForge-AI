def analyze_prompt(prompt: str):
    score = 100
    suggestions = []

    if len(prompt) < 30:
        score -= 20
        suggestions.append("Provide more details.")

    if "role" not in prompt.lower():
        score -= 15
        suggestions.append("Specify the AI role.")

    if "format" not in prompt.lower():
        score -= 15
        suggestions.append("Specify the expected output format.")

    if "example" not in prompt.lower():
        score -= 10
        suggestions.append("Provide an example.")

    enhanced_prompt = f"""
Role:
You are an expert assistant.

Task:
{prompt}

Requirements:
- Think step by step.
- Be accurate.
- Explain clearly.
- Format the answer properly.
"""

    return {
        "score": max(score, 0),
        "suggestions": suggestions,
        "enhanced_prompt": enhanced_prompt.strip(),
    }