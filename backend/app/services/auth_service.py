from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.core.security import create_access_token, verify_user_password
from app.repositories.user_repository import authenticate_user


def login_user(db: Session, email: str, password: str):
    user = authenticate_user(db, email)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    if not verify_user_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    token = create_access_token({"sub": user.email})

    return {
        "access_token": token,
        "token_type": "bearer",
    }