import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api';
import {Box, CastItem, CastImg, Name } from './Cast.styled';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviews = await fetchMovieCast(movieId);
        setMovieCast(reviews.cast);
      } catch (error) {
        new Error();
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  const settings = {
	dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
 };

  return (
    <Box>
      <Slider {...settings}>
        {movieCast.map(({ id, profile_path, name, character }) => (
          <CastItem key={id}>
            <CastImg
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt="name"
            />
            <Name>{name}</Name>
            <p>{character}</p>
          </CastItem>
        ))}
      </Slider>
    </Box>
  );
};

//name character profile_path
