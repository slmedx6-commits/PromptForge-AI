def validate(prompt: str) -> str:

    if len(prompt) < 300:
        prompt += """

Additional Requirement

Provide sufficient detail so that
the generated response is complete
and does not skip important steps.
"""

    return prompt