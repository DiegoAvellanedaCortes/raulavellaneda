import { Link } from "react-router";
import FotoFondo  from "../img/FondoInicio.webp";
import "./menu.css";

function Menu() {
    return (
        <>
            <div className="bannnerInicioFondo">
                <img className="foto-fondo" src={FotoFondo} alt="Fondo"/>
            </div>
            <div className="menu-desktop">
                <nav>
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
                </nav>
            </div>
        </>
    );
}

export { Menu }
