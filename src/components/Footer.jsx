import { Link } from 'react-router';
import logo from '../assets/images/logo.png';
const Footer = () => {
    return (
        <footer className="w-full bg-gray-900 border-t border-gray-800 text-gray-400 py-6 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                
                <Link to="/" className="flex items-center space-x-3 cursor-pointer">
                    <img src={logo} alt="MovieExplorer Logo" className="w-6 h-6 object-contain" />
                    <span className="text-lg font-semibold text-white tracking-wide">
                        MovieExplorer
                    </span>
                </Link>

                <p className="text-sm">
                    © {new Date().getFullYear()} MovieExplorer. All rights reserved.
                </p>

                <div className="flex items-center space-x-6 text-sm font-medium">
                    <Link 
                        to="/movies" 
                        className="hover:text-white transition-colors duration-200"
                    >
                        Movies
                    </Link>
                    <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:text-white transition-colors duration-200"
                    >
                        GitHub
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:text-white transition-colors duration-200"
                    >
                        Twitter
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;