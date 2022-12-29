import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { NotFound } from 'pages/NotFound/NotFound';
// import { StyledLink } from './App.Styled';

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <nav>
        <AppBar />
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieID" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
