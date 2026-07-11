export function analyzePrompt(prompt: string) {

    const words = prompt.trim()
        ? prompt.trim().split(/\s+/)
        : [];

    const wordCount = words.length;

    const characterCount = prompt.length;

    const sentenceCount =
        prompt.split(/[.!?]+/).filter(Boolean).length;

    const averageWordLength =
        wordCount === 0
            ? 0
            : (
                words.reduce(
                    (sum, word) => sum + word.length,
                    0
                ) / wordCount
            ).toFixed(1);

    const readingTime = Math.max(
        1,
        Math.ceil(wordCount / 200)
    );

    let quality = "Excellent";

    if (wordCount < 10)
        quality = "Poor";
    else if (wordCount < 25)
        quality = "Average";
    else if (wordCount < 60)
        quality = "Good";

    return {

        words: wordCount,

        characters: characterCount,

        sentences: sentenceCount,

        averageWordLength,

        readingTime,

        quality,

    };

}