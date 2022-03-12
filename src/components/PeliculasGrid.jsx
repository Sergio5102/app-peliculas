import { useEffect, useState } from "react";
import { get } from "../utils/accesoAPI";
import { PeliculaCard } from "./PeliculaCard";
import estilo from "./PeliculasGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

export function PeliculasGrid({ search, genres }) {
  const [peliculas, setPeliculas] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  console.log(search);
  console.log(genres);

  useEffect(() => {
    setIsLoading(true);
    var searchURL;
    if (search) {
      searchURL = `/search/movie?query=${search}&page=${page}&language=es-ES&include_adult=false`;
    } else if (genres) {
      searchURL = `/discover/movie?with_genres=${genres}&page=${page}&language=es-ES`;
    } else {
      searchURL = `/discover/movie?page=${page}&language=es-ES&include_adult=false`;
    }

    get(searchURL).then((data) => {
      setPeliculas((prevPelis) => prevPelis.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, genres, page]);
  if (!isLoading && peliculas.length === 0) {
    return <Empty />;
  }
  return (
    <InfiniteScroll
      dataLength={peliculas.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Spinner />}
    >
      <ul className={estilo.peliculasGrid}>
        {peliculas.map((pelicula) => (
          //Todos los elementos de una lista deben tener su propia key
          <PeliculaCard key={pelicula.id} pelicula={pelicula} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
