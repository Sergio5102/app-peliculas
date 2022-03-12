import { Link } from "react-router-dom";
import { getPeliculaPoster } from "../utils/getPeliculaPoster";
import estilo from "./PeliculaCard.module.css";

export function PeliculaCard({ pelicula }) {
  //Todos los elementos de una lista deben tener su propia key
  const imageURL = getPeliculaPoster(pelicula.poster_path, 300);
  return (
    <li className={estilo.peliculaCard}>
      <Link
        to={"/peliculas/" + pelicula.id}
        className={estilo.peliculaCard__pointer}
      >
        <img
          width={230}
          height={345}
          className={estilo.peliculaCard__movieImage}
          src={imageURL}
          alt={pelicula.title}
        />
        <div>{pelicula.title}</div>
      </Link>
    </li>
  );
}
