from app.ai.engine import enhance

from app.ml.prompt_scorer import PromptScorer
from app.ml.intent_model import IntentModel
from app.ml.category_model import CategoryModel
from app.ml.complexity_model import ComplexityModel
from app.ml.analytics_model import AnalyticsModel
from app.ml.suggestion_model import SuggestionModel
from app.ml.explanation_model import ExplanationModel


prompt_scorer = PromptScorer()
intent_model = IntentModel()
category_model = CategoryModel()
complexity_model = ComplexityModel()
analytics_model = AnalyticsModel()
suggestion_model = SuggestionModel()
explanation_model = ExplanationModel()


def enhance_prompt(prompt: str):

    result = enhance(prompt)

    if isinstance(result, dict):
        enhanced_prompt = result.get("enhanced_prompt", "")
    else:
        enhanced_prompt = str(result)

    predicted_intent = intent_model.predict(enhanced_prompt)
    predicted_category = category_model.predict(enhanced_prompt)
    predicted_complexity = complexity_model.predict(enhanced_prompt)

    return {
        "enhanced_prompt": enhanced_prompt,

        "quality": prompt_scorer.score(
            enhanced_prompt
        ),

        "predicted_intent": predicted_intent,

        "predicted_category": predicted_category,

        "predicted_complexity": predicted_complexity,

        "statistics": analytics_model.analyze(
            prompt,
            enhanced_prompt
        ),

        "suggestions": suggestion_model.predict(
            enhanced_prompt
        ),

        "explanation": explanation_model.explain(
            enhanced_prompt,
            predicted_intent,
            predicted_category,
            predicted_complexity,
        ),
    }