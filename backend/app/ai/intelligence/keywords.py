import re

STOPWORDS = {
    "the","is","are","a","an","to","of","for","and","with",
    "in","on","at","by","from","into","that","this","it"
}


def extract_keywords(prompt: str):

    words = re.findall(r"[A-Za-z][A-Za-z0-9_+-]*", prompt)

    keywords = []

    seen = set()

    for word in words:

        w = word.lower()

        if w in STOPWORDS:
            continue

        if len(w) < 3:
            continue

        if w not in seen:

            seen.add(w)

            keywords.append(word)

    return keywords