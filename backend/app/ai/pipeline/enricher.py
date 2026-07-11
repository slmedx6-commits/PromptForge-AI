from app.ai.pipeline.analyzer import PromptAnalysis


def enrich(data: PromptAnalysis):

    return {

        "role":
        "You are an expert AI assistant with deep domain knowledge.",

        "goal":
        data.original_prompt,

        "reasoning":
        "Think carefully before generating the final answer.",

        "quality":
        [
            "Accurate",
            "Detailed",
            "Professional",
            "Well Structured",
        ]

    }