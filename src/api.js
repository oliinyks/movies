import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = process.env.REACT_APP_API_KEY;

export const fetchDayMovie = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieReviews = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieCast = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
