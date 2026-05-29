from ..conexionDB import Base
from sqlalchemy import Column, Integer, String

class Documento(Base):
    __tablename__ = "documento"
    id_documento = Column(Integer, primary_key=True, index=True)
    nombre = Column(String)
    fecha = Column(String)
    categoria=Column(String)
    entidad=Column(String)
    url_doc=Column(String)