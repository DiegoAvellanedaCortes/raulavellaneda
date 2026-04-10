from ..conexionDB import Base
from sqlalchemy import Column, Integer, String

class ImagenNoticia(Base):
    __tablename__ = "imagen_noticia"
    id_imagen_noticia = Column(Integer, primary_key=True, index=True)
    id_noticia=Column(Integer)
    id_imagen=Column(Integer)
    tipo = Column(String)