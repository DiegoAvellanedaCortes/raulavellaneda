import json
import os

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from .data_videos import datos
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .conexionDB import engine, SessionLocal, Base
from .Models.noticia import Noticia
from .Models.documento import Documento
from .Models.imagen import Imagen
from .Models.documento_noticia import DocumentoNoticia
from .Models.imagen_noticia import ImagenNoticia

app=FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
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
    resultado=db.query(Noticia.id_noticia,Noticia.titulo, Noticia.descripcion, Noticia.fecha, Imagen.nombre_imagen, Imagen.url_imagen, ImagenNoticia.tipo_img, Documento.nombre.label("Nombre_Doc"), Documento.fecha.label("Fecha_Doc"), Documento.categoria, Documento.entidad, Documento.url_doc).join(ImagenNoticia, ImagenNoticia.id_noticia==Noticia.id_noticia).join(Imagen, Imagen.id_imagen==ImagenNoticia.id_imagen).outerjoin(DocumentoNoticia, Noticia.id_noticia==DocumentoNoticia.id_noticia).outerjoin(Documento, Documento.id_documento==DocumentoNoticia.id_documento).all()

    resultado_json=[]
    for row in resultado:
        resultado_json.append({
            "id_noticia":row.id_noticia,
            "titulo":row.titulo,
            "descripcion":row.descripcion,
            "fecha":row.fecha,
            "nombre_imagen":row.nombre_imagen,
            "url_imagen":row.url_imagen,
            "tipo_img":row.tipo_img,
            "Nombre_Doc":row.Nombre_Doc,
            "Fecha_Doc":row.Fecha_Doc,
            "categoria":row.categoria,
            "entidad":row.entidad,
            "url_doc":row.url_doc
        })
    return JSONResponse(content=jsonable_encoder(resultado_json))

    


"""
select noticia.titulo, noticia.descripcion, noticia.fecha, imagen.nombre_imagen, imagen.url_imagen, imagen_noticia.tipo_img, 
documento.nombre as Nombre_Doc, documento.fecha as Fecha_Doc, documento.categoria, documento.entidad, documento.url_doc from noticia
inner join imagen_noticia on imagen_noticia.id_noticia=noticia.id_noticia
inner join imagen on imagen.id_imagen=imagen_noticia.id_imagen
left join documento_noticia on noticia.id_noticia=documento_noticia.id_noticia
left join documento on documento.id_documento=documento_noticia.id_noticia

"""