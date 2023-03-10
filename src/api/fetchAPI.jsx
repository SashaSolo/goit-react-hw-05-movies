import axios from 'axios';
const KEY_API = '17d595c1302cb1ab25c1e807c7495589';
const BASE_URL = 'https://api.themoviedb.org/3/';
const DEFAULT_LANG = '&language=en-US';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY_API}`
  );
  return response.data;
};

export const getMoviesBySearch = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY_API}&query=${query}
    ${DEFAULT_LANG}&page=1&include_adult=false`
  );
  return response.data;
};

export const getMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY_API}${DEFAULT_LANG}`
  );
  return response.data;
};

export const getGenres = async () => {
  const response = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${KEY_API}${DEFAULT_LANG}`
  );
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY_API}${DEFAULT_LANG})`
  );
  return response.data;
};

export const getReview = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY_API}${DEFAULT_LANG}&page=1`
  );
  return response.data;
};
