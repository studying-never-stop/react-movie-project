import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../images/film-poster-placeholder.png'
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';
import TransgenderIcon from '@mui/icons-material/Transgender';
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

export default function PersonCard({ person, action }) {


  return (
    <Card >
      <CardMedia
        sx={{ height: 500 }}
        image={
            person.profile_path
            ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
            : img
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
          {person.name}
        </Typography>
        <Grid xs={6}>
            <Typography variant="h6" component="p">
                {person.gender === 1 ? (
                <>
                    <WomanIcon fontSize="small" /> Female
                </>
                ) : person.gender === 2 ? (
                <>
                    <ManIcon fontSize="small" /> Male
                </>
                ) : (
                <>
                    <TransgenderIcon fontSize='small' /> Unknown
                </>

                )}
            </Typography>
        </Grid>
        <Typography variant="h6" sx={{ color: 'text.secondary' }}>
        {"  "}{person.known_for_department}{"  "}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {action(person)}
        <Link to={`/`}>
        <Button variant="outlined" size="small">More Info ...</Button>
        </Link>
      </CardActions>
    </Card>
  );
}