from app.ai.intent import detect_intent
from app.ai.role import generate_role


def build_prompt(user_prompt: str) -> str:
    analysis = detect_intent(user_prompt)

    role = generate_role(
        analysis["intent"]
    )

    return f"""
ROLE
{role}

OBJECTIVE
{user_prompt}

INSTRUCTIONS

- Understand the objective completely.
- Think step by step before producing the answer.
- Fill reasonable gaps when information is missing.
- Explain assumptions clearly.
- Produce professional-quality output.
- Organize the response into logical sections.
- Use best practices for the identified domain.
- Ensure the final answer is accurate and actionable.

OUTPUT FORMAT

1. Complete Solution

2. Explanation

3. Best Practices

4. Possible Improvements

QUALITY CHECKLIST

- Accurate
- Well Structured
- Easy to Understand
- Production Ready

FINAL INSTRUCTION

Provide the highest-quality response possible.
""".strip()