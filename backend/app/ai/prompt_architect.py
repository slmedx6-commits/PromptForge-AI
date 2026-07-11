from app.ai.prompt_patterns import PROMPT_PATTERNS


def build(context, domain, requirements):
    pattern = PROMPT_PATTERNS.get(
        context["intent"],
        PROMPT_PATTERNS["general"]
    )

    req = "\n".join(f"- {r}" for r in requirements)

    return f"""
{pattern["role"]}

Domain:
{domain}

User Request:
{context["original_prompt"]}

Requirements:
{req if req else "- Determine the best requirements automatically."}

Instructions:
- Infer missing details only when necessary.
- Keep assumptions minimal.
- Produce an accurate, complete response.
- Structure the answer professionally.

Expected Output:
{pattern["output"]}
""".strip()