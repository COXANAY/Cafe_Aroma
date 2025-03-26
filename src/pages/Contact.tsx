
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
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Contact Us</h1>
            <p className="text-gray-600 animate-on-scroll">
              We'd love to hear from you. Reach out with questions, feedback, or just to say hello.
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
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Coffee Street<br />
                Brew City, BC 10101
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600">
                <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:info@cafearoma.com" className="hover:text-primary transition-colors">
                  info@cafearoma.com
                </a>
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center animate-on-scroll">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <p className="text-gray-600">
                Mon-Fri: 7AM - 8PM<br />
                Sat: 8AM - 9PM<br />
                Sun: 8AM - 6PM
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="animate-on-scroll">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-sm h-[450px] bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937554!2d2.2922926156742855!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1621543061246!5m2!1sen!2sus" 
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
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                    placeholder="Your message"
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
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll">
                <h3 className="text-xl font-bold mb-2">Do you offer WiFi?</h3>
                <p className="text-gray-600">
                  Yes, we provide free high-speed WiFi for all our customers. Simply ask any of our staff for the current password.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll">
                <h3 className="text-xl font-bold mb-2">Can I make a reservation?</h3>
                <p className="text-gray-600">
                  For groups of 6 or more, we recommend making a reservation to ensure we can accommodate your party. Please call us at (555) 123-4567 to reserve a table.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll">
                <h3 className="text-xl font-bold mb-2">Do you have outdoor seating?</h3>
                <p className="text-gray-600">
                  Yes, we have a beautiful patio area that's open during spring and summer months, weather permitting.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 animate-on-scroll">
                <h3 className="text-xl font-bold mb-2">Do you sell beans to take home?</h3>
                <p className="text-gray-600">
                  Absolutely! We sell our house blend and single-origin beans in 12oz bags. Our staff can also grind the beans according to your preference.
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