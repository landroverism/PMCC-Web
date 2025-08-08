import HeroBg from '../assets/hero-background.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative bg-cover bg-center py-20 lg:py-32" style={{ backgroundImage: `url(${HeroBg})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Healing Begins <span className="text-emerald-600">Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Find hope and recovery in our faith-based rehabilitation center. 
            Professional care in a peaceful, supportive environment in Nakuru, Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-lg"
            >
              Start Your Journey
            </a>
            <a
              href="#about"
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      
    </section>
  );
}
