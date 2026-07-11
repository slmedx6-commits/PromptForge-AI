from app.ai.pipeline.analyzer import PromptAnalysis


def build_prompt(
    analysis: PromptAnalysis,
    enrichment: dict,
) -> str:

    quality = "\n".join(
        f"- {item}" for item in enrichment["quality"]
    )

    return f"""
# ROLE

{enrichment["role"]}

# PRIMARY OBJECTIVE

{enrichment["goal"]}

# CONTEXT

Analyze the user's request carefully.
Understand the actual intention.
Infer any reasonable missing details.
Avoid making unnecessary assumptions.

# REASONING PROCESS

{enrichment["reasoning"]}

Follow these steps:

1. Understand the complete objective.
2. Break the task into logical parts.
3. Produce accurate information.
4. Organize the response professionally.
5. Explain decisions when necessary.

# OUTPUT REQUIREMENTS

Provide:

1. Complete Solution

2. Step-by-step Explanation

3. Best Practices

4. Improvements

5. Common Mistakes

# QUALITY REQUIREMENTS

{quality}

# FINAL INSTRUCTION

Generate the highest-quality answer possible.
The response should be accurate,
well-structured,
easy to understand,
and immediately usable.
""".strip()