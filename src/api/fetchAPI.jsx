import axios from 'axios';
const KEY_API = '17d595c1302cb1ab25c1e807c7495589';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY_API}`
  );
  return response.data;
};

export const getMoviesBySearch = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY_API}&query=${query}
    &language=en-US&page=1&include_adult=false`
  );
  return response.data;
};

export const getMovie = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY_API}&language=en-US`
  );
  return response.data;
};

export const getGenres = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY_API}&language=en-US`
  );
  return response.data;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US)`
  );
  return response.data;
};

export const getReview = async movieId => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US&page=1`
  );
  return response.data;
};
