
import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonial from '../components/Testimonial';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Coffee, Utensils, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check for elements in view on page load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <Hero />
      
      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Uma Paixão pelo Café Perfeito</h2>
              <p className="text-gray-600 mb-6">
                Fundado em 2010, o Café Aroma começou com uma missão simples: servir um café excepcional em um ambiente que se sente como casa. Nossos fundadores, Maria e Daniel, viajaram pelo mundo estudando o cultivo do café e técnicas de torra antes de trazerem seu conhecimento de volta para criar algo especial.
              </p>
              <p className="text-gray-600 mb-6">
                Cada grão que selecionamos é cuidadosamente escolhido de fazendas sustentáveis, e nosso processo de torra é aperfeiçoado para realçar o caráter único de cada variedade. Acreditamos que um bom café é uma forma de arte e estamos dedicados a compartilhar essa arte com nossa comunidade.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                <u>Saiba mais sobre nós</u>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?q=80&w=1740&auto=format&fit=crop" 
                alt="Barista making coffee" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <p className="text-gray-800 font-medium">
                "Acreditamos que cada xícara de café guarda histórias – de amores, sorrisos e despedidas. Entre o aroma e o calor, vivem memórias inesquecíveis."
                </p>
                <p className="text-sm text-primary mt-2">— João, Co-fundador</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
              Por que Nos Escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">A Experiência Café Aroma</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Grãos Premium</h3>
              <p className="text-gray-600">
                Selecionados de fazendas sustentáveis e torrados internamente para um sabor mais fresco.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comida Fresca</h3>
              <p className="text-gray-600">
                Doces e refeições artesanais preparados diariamente com ingredientes locais.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Baristas Especializados</h3>
              <p className="text-gray-600">
                Profissionais habilidosos que se dedicam a criar a xícara perfeita, sempre.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ambiente Aconchegante</h3>
              <p className="text-gray-600">
                Um espaço acolhedor, projetado para conforto, conversa e produtividade.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-coffee-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
              O Que as Pessoas Dizem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Comentários de Clientes</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              text="O melhor café que já experimentei! O ambiente é tão acolhedor, e a equipe é incrivelmente conhecedora sobre o café."
              author="Juliana Silva"
              position="Frequenta regulamente"
              rating={5}
              image="https://randomuser.me/api/portraits/women/40.jpg"
            />
            
            <Testimonial 
              text="Eu venho aqui todas as manhãs antes do trabalho. O espresso deles é perfeito, e os doces estão sempre frescos. Parece uma segunda casa."
              author="Lucas Pereira"
              position="Morador local"
              rating={5}
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            
            <Testimonial 
              text="Ótimo lugar para trabalhar remotamente. O Wi-Fi é confiável, o café não para de chegar e a música ambiente é perfeita para se concentrar."
              author="Jessica Machado"
              position="Desenvolvedora de games "
              rating={4}
              image="https://randomuser.me/api/portraits/women/29.jpg"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1738&auto=format&fit=crop" 
            alt="Coffee shop interior" 
            className="w-full h-full object-cover object-center" 
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-on-scroll">
            Pronto para uma experiência de café excepcional?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg animate-on-scroll">
            Visite-nos hoje e descubra por que nossos clientes continuam voltando. Sua xícara perfeita está te esperando.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
            <Link 
              to="/menu" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-hover"
            >
                Explore Nosso Cardápio
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-hover"
            >
              Encontre Nossa Localização
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;