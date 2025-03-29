
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Coffee, Heart, Globe, Award } from 'lucide-react';

const About = () => {
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
      
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-coffee-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2 animate-on-scroll">
              Nossa História
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Sobre o Café Aroma</h1>
            <p className="text-gray-600 animate-on-scroll">
              Descubra a paixão e o compromisso por trás de cada xícara que servimos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Nossa Jornada</h2>
              <p className="text-gray-600 mb-6">
                O Café Aroma nasceu de um amor simples, mas profundo, pelo café. Nossos fundadores, Maria e Daniel, se conheceram enquanto estudavam artes culinárias em Paris e compartilhavam a visão de criar um espaço onde o café não fosse apenas uma bebida, mas uma experiência a ser apreciada.
              </p>
              <p className="text-gray-600 mb-6">
                Depois de anos de treinamento com mestres torrefadores na Colômbia, Etiópia e Indonésia, eles retornaram para casa em 2010 para abrir a primeira unidade do Café Aroma. O que começou como uma pequena loja de esquina cresceu e se tornou um querido ponto de encontro da comunidade, mas nossos princípios fundamentais permanecem inalterados.
              </p>
              <p className="text-gray-600">
                Cada decisão que tomamos — desde a seleção dos grãos até o design do nosso espaço — é guiada pelo nosso compromisso com a qualidade, a sustentabilidade e a criação de momentos de alegria para nossos clientes.
              </p>
            </div>
            
            <div className="relative animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1740&auto=format&fit=crop" 
                alt="Coffee shop founders" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <p className="text-gray-800 font-medium">
                  "Nosso objetivo sempre foi criar não apenas um ótimo café, mas também conexões significativas."
                </p>
                <p className="text-sm text-primary mt-2">— Daniel, Co-fundador</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-20 bg-coffee-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-on-scroll">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
              O que nos motiva
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Nossos Valores Fundamentais</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualidade sem Compromisso</h3>
              <p className="text-gray-600">
                Selecionamos apenas os melhores grãos e ingredientes, mantendo padrões rigorosos em cada etapa da preparação. Acreditamos que um café excepcional exige um cuidado excepcional.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary"/>
              </div>
              <h3 className="text-xl font-bold mb-3">Conexão com a Comunidade</h3>
              <p className="text-gray-600">
                Nosso café é mais do que um negócio — é um local de encontro onde as relações florescem. Nos esforçamos para criar um ambiente onde todos se sintam bem-vindos e valorizados.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Responsabilidade Ambiental</h3>
              <p className="text-gray-600">
                Desde nossa embalagem ecológica até nossas parcerias com fazendas sustentáveis, estamos comprometidos em minimizar nosso impacto ambiental e preservar o planeta para as futuras gerações.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inovação Contínua</h3>
              <p className="text-gray-600">
                Enquanto honramos os métodos tradicionais, abraçamos a inovação e a criatividade. Estamos constantemente explorando novas técnicas e sabores para aprimorar a experiência do café.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-on-scroll">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
              As Pessoas Por Trás da Xícara
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Conheça Nossa Equipe</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6">
              Nossa equipe apaixonada de especialistas em café e entusiastas da gastronomia faz do Café Aroma o que ele é hoje.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop" 
                  alt="Maria Rodriguez" 
                  className="w-full h-auto aspect-square object-cover img-hover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">Maria Rodriguez</h3>
                <p className="text-primary">Co-fundadora e Mestre Torrefadora</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1587&auto=format&fit=crop" 
                  alt="Daniel Chen" 
                  className="w-full h-auto aspect-square object-cover img-hover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">Daniel Chen</h3>
                <p className="text-primary">Co-fundador e Chef Executivo</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop" 
                  alt="Sophia Kim" 
                  className="w-full h-auto aspect-square object-cover img-hover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">Sophia Kim</h3>
                <p className="text-primary">Barista Chefe</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
                  alt="Marcus Johnson" 
                  className="w-full h-auto aspect-square object-cover img-hover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">Marcus Johnson</h3>
                <p className="text-primary">Confeiteiro Chefe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability */}
      <section className="py-20 bg-coffee-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1532456745301-b2c645d8b80d?q=80&w=1629&auto=format&fit=crop" 
                alt="Coffee farmer" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="animate-on-scroll">
              <span className="inline-block bg-primary/20 text-primary-foreground font-medium text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                Nosso Compromisso
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Sustentabilidade Importa</h2>
              <p className="text-coffee-100 mb-6">
                No Café Aroma, a sustentabilidade não é apenas uma palavra da moda — é uma parte fundamental do nosso modelo de negócios. Acreditamos que um ótimo café deve ser bom tanto para as pessoas quanto para o planeta.
              </p>
              <p className="text-coffee-100 mb-6">
                Trabalhamos diretamente com pequenos agricultores que utilizam práticas de cultivo sustentáveis, garantindo que recebam uma compensação justa pelos seus grãos excepcionais. Essa relação de comércio direto nos permite manter a qualidade enquanto apoiamos as comunidades agrícolas.
              </p>
              <p className="text-coffee-100">
                Nosso compromisso se estende às operações do nosso café, onde usamos embalagens biodegradáveis, implementamos medidas de conservação de água e minimizamos o desperdício de alimentos por meio de um planejamento cuidadoso e iniciativas de compostagem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;