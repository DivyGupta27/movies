import React, { useContext, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { PageContext } from '../contextapi/ProviderContext';
import { useParams } from 'react-router-dom';

const Movie = ({type}) => {
  const [movies, setMovies] = useState([]);
  const {mypage}=useContext(PageContext)
  const { query } = useParams()

  const searchTerm = query || type || "movie";
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=40d5ad0f&type=movie&page=${mypage}`);
        const json = await res.json();
        if (json.Search) {
          setMovies(json.Search);
        } else {
          setMovies([]); // clear results if none found
        }
      } catch (err) {
        console.error("Failed to fetch:", err);
      }
    };
    fetchMovies();
  }, [searchTerm, mypage]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {movies.length > 0 ? (
        movies.map((movie, i) => <MovieCard key={i} movie={movie} />)
      ) : (
        <p className="text-white col-span-full text-center">No movies found.</p>
      )}
    </div>
  );
};

export default Movie;
