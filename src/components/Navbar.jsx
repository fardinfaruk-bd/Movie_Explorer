import Logo from "../assets/images/Logo.png";

const Navbar = () => {
    return (
        <nav className="w-full border-b border-gray-300 bg-slate-50/50 backdrop-blur-sm px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo and Brand Title */}
                <div className="flex items-center space-x-3 cursor-pointer">
                    <img src={Logo} alt="MovieExplorer Logo" className="w-7 h-7 object-contain" />
                    <span className="text-xl font-semibold tracking-wide text-gray-800">
                        MovieExplorer
                    </span>
                </div>

                <div>
                    <a 
                        href="#movies" 
                        className="px-4 py-2 text-gray-800 font-medium hover:text-blue-600 transition-colors duration-200"
                    >
                        Movies
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;