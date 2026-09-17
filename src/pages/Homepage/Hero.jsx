import HeroImage from '../../assets/images/Hero_Image.png';
const Hero = () => {
    return (
        <div 
            className="relative w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-center text-white px-4"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
            
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            
            <div className="relative z-10 max-w-2xl flex flex-col items-center space-y-6">
                
                <h1 className="text-3xl md:text-5xl font-bold tracking-widest uppercase">
                    DISCOVER MOVIES
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
                    Explore and discover your favorite movies from around the world.
                </p>

                <button className="mt-4 px-8 py-3 bg-white/10 backdrop-blur-md text-white font-medium text-lg rounded-md border border-white/30 hover:bg-white hover:text-black transition duration-300 shadow-lg">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default Hero;