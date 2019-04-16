const url = new URL('https://api.themoviedb.org/3/movie/upcoming');
const params = { api_key: process.env.REACT_APP_API_KEY };

const REGION = '&region=US';

url.search = new URLSearchParams(params);

export const fetchMoviesAPI = async () => {
  const response = await fetch(`${url}${REGION}`);
  const { results } = await response.json();

  return results;
};