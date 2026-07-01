class Settings:
    APP_NAME = "PromptForge AI API"
    APP_VERSION = "1.0.0"
    API_V1_PREFIX = "/api/v1"

    DATABASE_URL = "sqlite:///./promptforge.db"

    SECRET_KEY = "change_this_secret_key"

    DEBUG = True


settings = Settings()