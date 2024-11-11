import React from "react";
import { getPopular } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from "../components/cardIcons/addToWatch";

const PopularMoviesPage = () => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopular)
  

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const ToWatch = movies.filter(m => m.toWatch)
  localStorage.setItem('towatch', JSON.stringify(ToWatch))

  return (
    <PageTemplate
      title="Popular Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchIcon movie={movie} />
      }}
    />
  );
};
export default PopularMoviesPage;