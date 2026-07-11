from app.ai.prompt_patterns import PROMPT_PATTERNS


def build_prompt(context: dict):
    intent = context["intent"]
    user_prompt = context["original_prompt"]

    pattern = PROMPT_PATTERNS.get(
        intent,
        PROMPT_PATTERNS["general"]
    )

    return f"""
Role:
{pattern["role"]}

User Request:
{user_prompt}

Instructions:
- Understand the user's actual goal.
- Fill reasonable missing details.
- Keep assumptions minimal.
- Produce an accurate result.
- Organize the response professionally.

Expected Output:
{pattern["output"]}
""".strip()