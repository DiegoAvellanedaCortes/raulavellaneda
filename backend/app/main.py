import json
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import data_videos

app=FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins="http://localhost:3000",
    allow_credentials=None,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
JSON_PATH = os.path.join(BASE_DIR, "videos.json")

@app.get("/")
async def root():
    return { "message":"Vamos bien"}

@app.get("/dataVideos")
def videos():
    return data_videos.datos

@app.get("/consultaVideos")
def consultaVideos():
    try:
        with open(JSON_PATH, "r") as f:
            datos=json.load(f)
        return datos
    except FileNotFoundError:
        return {"Error":"El video no existe"} 
