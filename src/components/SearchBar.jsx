const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="relative w-full max-w-xl mx-auto">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400">
                🔍
            </span>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for a movie or show..."
                className="w-full pl-11 pr-4 py-3 bg-gray-900/80 text-white placeholder-gray-400 rounded-full border border-gray-700 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition duration-200"
            />
        </div>
    );
};

export default SearchBar;