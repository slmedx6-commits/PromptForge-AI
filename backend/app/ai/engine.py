from app.ml.prompt_scorer import PromptScorer
from app.ml.category_model import CategoryModel
from app.ml.intent_model import IntentModel
from app.ml.complexity_model import ComplexityModel
from app.ml.suggestion_model import SuggestionModel
from app.ml.history_model import HistoryModel
from app.ml.favorite_model import FavoriteModel
from app.ml.collection_model import CollectionModel
from app.ml.comparison_model import ComparisonModel
from app.ml.analytics_model import AnalyticsModel
from app.ml.template_model import TemplateModel

from app.ai.pipeline.analyzer import analyze
from app.ai.pipeline.context_builder import build_context
from app.ai.providers.manager import get_provider
from app.ai.utils.load_prompt import load_prompt

from app.ai.intelligence import (
    clean_prompt,
    detect_intent,
    detect_category,
    extract_keywords,
    expand,
    format_prompt,
    validate,
    optimize,
)

history_model = HistoryModel()
favorite_model = FavoriteModel()
collection_model = CollectionModel()
comparison_model = ComparisonModel()
analytics_model = AnalyticsModel()
template_model = TemplateModel()


def enhance(user_prompt: str):

    prompt = clean_prompt(user_prompt)

    if not validate(prompt):
        return {
            "enhanced_prompt": "Please enter a more descriptive prompt."
        }

    detected_intent = detect_intent(prompt)
    category = detect_category(prompt)
    keywords = extract_keywords(prompt)

    analysis = analyze(prompt)
    context = build_context(analysis)

    expanded_prompt = expand(prompt)
    expanded_prompt = optimize(expanded_prompt)
    expanded_prompt = format_prompt(expanded_prompt)

    system_prompt = load_prompt("system_prompt")

    provider = get_provider()

    response = provider.generate(
        system_prompt=system_prompt,
        user_prompt=f"""
Prompt Category:
{category}

Detected Intent:
{detected_intent}

Important Keywords:
{", ".join(keywords)}

Context:
{context}

User Prompt:
{prompt}

Expanded Prompt:
{expanded_prompt}
"""
    )

    enhanced_prompt = response.text.strip()

    quality = PromptScorer().score(enhanced_prompt)

    predicted_category = CategoryModel().predict(prompt)
    predicted_intent = IntentModel().predict(prompt)
    predicted_complexity = ComplexityModel().predict(prompt)

    suggestions = SuggestionModel().predict(prompt)

    comparison = comparison_model.compare(
        prompt,
        enhanced_prompt,
    )

    analytics = analytics_model.analyze(
        prompt,
        enhanced_prompt,
    )

    templates = template_model.get_templates()

    history_model.add(prompt, enhanced_prompt)

    if quality["score"] >= 90:
        favorite_model.add(enhanced_prompt)

    collection_model.add(
        predicted_category,
        enhanced_prompt,
    )

    return {
        "enhanced_prompt": enhanced_prompt,
        "quality": quality,
        "predicted_category": predicted_category,
        "predicted_intent": predicted_intent,
        "predicted_complexity": predicted_complexity,
        "suggestions": suggestions,
        "comparison": comparison,
        "analytics": analytics,
        "history": history_model.get_all(),
        "favorites": favorite_model.get_all(),
        "collections": collection_model.get_all(),
        "templates": templates,
    }