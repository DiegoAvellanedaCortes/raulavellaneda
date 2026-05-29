from ..conexionDB import Base
from sqlalchemy import Column, Integer, String

class Imagen(Base):
    __tablename__ = "imagen"
    id_imagen = Column(Integer, primary_key=True, index=True)
    nombre_imagen = Column(String)
    url_imagen = Column(String)