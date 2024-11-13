import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [toWatch, setToWatch] = useState( [] )
  const [page, setPage] = useState(1); // 新增的 page 状态
  const [moviePage, setMoviePage] = useState(1); 
  const [popularPage, setPopularMoviePage] = useState(1); 

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromWishList = (movie) => {
    setToWatch( toWatch.filter(
      (mId) => mId !== movie.id
    ))
  };

  const addToWatch = (movie) => {
    let newToWatch = [];
    if (!toWatch.includes(movie.id)){
      newToWatch = [...toWatch, movie.id];
    }
    else{
      newToWatch = [...toWatch];
    }
    setToWatch(newToWatch)
  };
  // console.log(toWatch)

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlesetMoviePageChange = (event, value) => {
    setMoviePage(value);
  };

  const handlePopularPageChange = (event, value) => {
    setPopularMoviePage(value);
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        toWatch,
        page,
        moviePage,
        popularPage,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatch,
        removeFromWishList,
        handlePageChange,
        handlesetMoviePageChange,
        handlePopularPageChange,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;