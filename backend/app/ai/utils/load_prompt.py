from pathlib import Path


def load_prompt(category: str) -> str:

    base = Path(__file__).parent.parent / "prompts"

    file = base / f"{category}.txt"

    if not file.exists():
        file = base / "general.txt"

    return file.read_text(
        encoding="utf-8"
    )