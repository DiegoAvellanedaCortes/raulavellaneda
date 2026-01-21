import "./inicio.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import municipiosData from "../municipiosCUn.json";


function Inicio() {
    const [dataSearch, setDataSearch] = useState("");
    const municipios = municipiosData;

    return (
        <>
            <h1>Inicio</h1>
            <section className="busqueda-inicio">
                <input type="text" placeholder="Buscar" value={dataSearch} onChange={
                    (event) => {
                        setDataSearch(event.target.value);
                    }
                } />
                <CiSearch className="icon-search" onClick={
                    () => {
                        alert(dataSearch);
                        setDataSearch("");
                    }
                } />
            </section>
            <section className="banner-noticias">

            </section>
            <section className="banner-contacto-youtube">
                <div className="formulario-contacto">
                    <form>
                        <p className="titulo-formulario">Contáctanos</p>
                        <input id="nombreForm" type="text" placeholder="Nombre" />
                        <div className="celular-municipio">
                            <input id="celularForm" type="phone" placeholder="Celular" />
                            <input id="municipioForm" list="municipio" placeholder="Municipio" />
                            <datalist id="municipio">
                                {
                                    municipios.map(nombreMunicipio => (
                                        <option>{nombreMunicipio}</option>
                                    ))
                                }
                            </datalist>
                        </div>
                        <input id="mensaje" type="text" name="mensaje" maxlength="100" placeholder="Mensaje" />
                        <button>Enviar</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export { Inicio }