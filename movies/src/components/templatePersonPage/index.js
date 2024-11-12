import React, { useState, useEffect } from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getPersonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TemplatePersonPage = ({ person, children }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: person.id }],
    getPersonImages
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5秒后自动切换

    return () => clearInterval(interval); // 清除计时器
  }, [currentImageIndex, data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const images = data?.profiles || []; // 防止数据为空,加了“?”如果为空会返回undefined并不执行.后面的内容，而不会报错

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <MovieHeader movie={person} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <ImageList
              sx={{
                height: "100vh",
              }}
              cols={1}
            >
              <ImageListItem key={images[currentImageIndex]?.file_path} cols={1}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${images[currentImageIndex]?.file_path}`}
                  alt={images[currentImageIndex]?.poster_path}
                />
              </ImageListItem>
            </ImageList>
            <IconButton
              onClick={handlePrevious}
              style={{ position: "absolute", top: "50%", left: "10px" }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              style={{ position: "absolute", top: "50%", right: "10px" }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplatePersonPage;