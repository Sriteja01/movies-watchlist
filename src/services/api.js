const API_KEY = import.meta.env.VITE_TMDB_API_KEY || "";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchJson(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export const getPopularMovies = async () => {
  if (!API_KEY) return [];
  const data = await fetchJson(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  return data.results || [];
};

export const searchMovies = async (query) => {
  if (!API_KEY) return [];
  const data = await fetchJson(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  return data.results || [];
};
