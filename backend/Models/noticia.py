from ..conexionDB import Base
from sqlalchemy import Column, Integer, String

class Noticia(Base):
    __tablename__="noticia"
    id_noticia=Column(Integer, primary_key=True)
    titulo=Column(String, nullable=False)
    descripcion=Column(String, nullable=False)
    fecha=Column(String, nullable=False)