import re


def clean_prompt(prompt: str):

    prompt = prompt.replace("\r", " ")

    prompt = prompt.replace("\n", " ")

    prompt = re.sub(r"\s+", " ", prompt)

    return prompt.strip()