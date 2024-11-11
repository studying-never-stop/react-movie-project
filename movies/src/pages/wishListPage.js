import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromWishListIcon from "../components/cardIcons/removeFromWishList";

const WishListPage = () => {
  const {toWatch: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const toWatchQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["towatch", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = toWatchQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = toWatchQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Wish List"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromWishListIcon movie={movie} />
          </>
        );
      }}
    />
  );
};

export default WishListPage;