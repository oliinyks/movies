import { useState, useEffect } from 'react';
import { fetchMovieById } from '../../api';
import { useParams } from 'react-router-dom';
import {
	Box,
	MovieInfo,
	MainTitle,
	Img,
	Tagline,
	Score,
	Genres,
	GenresList,
	Overview,
 } from './MovieDetails.styled';


export const MovieDetails = () => {
	const [selectedMovie, setSelectedMovie] = useState(null);
	const { movieId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
		  try {
			 const movie = await fetchMovieById(movieId);
			 setSelectedMovie(movie);
		  } catch (error) {
			 new Error();
		  }
		};
  
		fetchData();
	 }, [movieId]);


	if (!selectedMovie) {
		return;
	 }

	const { title, poster_path, vote_average, tagline, overview, genres } = selectedMovie;
	
	return(
		<Box>
      <div>
        <Img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
      </div>

      <MovieInfo>
        <MainTitle>{title}</MainTitle>
        <Tagline>{tagline}</Tagline>
        <Score>
          {' '}
          <span>User Score:</span> {`${vote_average.toFixed(1)}`}
        </Score>
        <Genres>Genres</Genres>
        <GenresList>
          {genres.map(({ id, name }) => (
            <li key={id}>- {name}</li>
          ))}
        </GenresList>
        <Overview>Overview</Overview>
        <p>{overview}</p>
      </MovieInfo>
    </Box>
	)
}