import estilo from "./MenuGeneros.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/accesoAPI";
import { useNavigate } from "react-router-dom";

const classes = [estilo.MenuGeneros, estilo.MenuGeneros__pointer];

export function MenuGeneros() {
  const history = useNavigate();
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    get("/genre/movie/list?language=es-ES").then((data) => {
      setGeneros(data.genres);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={classes.join(" ")}>
      {generos.map((genero) => (
        <li
          className={estilo.MenuGeneros__enlaces}
          key={genero.id}
          value={genero.id}
          onClick={(e) => {
            const value = e.target.value;
            history("/?with_genres=" + value);
          }}
        >
          {genero.name}
        </li>
      ))}
    </form>
  );
}
