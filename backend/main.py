import json
import os

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from .data_videos import datos
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .conexionDB import engine, SessionLocal, Base
from .Models import documento_noticia, documento, imagen_noticia, imagen, noticia

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
    return datos

@app.get("/consultaVideos")
def consultaVideos():
    try:
        with open(JSON_PATH, "r") as f:
            datos=json.load(f)
        return datos
    except FileNotFoundError:
        return {"Error":"El video no existe"} 


@app.get("/consultaNoticias")
def consultaNoticias():
    db=SessionLocal()
    retultado=db.query(noticia.Noticia).all()
    return JSONResponse(status_code=200, content=jsonable_encoder(retultado))