
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Café Aroma</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`navbar-item ${isActive('/') ? 'text-primary' : ''}`}>
              Home
            </Link>
            <Link to="/menu" className={`navbar-item ${isActive('/menu') ? 'text-primary' : ''}`}>
              Cardápio
            </Link>
            <Link to="/about" className={`navbar-item ${isActive('/about') ? 'text-primary' : ''}`}>
              Sobre
            </Link>
            <Link to="/contact" className={`navbar-item ${isActive('/contact') ? 'text-primary' : ''}`}>
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-lg ${isActive('/') ? 'text-primary font-medium' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`text-lg ${isActive('/menu') ? 'text-primary font-medium' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cardápio
            </Link>
            <Link 
              to="/about" 
              className={`text-lg ${isActive('/about') ? 'text-primary font-medium' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre nós
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg ${isActive('/contact') ? 'text-primary font-medium' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;