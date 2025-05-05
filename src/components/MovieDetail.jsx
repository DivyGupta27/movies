import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=40d5ad0f`);
      const data = await res.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
      <img src={movie.Poster} alt={movie.Title} className="w-full max-h-96 object-contain mb-4" />
      <h1 className="text-2xl font-bold mb-2">{movie.Title} ({movie.Year})</h1>
      <p className="mb-2"><strong>Genre:</strong> {movie.Genre}</p>
      <p className="mb-2"><strong>Director:</strong> {movie.Director}</p>
      <p className="mb-2"><strong>Actors:</strong> {movie.Actors}</p>
      <p className="mb-2"><strong>Plot:</strong> {movie.Plot}</p>
      <p className="mb-2"><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      <p className="mb-2"><strong>Awards:</strong> {movie.Awards}</p>
    </div>
  );
};

export default MovieDetail;
