# 🚀 PromptForge AI

<p align="center">

![Version](https://img.shields.io/badge/Version-v1.0.0-blue?style=for-the-badge)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi)
![Next.js](https://img.shields.io/badge/Next.js-Frontend-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Python](https://img.shields.io/badge/Python-3.13-yellow?style=for-the-badge&logo=python)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</p>

<p align="center">

### AI-Powered Prompt Engineering Platform

Transform simple prompts into high-quality, structured prompts using Artificial Intelligence, Machine Learning, and Data Science.

</p>

---

# 🌟 Overview

PromptForge AI is an intelligent prompt engineering platform that helps users convert basic prompts into optimized prompts for Large Language Models (LLMs).

The application combines:

- Artificial Intelligence
- Prompt Engineering
- Machine Learning
- Data Science
- Modern Full-Stack Development

to deliver professional-quality prompts with detailed analysis and an intuitive user experience.

---

# ✨ Features

## 🤖 AI Prompt Enhancement

- Convert simple prompts into professional prompts
- AI-assisted prompt optimization
- Structured prompt generation
- Editable enhanced prompts
- One-click regeneration

---

## 📊 Prompt Analysis

- Prompt Quality Score
- Intent Detection
- Prompt Category Prediction
- Complexity Analysis
- Suggestions for Improvement

---

## 📈 Data Science Analytics

- Word Count
- Character Count
- Estimated Reading Time
- Prompt Statistics
- Prompt History Tracking

---

## 💬 Chat Workspace

- AI Chat Interface
- Real-time Prompt Generation
- Conversation Management
- Prompt History
- Responsive Design

---

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes

---

## 📁 Prompt History

- Save Enhanced Prompts
- View Previous Sessions
- Date & Time Tracking
- Prompt Analysis History

---

# 🛠 Technology Stack

## Frontend

- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Axios

---

## Backend

- FastAPI
- Python 3.13
- SQLAlchemy
- Pydantic
- JWT Authentication

---

## Database

- SQLite
- SQLAlchemy ORM

---

## Machine Learning

- Prompt Classification
- Prompt Complexity Detection
- Prompt Intent Prediction
- Prompt Category Prediction

---

## Data Science

- Prompt Statistics
- Prompt Analytics
- Reading Time Estimation
- Quality Metrics

---

# 📂 Project Structure

```text
PromptForge-AI
│
├── backend
│   ├── app
│   ├── dataset
│   ├── alembic
│   ├── train_models.py
│   └── main.py
│
├── frontend
│   ├── app
│   ├── components
│   ├── services
│   ├── store
│   ├── public
│   └── lib
│
└── README.md
```

---

# 🚀 Highlights

✅ AI Prompt Enhancement

✅ Machine Learning Analysis

✅ Data Science Dashboard

✅ Prompt History

✅ JWT Authentication

✅ Responsive UI

✅ FastAPI REST API

✅ Next.js Frontend

✅ TypeScript

✅ Modern UI/UX

---

# 📌 Repository

GitHub Repository

https://github.com/slmedx6-commits/PromptForge-AI

---

# ⚙️ Installation Guide

## Clone the Repository

```bash
git clone https://github.com/slmedx6-commits/PromptForge-AI.git
```

```bash
cd PromptForge-AI
```

---

# 🖥 Backend Setup

Navigate to the backend directory.

```bash
cd backend
```

## Create Virtual Environment

Windows

```bash
python -m venv venv
```

Activate

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Configure Environment Variables

Create a file named

```
.env
```

Example

```env
DATABASE_URL=sqlite:///./promptforge.db

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=30

OPENAI_API_KEY=your_api_key
```

---

## Start Backend Server

```bash
uvicorn main:app --reload
```

Backend will run at

```
http://127.0.0.1:8000
```

Swagger API Documentation

```
http://127.0.0.1:8000/docs
```

---

# 🌐 Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install packages

```bash
npm install
```

---

## Configure Environment

Create

```
.env.local
```

Example

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

---

## Start Frontend

```bash
npm run dev
```

Application

```
http://localhost:3000
```

---

# 📡 API Overview

PromptForge AI provides REST APIs built with FastAPI.

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /register | Register User |
| POST | /login | Login User |

---

### Prompt APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /prompt/enhance | Enhance Prompt |
| GET | /prompt/history | Prompt History |
| POST | /prompt/save | Save Prompt |

---

### Conversation APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /conversation | Create Conversation |
| GET | /conversation | Get Conversations |

---

### Message APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /message | Save Message |
| GET | /message | Retrieve Messages |

---

# 🔒 Authentication Flow

```
User

↓

Register

↓

Login

↓

JWT Token Generated

↓

Protected API Access

↓

Prompt Enhancement

↓

History Stored
```

---

# 📂 Backend Architecture

```
FastAPI

│

├── API Routers

├── Services

├── Models

├── Database

├── AI Engine

├── ML Models

├── Utilities

└── Authentication
```

---

# 🖥 Frontend Architecture

```
Next.js

│

├── Landing Page

├── Authentication

├── Dashboard

├── Prompt Forge

├── History

├── Components

├── Services

├── Store

└── Layout
```

---

# 📁 Important Directories

```
backend/app/api
```

REST APIs

```
backend/app/models
```

Database Models

```
backend/app/services
```

Business Logic

```
backend/app/ml
```

Machine Learning Models

```
backend/app/ai
```

Prompt Engineering Engine

```
frontend/app
```

Application Pages

```
frontend/components
```

Reusable UI Components

```
frontend/services
```

API Integration

```
frontend/store
```

Global State Management

---

# 🚀 Running the Complete Project

Start Backend

```bash
uvicorn main:app --reload
```

Start Frontend

```bash
npm run dev
```

Open

```
http://localhost:3000
```

Enjoy PromptForge AI 🎉