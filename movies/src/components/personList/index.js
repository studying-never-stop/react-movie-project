import React from "react";
import PersonCard from "../personCard";
import Grid from "@mui/material/Grid2";

const PersonList = (props) => {
  let Person = props.person.map((p) => (
    <Grid key={p.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
        <PersonCard key={p.id} person={p} action={props.action} />
    </Grid>
  ));
  return Person;
};

export default PersonList;