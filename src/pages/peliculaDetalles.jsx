import estilo from "./PeliculaDetalles.module.css";
import { useParams } from "react-router-dom";
import { get } from "../utils/accesoAPI";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { getPeliculaPoster } from "../utils/getPeliculaPoster";

export function PeliculaDetalles() {
  //Hook de react-router que recoge los parámetros
  const { peliculaId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + peliculaId + "?language=es-ES").then((data) => {
      setIsLoading(false);
      setPelicula(data);
    });
  }, [peliculaId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!pelicula) {
    return null;
  }

  const imageURL = getPeliculaPoster(pelicula.poster_path, 500);
  return (
    <div className={estilo.peliculaDetalles__detailsContainer}>
      <img
        className={`${estilo.peliculaDetalles__col} ${estilo.peliculaDetalles__movieImage}`}
        src={imageURL}
        alt={pelicula.title}
      />
      <div
        className={`${estilo.peliculaDetalles__col} ${estilo.peliculaDetalles__movieDetails}`}
      >
        <p className={estilo.peliculaDetalles__firstItem}>
          <strong>Título:</strong> {pelicula.title}
        </p>
        <p>
          <strong>Géneros: </strong>
          {pelicula.genres.map((genero) => genero.name).join(", ")}
        </p>
        <p>
          <strong>Descripción:</strong> {pelicula.overview}
        </p>
        <p>
          <strong>Fecha de estreno:</strong> {pelicula.release_date}
        </p>
        <p>
          <strong>Valoración media:</strong> {pelicula.vote_average}/10{" "}
          <p>({pelicula.vote_count} valoraciones)</p>
        </p>
      </div>
    </div>
  );
}
