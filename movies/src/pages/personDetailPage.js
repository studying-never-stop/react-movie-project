import React from "react";
import { useParams } from 'react-router-dom';
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import { getPerson, getMoviesCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const PersonDetailPage = (props) => {
  const { id } = useParams();
  const { data: person, error, isLoading, isError } = useQuery(
    ["person", { id: id }],
    getPerson
  );
  //don't use same name so need change them add credits at front.
  const { data: creditsData, error: creditsError, isLoading: creditsLoading, isError: creditsIsError } = useQuery(
    ["credits", { id: id }],
    getMoviesCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (creditsLoading) {
    return <Spinner />;
  }

  if (creditsIsError) {
    return <h1>{creditsError.message}</h1>;
  }

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person} title=" Detail ">
            <PersonDetails person={person} credits={creditsData}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default PersonDetailPage;