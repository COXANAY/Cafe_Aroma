import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Café Aroma</h3>
            <p className="text-coffee-100 max-w-xs">
              Crafting exceptional coffee experiences since 2010. Every cup tells a story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-coffee-200 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-coffee-200 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-coffee-200 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-coffee-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-coffee-100 hover:text-white transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/about" className="text-coffee-100 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-coffee-100 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Opening Hours</h4>
            <ul className="space-y-2 text-coffee-100">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Contact Us</h4>
            <ul className="space-y-3 text-coffee-100">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coffee-200 shrink-0 mt-0.5" />
                <span>123 Coffee Street, Brew City, BC 10101</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-200 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-200 shrink-0" />
                <span>info@cafearoma.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-100 text-sm">
            &copy; {currentYear} Café Aroma. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-coffee-100">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;