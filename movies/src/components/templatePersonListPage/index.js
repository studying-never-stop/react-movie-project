import React, { useState, useContext } from "react";
import Header from "../headerMovie";
import FilterCard from "../filterMoviesCard";
import PersonList from "../personList";
import Grid from "@mui/material/Grid2";
import { MoviesContext } from "../../contexts/moviesContext";
import PagniationPage from "../pagination";

function PersonPageTemplate({ persons, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);


  //filterpart can visit the part of movie todo
  let displayedPerson = persons
    // .filter((m) => {
    //   return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    // })
    // .filter((m) => {
    //   return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    // });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  const { page, handlePageChange } = useContext(MoviesContext);

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
        <PersonList action={action} person={displayedPerson}></PersonList>
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
export default PersonPageTemplate;