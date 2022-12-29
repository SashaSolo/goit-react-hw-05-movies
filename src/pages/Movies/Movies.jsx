import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesArray } from 'components/MoviesArray/MoviesArray';
import { getMoviesBySearch } from 'api/fetchAPI';
import { FormSearch } from 'components/FormSearch/FormSearch';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    getMoviesBySearch(query)
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.log(error.message));
  }, [query]);

  const handleSubmit = query => {
    setSearchParams(query !== '' ? { query: query } : {});
  };

  return (
    <div>
      <FormSearch dataForm={handleSubmit} />
      {movies.length > 0 && <MoviesArray movies={movies} />}
      <Outlet />
    </div>
  );
};

Movies.propTypes = {
  handleSubmit: PropTypes.func,
};
