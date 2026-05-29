import imagen from "../img/Img_noticias/Tabla_salarial_2026.webp";
import "./bannerNoticias.css";

function BannerNoticias() {
    const url = process.env.REACT_APP_URL_API + "/consultaNoticias";
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);
        }
    )

    return (
        <div className="banner-noticias">
            <div className="card-noticia">
                <img src={imagen} alt="tabla salarial 2026" className="img-noticias" />
                <h3 className="titulo-card-noticia">Titulo</h3>
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <p className="fecha-noticia">20 Abril 2026</p>
            </div>
            <div className="card-noticia">
                <img src={imagen} alt="tabla salarial 2026" className="img-noticias" />
                <h3 className="titulo-card-noticia">Titulo</h3>
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <p className="fecha-noticia">20 Abril 2026</p>
            </div>
            <div className="card-noticia">
                <img src={imagen} alt="tabla salarial 2026" className="img-noticias" />
                <h3 className="titulo-card-noticia">Titulo</h3>
                <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                <p className="fecha-noticia">20 Abril 2026</p>
            </div>
        </div>
    );
}

export { BannerNoticias }