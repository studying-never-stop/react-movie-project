import React, { useState, useContext } from "react";
import Header from "../headerMovie";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import PagniationPage from "../pagination";
import { MoviesContext } from "../../contexts/moviesContext";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };
  const { moviePage, popularPage, upcomingPage, handleUpcomingPageChange, handlesetMoviePageChange, handlePopularPageChange } = useContext(MoviesContext);

   // 根据标题映射到对应的 page 和处理程序
   const pageMapping = {
    "Popular Movies": { page: popularPage, handlePageChange: handlePopularPageChange },
    "Upcoming Movies": { page: upcomingPage, handlePageChange: handleUpcomingPageChange },
    "Discover Movies": { page: moviePage, handlePageChange: handlesetMoviePageChange },
    // 根据需要在这里添加其他页面
  };

  // 根据标题使用映射的 page 和处理程序，或使用默认设置
  const { page, handlePageChange } = pageMapping[title] || { page: moviePage, handlePageChange: handlesetMoviePageChange };

  return (
    <Grid container>
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
      <Grid 
        container 
        justifyContent="center" 
        sx={{ 
          position: "fixed", 
          bottom: 0, 
          width: "100%", // 确保分页器在底部居中
          padding: "10px", // 给分页器一些内边距
          backgroundColor: "white", // 可选：设置背景色，以便分页器始终可见
          boxShadow: "0 -1px 5px rgba(0,0,0,0.1)" // 可选：添加顶部阴影
        }}
      >
        <PagniationPage 
          page={page} 
          handlePageChange={handlePageChange} 
        />
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;