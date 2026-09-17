import { X, Star, Calendar, Globe, Film } from "lucide-react";

const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;

    const { name, image, rating, premiered, summary, genres, language } = movie;
    const year = premiered ? premiered.split("-")[0] : "N/A";
    const score = rating?.average ? rating.average : "N/A";
    const poster = image?.original || image?.medium || "https://via.placeholder.com/300x450?text=No+Poster";

    return (
        <div 
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/10 backdrop-blur-md transition-all duration-300 animate-in fade-in"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900/90 border border-gray-700/50 text-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[85vh] cursor-default backdrop-saturate-150"
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/90 hover:scale-110 transition duration-200 border border-white/10 cursor-pointer shadow-lg"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="md:w-5/12 w-full relative bg-gray-950 flex items-center justify-center overflow-hidden">
                    <img 
                        src={poster} 
                        alt={name} 
                        className="w-full h-full object-cover max-h-80 md:max-h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-gray-900/90"></div>
                </div>

                <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-between overflow-y-auto space-y-6">
                    <div className="space-y-4">
                        
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                            {name}
                        </h2>
                        
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold">
                                <Star className="w-4 h-4 fill-amber-400" />
                                <span>{score}</span>
                            </span>

                            <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span>{year}</span>
                            </span>

                            {language && (
                                <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gray-800/80 border border-gray-700 text-gray-300 uppercase text-xs font-medium">
                                    <Globe className="w-3.5 h-3.5 text-gray-400" />
                                    <span>{language}</span>
                                </span>
                            )}
                        </div>

                        {genres?.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-1">
                                {genres.map((genre) => (
                                    <span 
                                        key={genre} 
                                        className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full font-medium"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        )}

                        {summary && (
                            <div className="pt-2 border-t border-gray-800">
                                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2 flex items-center gap-1.5">
                                    <Film className="w-3.5 h-3.5" /> Storyline
                                </h4>
                                <div 
                                    className="text-gray-300 text-sm leading-relaxed max-h-36 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700"
                                    dangerouslySetInnerHTML={{ __html: summary }}
                                />
                            </div>
                        )}
                    </div>

                    <button 
                        onClick={onClose}
                        className="w-full py-3 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-700 hover:brightness-110 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-pink-500/10 active:scale-98 cursor-pointer mt-4"
                    >
                        Close Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;