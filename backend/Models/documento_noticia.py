from ..conexionDB import Base
from sqlalchemy import Column, Integer

class DocumentoNoticia(Base):
    __tablename__="documento_noticia"
    id_documento_noticia=Column(Integer, primary_key=True, index=True)
    id_noticia=Column(Integer)
    id_documento=Column(Integer)