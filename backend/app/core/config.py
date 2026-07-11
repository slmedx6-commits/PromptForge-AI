class Settings:
    APP_NAME = "PromptForge AI API"
    APP_VERSION = "1.0.0"

    AI_PROVIDER: str = "ollama"

    OLLAMA_BASE_URL: str = "http://localhost:11434"

    OLLAMA_MODEL: str = "qwen2.5:3b"

    API_V1_PREFIX = "/api/v1"

    DATABASE_URL = "sqlite:///./promptforge.db"

    SECRET_KEY = "change_this_secret_key"

    DEBUG = True


settings = Settings()