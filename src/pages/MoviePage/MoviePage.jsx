import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import MovieCard from "../../components/MovieCard";
import { getMovies } from "../../actions/Movie";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // Start with empty search input
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                let url = "";

                if (!searchTerm.trim()) {
                    url = "https://api.tvmaze.com/shows";
                } else {
                    url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`;
                }

                const data = await getMovies(url);

                if (!searchTerm.trim()) {
                    setMovies(data.map((show) => ({ show })));
                } else {
                    setMovies(data);
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        const timer = setTimeout(() => {
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
                        <span className="animate-pulse text-lg">Loading movies...</span>
                    </div>
                ) : movies.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {movies.map((movie) => (
                            <MovieCard key={movie.show.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 text-gray-400">
                        <p className="text-lg">
                            {searchTerm ? `No movies found for "${searchTerm}".` : "No movies available."}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviesPage;