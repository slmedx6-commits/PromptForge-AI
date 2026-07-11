import random

styles = [
    "Focus on accuracy.",
    "Focus on creativity.",
    "Focus on detailed reasoning.",
    "Focus on professional quality.",
    "Focus on concise responses.",
]


def re_enhance(prompt: str):
    style = random.choice(styles)

    return f"""{prompt}

Additional Instruction:
{style}
"""