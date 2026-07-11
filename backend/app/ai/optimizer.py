def optimize_prompt(prompt: str):
    return f"""
You are an expert in the requested domain.

Task:
{prompt}

Requirements:
- Understand the real intention.
- Fill reasonable gaps.
- Produce the highest quality answer.
- Use professional formatting.
- Be accurate and complete.
""".strip()