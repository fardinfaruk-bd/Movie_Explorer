import { Link } from "react-router";
import Logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full border-b border-white/20 bg-transparent px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <img
              src={Logo}
              alt="MovieExplorer Logo"
              className="w-7 h-7 object-contain"
            />
            <span className="text-xl font-semibold tracking-wide text-white">
              MovieExplorer
            </span>
          </div>
        </Link>

        <div>
          <Link
            to="/movies"
            className="
            px-5 py-2.5 
            text-white font-semibold 
            rounded-full 
            
            bg-linear-to-r 
            from-orange-500 
            via-pink-600 
            to-purple-700 

            hover:bg-linear-to-r 
            hover:from-purple-700
            hover:via-pink-600 
            hover:to-orange-500 
          
            transition-all duration-300 ease-in-out
            hover:shadow-lg hover:brightness-110
            active:scale-95
            inline-flex items-center justify-center
        "
          >
            Movies
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
