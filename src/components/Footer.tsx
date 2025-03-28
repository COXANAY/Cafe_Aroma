import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Café Aroma</h3>
            <p className="text-coffee-100 max-w-xs">
              Criando experiências excepcionais com café desde 2010. Cada xícara conta uma história.
            </p>
            <div className="flex space-x-4">
            <a target='_blank' href="https://github.com/COXANAY" className="w-10 h-10 rounded-full bg-portfolio-green/10 dark:bg-portfolio-green/20 flex items-center justify-center text-portfolio-green hover:bg-portfolio-green hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/jo%C3%A3o-emanuel-silva-neri-32ab5b321/" className="w-10 h-10 rounded-full bg-portfolio-green/10 dark:bg-portfolio-green/20 flex items-center justify-center text-portfolio-green hover:bg-portfolio-green hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a target='_blank' href="https://www.instagram.com/jaozox/" className="w-10 h-10 rounded-full bg-portfolio-green/10 dark:bg-portfolio-green/20 flex items-center justify-center text-portfolio-green hover:bg-portfolio-green hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Atalhos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-coffee-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="text-coffee-100 hover:text-white transition-colors">Cardápio</Link>
              </li>
              <li>
                <Link to="/about" className="text-coffee-100 hover:text-white transition-colors">Sobre nós</Link>
              </li>
              <li>
                <Link to="/contact" className="text-coffee-100 hover:text-white transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Horário de funcionamento</h4>
            <ul className="space-y-2 text-coffee-100">
              <li className="flex justify-between">
                <span>Segunda a sexta-feira</span>
                <span>07:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado</span>
                <span>08:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo</span>
                <span>08:00 - 18:00</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-medium">Contact Us</h4>
            <ul className="space-y-3 text-coffee-100">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-coffee-200 shrink-0 mt-0.5" />
                <span>Rua 15 de Novembro, 789 Centro, Jaraguá do Sul - SC<br/> CEP: 89251-100</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-coffee-200 shrink-0" />
                <span><a href="https://wa.me/5568999248990?text=Olá%2C%20gostaria%20de%20mais%20informações!" target="_blank">(68) 99924-8990</a></span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-coffee-200 shrink-0" />
                <span><a href="mailto:joaoemanuelsilvaneri2005@gmail.com">joaoemanuelsilvaneri2005@gmail.com</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coffee-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-coffee-100 text-sm">
            &copy; {currentYear} Café Aroma. Desenvolvido por (João Emanuel Silva Neri) Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-coffee-100">
            <a href="#" className="hover:text-white transition-colors">Política de privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;