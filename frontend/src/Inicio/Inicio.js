import "./inicio.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import municipiosData from "../municipiosCUn.json";



function Inicio() {
    const [dataSearch, setDataSearch] = useState("");
    const [nombre, setNombre] = useState("");
    const [celular, setCelular] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [mensaje, setMensaje] = useState("");
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
                        <input
                            id="nombreForm"
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={
                                (event) => {
                                    setNombre(event.target.value);
                                }
                            }
                            required
                        />
                        <div className="celular-municipio">
                            <input
                                id="celularForm"
                                type="number"
                                placeholder="Celular"
                                value={celular}
                                onChange={
                                    (event) => {
                                        setCelular(event.target.value);
                                    }
                                }
                                required
                            />
                            <input
                                id="municipioForm"
                                list="municipio"
                                placeholder="Municipio"
                                value={municipio}
                                onChange={
                                    (event) => {
                                        setMunicipio(event.target.value);
                                    }
                                }
                                required
                            />
                            <datalist id="municipio">
                                {
                                    municipios.map(nombreMunicipio => (
                                        <option key={nombreMunicipio}>{nombreMunicipio}</option>
                                    ))
                                }
                            </datalist>
                        </div>
                        <input
                            id="mensaje"
                            type="text"
                            name="mensaje"
                            placeholder="Mensaje"
                            value={mensaje}
                            onChange={
                                (event) => {
                                    setMensaje(event.target.value);
                                }
                            }
                            required
                        />
                        <div className="btnFormularioContacto">
                            <button
                                onClick={
                                    (event) => {
                                        event.preventDefault();
                                        const whatsApptelefono = 3103105286;
                                        const datoMensaje = "Hola, soy " + nombre + " del municipio de " + municipio + " y tengo este caso: " + mensaje;
                                        const enviarMensaje = "https://wa.me/" + whatsApptelefono + "?text=" + datoMensaje;
                                        window.open(enviarMensaje, "_blanck");
                                        setNombre("");
                                        setCelular("");
                                        setMunicipio("");
                                        setMensaje("");
                                    }
                                }>Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="SectionYoutube">
                    
                </div>
            </section>
        </>
    );
}

export { Inicio }