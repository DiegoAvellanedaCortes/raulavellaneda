from ..conexionDB import Base
from sqlalchemy import Column, Integer, String

class Imagen(Base):
    __tablename__ = "imagenes"
    id_imagen = Column(Integer, primary_key=True, index=True)
    nombre_imagen = Column(String)
    url = Column(String)