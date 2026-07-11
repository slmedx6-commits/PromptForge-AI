ROLE_MAP = {
    "development": "You are a senior software engineer and system architect.",
    "writing": "You are a professional writer and editor.",
    "design": "You are an award-winning UI/UX and graphic designer.",
    "education": "You are an experienced instructor and mentor.",
    "general": "You are an expert AI assistant.",
}


def generate_role(intent: str) -> str:
    return ROLE_MAP.get(intent, ROLE_MAP["general"])