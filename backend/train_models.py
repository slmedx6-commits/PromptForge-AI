import os
import joblib
import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression


# Dataset
df = pd.read_csv("dataset/prompts.csv")

# TF-IDF
vectorizer = TfidfVectorizer(
    max_features=5000,
    stop_words="english",
)

X = vectorizer.fit_transform(df["prompt"])

# Intent Model
intent_model = LogisticRegression(max_iter=1000)
intent_model.fit(X, df["intent"])

# Category Model
category_model = LogisticRegression(max_iter=1000)
category_model.fit(X, df["category"])

# Complexity Model
complexity_model = LogisticRegression(max_iter=1000)
complexity_model.fit(X, df["complexity"])


# Save Models
SAVE_DIR = "app/ml/trained"

os.makedirs(SAVE_DIR, exist_ok=True)

joblib.dump(
    vectorizer,
    os.path.join(
        SAVE_DIR,
        "tfidf_vectorizer.pkl",
    ),
)

joblib.dump(
    intent_model,
    os.path.join(
        SAVE_DIR,
        "intent_model.pkl",
    ),
)

joblib.dump(
    category_model,
    os.path.join(
        SAVE_DIR,
        "category_model.pkl",
    ),
)

joblib.dump(
    complexity_model,
    os.path.join(
        SAVE_DIR,
        "complexity_model.pkl",
    ),
)

print("Training Complete")