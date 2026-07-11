import joblib
from pathlib import Path


BASE_DIR = Path(__file__).parent / "trained"

vectorizer = joblib.load(
    BASE_DIR / "tfidf_vectorizer.pkl"
)

intent_model = joblib.load(
    BASE_DIR / "intent_model.pkl"
)

category_model = joblib.load(
    BASE_DIR / "category_model.pkl"
)

complexity_model = joblib.load(
    BASE_DIR / "complexity_model.pkl"
)