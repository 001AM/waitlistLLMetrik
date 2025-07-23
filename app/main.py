from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow your React app
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Signup(BaseModel):
    email: str
    suggestion: str | None = None

@app.post("/signup")
def signup(data: Signup):
    conn = sqlite3.connect("waitlist.db")
    cur = conn.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS waitlist(email TEXT, suggestion TEXT)")
    cur.execute("INSERT INTO waitlist VALUES (?, ?)", (data.email, data.suggestion))
    conn.commit()
    conn.close()
    return {"message": "Thanks for signing up!"}
