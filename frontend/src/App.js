import {Routes, Route} from "react-router";
import './App.css';
import { Layout } from "./Layout/layout";
import { Inicio } from "./Inicio/Inicio";
import { Documentos } from "./Documentos/Documentos";
import { EnlacesPage } from "./enlacesPage/EnlacesPage";
import { Galeria } from "./Galeria/Galeria";
import { Quienes } from "./Quienes/Quienes";
import { NuestroTrabajo } from "./NuestroTrabajo/NuestroTrabajo";
import {PreguntasFrecuentes} from "./PreguntasFrecuentes/PreguntasFrecuentes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/documentos" element={<Documentos/>}/>
          <Route path="/enlaces" element={<EnlacesPage/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
          <Route path="/quienes-somos" element={<Quienes/>}/>
          <Route path="/nuestro-trabajo" element={<NuestroTrabajo/>}/>
          <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
