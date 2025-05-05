import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };
  return (
    <div className='flex justify-center pt-5 'onClick={handleClick}>

    <div className="flex-wrap w-60 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://img.freepik.com/premium-photo/vertical-image-404-error-floating-window-green-stage-internet-connection-problem_551230-895.jpg?ga=GA1.1.47276942.1743000520&semt=ais_hybrid&w=740"}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold truncate mb-1">{movie.Title}</h2>
        <p className="text-sm text-gray-600 mb-1">Year: {movie.Year}</p>
        <p className="text-sm text-gray-600 mb-1">Rated: {movie.Rated}</p>
        <p className="text-sm text-gray-600 mb-1">IMDb ID: {movie.imdbID || "N/A"}</p>
        <p className="text-sm text-gray-500 line-clamp-3">{movie.Plot}</p>
      </div>
    </div>
        </div>
  );
};

export default MovieCard;
