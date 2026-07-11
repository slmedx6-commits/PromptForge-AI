def expand(prompt: str) -> str:

    return f"""
Transform the following user prompt into a professional AI prompt.

User Prompt:
{prompt}

Instructions:

1. Read every sentence carefully.

2. Understand the user's real intention.

3. Identify the task the user wants.

4. Understand hidden meaning if any.

5. Extract important keywords.

6. Expand the prompt professionally.

7. Remove ambiguity.

8. Preserve the original meaning.

9. Add missing context only when necessary.

10. Do NOT change the user's objective.

Generate the enhanced prompt using this format.

# Objective

...

# Context

...

# Requirements

...

# Constraints

...

# Expected Output

...

# Enhanced Prompt

...
"""