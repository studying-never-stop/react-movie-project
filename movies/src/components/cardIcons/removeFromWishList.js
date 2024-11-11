import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWishListIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWishList = (e) => {
    e.preventDefault();
    context.removeFromWishList(movie);
  };
  return (
    <IconButton
      aria-label="remove from Wish List"
      onClick={handleRemoveFromWishList}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWishListIcon;