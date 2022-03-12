import estilo from "./Busqueda.module.css";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "../hooks/useQuery";
import { useNavigate } from "react-router";
const classes3 = [estilo.busqueda__searchButton, estilo.busqueda__pointer];
const classes4 = [estilo.busqueda__searchInput, estilo.busqueda__write];

export function Busqueda() {
  const query = useQuery();
  const search = query.get("search");
  //console.log(query.toString());
  //console.log(search);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={estilo.busqueda__Container} onSubmit={handleSubmit}>
      <div className={estilo.busqueda__searchBox}>
        <input
          className={classes4.join(" ")}
          type="text"
          value={search ?? ""}
          placeholder="Título"
          aria-label="Buscar película"
          onChange={(e) => {
            const value = e.target.value;
            history("/?search=" + value);
          }}
        />
        <FaSearch size={20} color="black" className={classes3.join(" ")} />
      </div>
    </form>
  );
}
