# FastAPI – Overview (Notes)

- **FastAPI = Python web framework** focused on simplicity, scalability, and extensibility.
- **“Fast” has two meanings:**
  - **Performance:** One of the fastest Python web frameworks; extremely high throughput.
  - **Development speed:** Build a REST API with only a few lines of code.

## Key Features
- **Built-in data validation & serialization** (Pydantic).
- **Automatic interactive documentation** (OpenAPI / JSON Schema).
- **Reduces bugs** – ~40% fewer human errors due to validation.
- **Lightweight installation**, fast to get running.
- **Active community** → excellent documentation.
- **Production-ready quickly** – automatic docs, clean structure.

## Why use FastAPI?
- Avoids “reinventing the wheel” for REST API patterns.
- Handles backend communication with **embedded security**.
- Designed with developer experience in mind → easy to learn and use.
- Uses **OpenAPI standards** and **JSON Schema**.

## Architecture Role
- Web page (frontend) communicates with server via **RESTful APIs**.
- FastAPI app = server layer, handling:
  - Business logic.
  - Receiving/sending data.
  - Ensuring correct & secure responses.
- Can also be used for **full-stack apps** (rendering frontend + backend logic).

## Adoption
- Used by companies like **Netflix**, **Uber**, **Microsoft**.

## Why not write everything yourself?
- Web frameworks provide:
  - Years of optimized, secure development.
  - Faster and safer application building.
  - No need to build routing, validation, docs, etc. manually.

# Python Virtual Environments – Notes

## What is a Virtual Environment?
- An **isolated Python environment** separated from other Python environments.
- Allows each project to have **its own dependencies and versions**.
- Prevents conflicts between:
  - FastAPI apps (may require different package versions),
  - AI projects,
  - IoT projects,
  - Any unrelated applications.

## Why Use Virtual Environments?
- Keeps dependencies **siloed** per project.
- Avoids global installs.
- Ensures reproducible environments.
- Allows multiple projects with **different dependency versions** to coexist.

## Dependency Management
- Done via **pip** (Python package manager).
- Pip installs and updates packages.
- Recommended: keep pip relatively up-to-date.
- Check version:
  - macOS/Linux: `python3 -m pip --version`
  - Windows: `python -m pip --version`

## Creating a Virtual Environment
1. Create project folder (e.g., `fastapi/`).
2. Python includes built-in module **`venv`** for virtual environments.
3. Create environment:
   - macOS/Linux: `python3 -m venv fastapi-env`
   - Windows: `python -m venv fastapi-env`
4. Activate environment:
   - macOS/Linux: `source fastapi-env/bin/activate`
   - Windows: `fastapi-env\Scripts\activate`
5. Install project-specific packages (e.g., FastAPI, Uvicorn):
   - pip install fastapi uvicorn

## Purpose
- Ensures each FastAPI, AI, IoT, or other project has **only the dependencies it needs**.
- No unnecessary installs for all projects.
- Enables quick, clean setup for production-ready apps.

# Books Project – Overview (Notes)

## Goal
- Build a **Books** project in **FastAPI** to learn:
  - Basic **HTTP request methods**
  - How to create and use **FastAPI endpoints**
  - CRUD operations on in-memory data

## Data Model – Book
- Each book = **key–value pairs**:
  - `title`: e.g. `"Title 1"` … `"Title 5"`
  - `author`: e.g. `"Author 1"` … `"Author 5"`
  - `category`: e.g. `"Science"`, `"History"`, `"Math"`

## CRUD Operations
- **CRUD = Create, Read, Update, Delete**
  - Create: add new books to list
  - Read: get / list books (e.g. book 2 and 4)
  - Update: modify/enhance existing book
  - Delete: remove book from list

## Requests & Responses
- **Web page (client)** ↔ **FastAPI app (server)**:
  - Client sends **request** (e.g. “give me book 2 and 4”)
  - FastAPI sends **response** with requested data

## HTTP Methods ↔ CRUD
- `POST`  → **Create**
- `GET`   → **Read**
- `PUT`   → **Update**
- `DELETE` → **Delete**

## Swagger UI / Docs
- FastAPI auto-generates **interactive API docs**:
  - URL: `http://<server>/docs`
  - Shows all available endpoints and request methods
  - Provided by **Swagger UI**

## First Step in Code
- Implement first **GET endpoint** in FastAPI:
  - Allow client to **read/return book data**.

# GET HTTP Request Method – Notes

## Creating the FastAPI App
- Create file **`books.py`**.
- Import FastAPI and initialize the app:

```python
from fastapi import FastAPI

app = FastAPI()
```

## Creating the First GET Endpoint
- Define a Python function for the endpoint.
- Use `async` (optional, FastAPI can handle sync functions too).
- Add decorator `@app.get("<path>")` to expose it as an HTTP GET endpoint.

```python
@app.get("/api-endpoint")
async def first_api():
    return {"message": "Hello Eric"}
```

### Key concepts:
- `async` = asynchronous function (optional in FastAPI).
- Decorator maps function → URL path.
- Access via: `http://127.0.0.1:8000/api-endpoint`.

## Running the Application
Use **Uvicorn** (installed with FastAPI):

```bash
uvicorn books:app --reload
```

- `books` → name of Python file (`books.py`)
- `app` → FastAPI instance inside the file
- `--reload` → auto-reload server on code changes
- App runs at: `http://127.0.0.1:8000`

## Returning a List of Books
- Create a list of 5 books (title, author, category).
- Modify endpoint to return all books instead of the test message.

```python
books = [
    {"title": "Title 1", "author": "Author 1", "category": "Science"},
    {"title": "Title 2", "author": "Author 2", "category": "Math"},
    # ...
]

@app.get("/books")
async def read_all_books():
    return books
```

## Improved Endpoint
- `/api-endpoint` is unclear → replace with something meaningful like `/books`.
- Visiting:  
  **http://127.0.0.1:8000/books**  
  will return all book objects.

