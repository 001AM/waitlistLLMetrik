from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import threading

DB_NAME = "waitlist.db"
db_lock = threading.Lock()  # prevent concurrent writes

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Signup(BaseModel):
    email: str
    suggestion: str | None = None

# Create table only once
def init_db():
    with sqlite3.connect(DB_NAME, check_same_thread=False) as conn:
        conn.execute("CREATE TABLE IF NOT EXISTS waitlist(email TEXT, suggestion TEXT)")

@app.on_event("startup")
def startup_event():
    init_db()

@app.post("/signup")
def signup(data: Signup):
    try:
        with db_lock:
            with sqlite3.connect(DB_NAME, check_same_thread=False) as conn:
                conn.execute("INSERT INTO waitlist(email, suggestion) VALUES (?, ?)", (data.email, data.suggestion))
        return {"message": "Thanks for signing up!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/signup/count")
def get_signup_count():
    try:
        with sqlite3.connect(DB_NAME, check_same_thread=False) as conn:
            cur = conn.execute("SELECT COUNT(*) FROM waitlist")
            count = cur.fetchone()[0]
        return {"count": count}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
