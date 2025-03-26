
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
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Passion for Perfect Coffee</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Café Aroma began with a simple mission: to serve exceptional coffee in a space that feels like home. Our founders, Maria and Daniel, traveled the world studying coffee cultivation and roasting techniques before bringing their expertise back to create something special.
              </p>
              <p className="text-gray-600 mb-6">
                Every bean we source is carefully selected from sustainable farms, and our roasting process is perfected to bring out the unique character of each variety. We believe that great coffee is an art form, and we're dedicated to sharing that art with our community.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more about us
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
                  "We believe every cup of coffee tells a story, and we're here to make it a great one."
                </p>
                <p className="text-sm text-primary mt-2">— Maria, Co-founder</p>
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
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">The Café Aroma Experience</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Beans</h3>
              <p className="text-gray-600">
                Sourced from sustainable farms and roasted in-house for the freshest flavor.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fresh Food</h3>
              <p className="text-gray-600">
                Handcrafted pastries and meals made daily with locally-sourced ingredients.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Baristas</h3>
              <p className="text-gray-600">
                Skilled professionals who take pride in crafting the perfect cup, every time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cozy Atmosphere</h3>
              <p className="text-gray-600">
                A welcoming space designed for comfort, conversation, and productivity.
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
              What People Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Customer Reviews</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              text="The best coffee I've ever had! The atmosphere is so inviting, and the staff is incredibly knowledgeable about their coffee."
              author="Sarah Johnson"
              position="Regular Customer"
              rating={5}
              image="https://randomuser.me/api/portraits/women/40.jpg"
            />
            
            <Testimonial 
              text="I come here every morning before work. Their espresso is perfect, and their pastries are always fresh. Feels like a second home."
              author="Michael Chen"
              position="Local Resident"
              rating={5}
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            
            <Testimonial 
              text="Great place to work remotely. The WiFi is reliable, the coffee keeps flowing, and the ambient music is just right for focusing."
              author="Jessica Park"
              position="Freelance Designer"
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
            Ready for an exceptional coffee experience?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg animate-on-scroll">
            Visit us today and discover why our customers keep coming back. Your perfect cup is waiting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
            <Link 
              to="/menu" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-hover"
            >
              Explore Our Menu
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-medium transition-all duration-300 btn-hover"
            >
              Find Our Location
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;