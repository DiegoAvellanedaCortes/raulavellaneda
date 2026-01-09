import {Routes, Route} from "react-router";
import './App.css';
import { Layout } from "./Layout/layout";
import { Inicio } from "./Inicio/Inicio";
import { Documentos } from "./Documentos/Documentos";
import { EnlacesPage } from "./enlacesPage/EnlacesPage";
import { Galeria } from "./Galeria/Galeria";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/documentos" element={<Documentos/>}/>
          <Route path="/enlaces" element={<EnlacesPage/>}/>
          <Route path="/galeria" element={<Galeria/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
