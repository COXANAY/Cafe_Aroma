
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <img 
          src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=2066&auto=format&fit=crop" 
          alt="Coffee shop interior" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <span 
            className={`inline-block bg-primary/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity- 100' : 'translate-y-10 opacity-0'
            }`}
          >
            Bem-Vindo ao Café Aroma
          </span>
          
          <h1 
            className={`text-4x1 md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight transform transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Experimente nosso Café <br />
            <span className="text-primary">Cada xícara é algo especial</span>
          </h1>
          
          <p 
            className={`text-lg text-white/90 mb-8 max-w-lg transform transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Descubra nossa seleção de cafés artesanais, doces feitos à mão e um ambiente acolhedor que torna cada visita especial.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 ease-out delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Link 
              to="/menu" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center btn-hover"
            >
              Confira nosso cardápio
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center btn-hover"
            >
              Visite-nos
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;