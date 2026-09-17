import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("girls"); // Default query
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            if (!searchTerm.trim()) {
                setMovies([]);
                return;
            }

            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`
                );
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };        const timer = setTimeout(() => {
            fetchMovies();
        }, 400);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Browse Movies
                    </h1>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20 text-gray-400">
                        <span className="animate-pulse text-lg">Searching movies...</span>
                    </div>
                ) : movies.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {movies.map((movie) => (
                            <MovieCard key={movie.show.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-lg">No movies found for "{searchTerm}".</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviesPage;