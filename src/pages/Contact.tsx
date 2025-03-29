
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-coffee-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2 animate-on-scroll">
              Entre em Contato
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Fale Conosco</h1>
            <p className="text-gray-600 animate-on-scroll">
              Adoraríamos ouvir de você. Entre em contato para perguntas, feedback ou apenas para dizer oi.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nossa Localização</h3>
              <p className="text-gray-600">
                R. Florianópolis,Centro Jaraguá do Sul - SC
                <br />
                CEP: 89251-790
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-600">
                <a href="https://wa.me/5568999248990?text=Olá%2C%20gostaria%20de%20mais%20informações!" className="hover:text-primary transition-colors">
                  (68) 99924-8990
                </a>
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-x1 font-bold mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:joaoemanuelsilvaneri2005@gmail.com" className="hover:text-primary transition-colors">
                  joaoemanuelsilvaneri2005@gmail.com
                </a>
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Horário</h3>
              <p className="text-gray-600">
                Seg-Sex: 07:00 - 20:00<br />
                Sab: 08:00 - 21:00<br />
                Dom: 08:00 - 18:00
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Encontre-nos</h2>
              <div className="rounded-lg overflow-hidden shadow-sm h-[450px] bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14284.327571497935!2d-49.09973351810207!3d-26.48530797162715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de95051d78f7c9%3A0x2796fa9cbcd7438a!2sCentro%2C%20Jaragu%C3%A1%20do%20Sul%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1743228938444!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Map"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Endereço de email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Seu Email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Assunto"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                    placeholder="Sua Mensagem..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full flex items-center justify-center btn-hover"
                >
                  {isSubmitting ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                  ) : (
                    <Send className="h-5 w-5 mr-2" />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-coffee-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16 animate-on-scroll">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Perguntas Mais Frequentes</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll">
                <h3 className="text-xl font-bold mb-2">Vocês oferecem Wi-Fi?</h3>
                <p className="text-gray-600">
                Sim, oferecemos Wi-Fi gratuito de alta velocidade para todos os nossos clientes. Basta pedir à nossa equipe a senha atual.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll">
                <h3 className="text-xl font-bold mb-2">Posso fazer uma reserva?</h3>
                <p className="text-gray-600">
                  Para grupos de 6 ou mais pessoas, recomendamos fazer uma reserva para garantir que possamos acomodar todos. Por favor, ligue para (68) 99924-8990 para reservar uma mesa.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll">
                <h3 className="text-xl font-bold mb-2">Vocês têm assentos ao ar livre?</h3>
                <p className="text-gray-600">
                  Sim, temos uma linda área externa que fica aberta durante a primavera e o verão, dependendo das condições climáticas.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll">
                <h3 className="text-xl font-bold mb-2">Vocês vendem grãos para levar para casa?</h3>
                <p className="text-gray-600">
                  Com certeza! Vendemos nossa mistura da casa e grãos de origem única em sacos de 340g. Nossa equipe também pode moer os grãos de acordo com sua preferência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;