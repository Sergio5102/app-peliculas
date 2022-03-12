//App.jsx es un módulo. Todas sus funciones son privadas y no se puede acceder.
//Para poder acceder al componente hay que exportarlo (export)
//También hay que importarlo (import) en el archivo en el que se vaya a utilizar
//Para renombrar un componente y que se renombre en todos sitios se usa F2.
//Renombrar no funciona si se utiliza el export default
import estilo from "./App.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { PeliculaDetalles } from "./pages/peliculaDetalles";
import { PaginaCarga } from "./pages/PaginaCarga";
const classes = [
  estilo.app__title,
  estilo.app__glitch,
  estilo.app__layers,
  estilo.app__pointer,
];

export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className={classes.join(" ")} data-text="FILMANIATICS">
            <span>FILMANIATICS</span>
          </h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<PaginaCarga />}></Route>
          <Route
            path="/peliculas/:peliculaId"
            element={<PeliculaDetalles />}
          ></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
