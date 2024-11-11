import React, { useState } from "react";
import Header from "../headerMovie";
import FilterCard from "../filterMoviesCard";
import PersonList from "../personList";
import Grid from "@mui/material/Grid2";

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
    </Grid>
  );
}
export default PersonPageTemplate;