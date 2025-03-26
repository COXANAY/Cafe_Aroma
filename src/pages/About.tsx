
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
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">About Café Aroma</h1>
            <p className="text-gray-600 animate-on-scroll">
              Discover the passion and commitment behind every cup we serve.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-6">
                Café Aroma was born from a simple yet profound love for coffee. Our founders, Maria and Daniel, met while studying culinary arts in Paris and shared a vision of creating a space where coffee wasn't just a beverage, but an experience to be savored.
              </p>
              <p className="text-gray-600 mb-6">
                After years of training with master roasters across Colombia, Ethiopia, and Indonesia, they returned home in 2010 to open the first Café Aroma location. What began as a small corner shop has grown into a beloved community gathering place, but our founding principles remain unchanged.
              </p>
              <p className="text-gray-600">
                Every decision we make—from sourcing our beans to designing our space—is guided by our commitment to quality, sustainability, and creating moments of joy for our customers.
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
                  "Our goal has always been to create not just great coffee, but meaningful connections."
                </p>
                <p className="text-sm text-primary mt-2">— Daniel, Co-founder</p>
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
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Without Compromise</h3>
              <p className="text-gray-600">
                We source only the finest beans and ingredients, maintaining rigorous standards at every step of preparation. We believe that exceptional coffee requires exceptional care.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Connection</h3>
              <p className="text-gray-600">
                Our café is more than a business—it's a gathering place where relationships flourish. We strive to create an environment where everyone feels welcome and valued.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Responsibility</h3>
              <p className="text-gray-600">
                From our eco-friendly packaging to our relationships with sustainable farms, we're committed to minimizing our environmental footprint and preserving the planet for future generations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Continuous Innovation</h3>
              <p className="text-gray-600">
                While honoring traditional methods, we embrace innovation and creativity. We're constantly exploring new techniques and flavors to enhance the coffee experience.
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
              The People Behind the Cup
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
            <p className="text-gray-600 mt-6">
              Our passionate team of coffee experts and food enthusiasts make Café Aroma what it is today.
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
                <p className="text-primary">Co-founder & Master Roaster</p>
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
                <p className="text-primary">Co-founder & Head Chef</p>
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
                <p className="text-primary">Head Barista</p>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1667149667701-e706a627bb10?q=80&w=1587&auto=format&fit=crop" 
                  alt="Marcus Johnson" 
                  className="w-full h-auto aspect-square object-cover img-hover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">Marcus Johnson</h3>
                <p className="text-primary">Pastry Chef</p>
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
                Our Commitment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainability Matters</h2>
              <p className="text-coffee-100 mb-6">
                At Café Aroma, sustainability isn't just a buzzword—it's a core part of our business model. We believe that great coffee should be good for both people and the planet.
              </p>
              <p className="text-coffee-100 mb-6">
                We work directly with small-scale farmers who use sustainable growing practices, ensuring they receive fair compensation for their exceptional beans. This direct trade relationship allows us to maintain quality while supporting farming communities.
              </p>
              <p className="text-coffee-100">
                Our commitment extends to our café operations, where we use biodegradable packaging, implement water conservation measures, and minimize food waste through careful planning and composting initiatives.
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