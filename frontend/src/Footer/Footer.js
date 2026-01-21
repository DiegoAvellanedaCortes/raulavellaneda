import { Link } from "react-router";
import "./Footer.css";
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
//import iconFacebook from "../img/iconos_redes/facebook.png";
//import iconInstagram from "../img/iconos_redes/instagram.png";
//import iconTiktok from "../img/iconos_redes/tiktok.png";
//import iconWhatsApp from "../img/iconos_redes/whatsapp.png";
//import iconYoutube from "../img/iconos_redes/youtube.png";
import caricatura from "../img/caricatura.png";

function Footer() {
    return (
        <footer>
            <div className="footer-nombre">
                <p>Raúl</p>
                <p>Avellaneda</p>
            </div>
            <div className="paginas">
                <ul>
                    <li>
                        <Link to="/">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/documentos">
                            Documentos
                        </Link>
                    </li>
                    <li>
                        <Link to="/enlaces">
                            Enlaces
                        </Link>
                    </li>
                    <li>
                        <Link to="/galeria">
                            Galería
                        </Link>
                    </li>
                    <li>
                        <Link to="/quienes-somos">
                            ¿Quiénes somos?
                        </Link>
                    </li>
                    <li>
                        <Link to="/nuestro-trabajo">
                            Nuestro trabajo
                        </Link>
                    </li>
                    <li>
                        <Link to="/preguntas-frecuentes">
                            Preguntas frecuentes
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="links">
                <div className="redes">
                    <p>Redes:</p>
                    <div className="contenedor-redes">
                        <a href="https://www.instagram.com/proferaulavellaneda/" target="_blanck">
                            <FaInstagram color="black" size="2em"/>
                        </a>
                        <a href="https://www.tiktok.com/@raulavellanedaprofe" target="_blanck">
                            <FaTiktok color="black" size="2em"/>
                        </a>
                        <a href="https://wa.me/573103105286" target="_blanck">
                            <FaWhatsapp color="black" size="2em"/>
                        </a>
                        <a href="https://www.youtube.com/@raulavellaneda4720" target="_blanck">
                            <FaYoutube color="black" size="2em"/>
                        </a>
                        <a href="https://www.facebook.com/avellanedare?locale=es_LA" target="_blanck">
                            <FaFacebook  color="black" size="2em"/>
                        </a>
                    </div>
                </div>
                <a href="https://cut.org.co/" target="_blanck">CUT</a>
                <a href="https://adec.com.co/" target="_blanck">ADEC</a>
                <a href="https://www.fomag.gov.co/" target="_blanck">FOMAG</a>
                <a href="https://www.cundinamarca.gov.co/dependencias/seceducacion" target="_blanck">SECRETARIA DE EDUCACIÓN</a>
            </div>
            <div className="imagen-raul">
                <img src={caricatura} alt="caritura"/>
            </div>
        </footer>
    );
}

export { Footer }