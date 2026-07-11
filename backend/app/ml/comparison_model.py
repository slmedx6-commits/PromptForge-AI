class ComparisonModel:

    def compare(self, original: str, enhanced: str):

        original_words = len(original.split())
        enhanced_words = len(enhanced.split())

        improvement = enhanced_words - original_words

        if improvement < 0:
            improvement = 0

        return {
            "original_words": original_words,
            "enhanced_words": enhanced_words,
            "improvement": improvement,
            "improvement_percent": round(
                enhanced_words / max(original_words, 1) * 100,
                1,
            ),
        }