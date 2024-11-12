import React from "react";
import { getPersons } from "../api/tmdb-api";
import PageTemplate from '../components/templatePersonListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'

const PersonPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('person', getPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const casts = data.results;
//   console.log(casts)

  return (
    <PageTemplate
      title="Popular cast"
      persons={casts}
      action={(person) => {
        return <AddToFavoritesIcon person={person} />
      }}
    />
  );
};
export default PersonPage;