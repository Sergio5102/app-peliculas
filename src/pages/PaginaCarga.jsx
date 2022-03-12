import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import { Busqueda } from "../components/Busqueda";
import { PeliculasGrid } from "../components/PeliculasGrid";
import { MenuGeneros } from "../components/MenuGeneros";
import PropTypes from "prop-types";

export function PaginaCarga() {
  const query = useQuery();
  const search = query.get("search");

  const queryGenres = useQuery();
  const genres = queryGenres.get("with_genres");

  const debouncedSearch = useDebounce(search, 300);
  const debouncedGenre = useDebounce(genres, 1);
  return (
    <div>
      <MenuGeneros />
      <Busqueda />

      <PeliculasGrid
        key={debouncedSearch || debouncedGenre}
        search={debouncedSearch}
        genres={debouncedGenre}
      />
    </div>
  );
}

PeliculasGrid.propTypes = {
  search: PropTypes.string,
  genres: PropTypes.string,
};
