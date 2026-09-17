import { Calendar, Star } from "lucide-react";

const MovieCard = ({ movie, onSelect }) => {
    const { name, image, rating, premiered } = movie.show;
    const year = premiered ? premiered.split("-")[0] : "N/A";
    const score = rating?.average ? rating.average : "N/A";
    const poster = image?.medium || "https://via.placeholder.com/210x295?text=No+Poster";

    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700/60 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-2/3 w-full overflow-hidden bg-gray-900">
                <img 
                    src={poster} 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 flex flex-col grow justify-between space-y-4">
                <div>
                    <h3 className="text-lg font-bold text-white line-clamp-1" title={name}>
                        {name}
                    </h3>
                    
                    <div className="flex items-center space-x-3 mt-2 text-sm text-gray-300">
                        <span className="flex items-center space-x-1 text-amber-400 font-semibold">
                            <span><Star className="w-4 h-4"/></span>
                            <span>{score}</span>
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="flex items-center space-x-1">
                            <span><Calendar className="w-4 h-4" /></span>
                            <span>{year}</span>
                        </span>
                    </div>
                </div>

                <button 
                    onClick={() => onSelect(movie.show)}
                    className="w-full py-2 bg-linear-to-r from-orange-500 via-pink-600 to-purple-700 hover:brightness-110 text-white font-medium text-center rounded-lg transition duration-200 shadow-md active:scale-95 cursor-pointer"
                >
                    See Details
                </button>
            </div>
        </div>
    );
};

export default MovieCard;