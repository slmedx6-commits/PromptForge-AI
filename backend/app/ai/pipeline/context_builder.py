from app.ai.pipeline.analyzer import PromptAnalysis


def build_context(
    analysis: PromptAnalysis,
):

    context = []

    context.append(
        f"Category: {analysis.category}"
    )

    context.append(
        f"Intent: {analysis.intent}"
    )

    context.append(
        f"Complexity: {analysis.complexity}"
    )

    context.append(
        "Generate a highly detailed professional prompt."
    )

    return "\n".join(context)