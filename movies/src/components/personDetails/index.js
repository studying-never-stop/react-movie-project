import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PersonDetails = ({ person, credits }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  // console.log(person);
//   console.log(credits)


  return (
    <>
      <Typography variant="h5" component="h3">
        Name
      </Typography>

      <Typography variant="h6" component="p">
        {person.name}
      </Typography>
      <Paper 
        component="ul" 
        sx={{ ...root, maxHeight: '300px', overflowY: 'auto' }}
      >
        <Typography variant="h5" component="h3">
        biography
      </Typography>

      <Typography variant="h6" component="p">
        {person.biography}
      </Typography>
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <li>
        <Chip label="Gender" sx={{...chip}} color="primary" />
        <Chip
            label={
                person.gender === 1
                ? "Female"
                : person.gender === 2
                ? "Male"
                : "Unknown"
            }
        />
            <Chip label="Person_birthday" sx={{...chip}} color="primary" />
            <Chip label={` ${person.birthday}`} sx={{...chip}} />
        </li>
        <li>
        <Chip label="Birth_place" sx={{...chip}} color="primary" />
        <Chip label={`${person.place_of_birth}`} />
        <Chip label="Department" sx={{...chip}} color="primary" />
        <Chip label={` ${person.known_for_department}`} />
        </li>
            
      </Paper>
        <Paper component="ul" sx={{ ...root, maxHeight: '200px', overflowY: 'auto' }}>
        <li>
            <Chip label="Movies" sx={{ ...chip }} color="primary" />
        </li>
        {credits.cast.map((p) => (
            <li key={p.title}>
            <Chip label={p.title} sx={{ ...chip }} />
            </li>
        ))}
        </Paper>
      {/* <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer> */}
      </>
  );
};
export default PersonDetails ;