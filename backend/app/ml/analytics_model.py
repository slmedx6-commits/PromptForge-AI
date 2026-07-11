import re
from collections import Counter


class AnalyticsModel:

    def analyze(self, original_prompt: str, enhanced_prompt: str = None):

        if enhanced_prompt is None:
            enhanced_prompt = original_prompt

        prompt = enhanced_prompt

        words = re.findall(r"\b\w+\b", prompt.lower())

        word_count = len(words)
        character_count = len(prompt)

        sentence_count = max(
            1,
            len(re.findall(r"[.!?]", prompt))
        )

        average_word_length = (
            round(sum(len(w) for w in words) / word_count, 2)
            if word_count else 0
        )

        reading_time = max(1, round(word_count / 200))

        unique_words = len(set(words))

        lexical_diversity = (
            round(unique_words / word_count, 2)
            if word_count else 0
        )

        frequency = Counter(words)

        return {
            "original_length": len(original_prompt),
            "enhanced_length": len(enhanced_prompt),
            "improvement": len(enhanced_prompt) - len(original_prompt),
            "word_count": word_count,
            "character_count": character_count,
            "sentence_count": sentence_count,
            "average_word_length": average_word_length,
            "reading_time": f"{reading_time} min",
            "lexical_diversity": lexical_diversity,
            "top_keywords": [
                word for word, _ in frequency.most_common(5)
            ]
        }