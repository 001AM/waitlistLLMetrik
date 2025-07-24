from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import threading
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

DB_NAME = "waitlist.db"
db_lock = threading.Lock()

SMTP_SERVER = os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
EMAIL_SENDER = os.getenv("EMAIL_SENDER")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

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

def init_db():
    with sqlite3.connect(DB_NAME, check_same_thread=False) as conn:
        conn.execute("CREATE TABLE IF NOT EXISTS waitlist(email TEXT)")

@app.on_event("startup")
def startup_event():
    init_db()

def send_email(recipient: str):
    subject = "You’re on the LLMetrik Waitlist – Welcome Aboard! 🚀"

    body = f"""
        Hi there,

        Thank you for signing up for the LLMetrik Analytics Tool waitlist!  
        We’re excited to have you join a growing community of developers, researchers, and AI enthusiasts who want to gain deep insights into LLM performance and usage.

        What’s next?  
        - You’ll be among the first to get early access as we roll out our private beta.  
        - Expect exclusive updates, feature previews, and resources to help you get the most out of your LLM workflows.

        Stay tuned for exciting updates coming soon.  
        We’re thrilled to have you on this journey with us!

        Cheers,  
        Team LLMetrik  
    """
    msg = MIMEMultipart()
    msg["From"] = EMAIL_SENDER
    msg["To"] = recipient
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_SENDER, EMAIL_PASSWORD)
            server.send_message(msg)
    except Exception as e:
        print(f"Failed to send email: {e}")

@app.post("/signup")
def signup(data: Signup):
    try:
        with db_lock:
            with sqlite3.connect(DB_NAME, check_same_thread=False) as conn:
                conn.execute("INSERT INTO waitlist(email) VALUES (?)", (data.email,))
        threading.Thread(target=send_email, args=(data.email,)).start()
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
