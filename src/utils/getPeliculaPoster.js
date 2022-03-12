import placeholder from "../placeholder.jpg";

export function getPeliculaPoster(path,width){
  return  path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : placeholder;
}