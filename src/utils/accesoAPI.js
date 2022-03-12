const API = "https://api.themoviedb.org/3";

export function get(ruta){
  return fetch(API + ruta, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjVhZmQyOTRiMzM0ODYxOTk4MDNkMDk5NGM1MDk0NSIsInN1YiI6IjYyMThhMGU0NzlhMWMzMDA0M2ZhYjA0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KhRRiT6RjY-bB-JBMZcKU6aSu1O0ADERFIG6uQOZOMU",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json());
}