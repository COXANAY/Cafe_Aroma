
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuCard from '../components/MenuCard';

// Menu data
const menuItems = [
  // Cafés
  {
    id: 1,
    name: 'Espresso',
    description: 'Um espresso, um café concentrado servido em uma xícara pequena.',
    price: 'R$ 4,00',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=1635&auto=format&fit=crop',
    category: 'Cafés',
    bestseller: false
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Partes iguais de espresso, leite vaporizado e espuma de leite.',
    price: 'R$ 8,00',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1587&auto=format&fit=crop',
    category: 'Cafés',
    bestseller: true
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Espresso com leite vaporizado e uma camada fina de espuma.',
    price: 'R$ 8,50',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=1635&auto=format&fit=crop',
    category: 'Cafés',
    bestseller: false
  },
  {
    id: 4,
    name: 'Café Americano',
    description: 'Espresso diluído com água quente.',
    price: 'R$ 6,00',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1587&auto=format&fit=crop',
    category: 'Cafés',
    bestseller: false
  },
  {
    id: 5,
    name: 'Café Cold Brew',
    description: 'Café preparado com água fria durante várias horas.',
    price: 'R$ 12,00',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1587&auto=format&fit=crop',
    category: 'Cafés',
    bestseller: true
  },

  // Drinks Especiais
  {
    id: 6,
    name: 'Caramel Macchiato',
    description: 'Espresso com xarope de baunilha, leite vaporizado e calda de caramelo.',
    price: 'R$ 12,50',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1740&auto=format&fit=crop',
    category: 'Especialidade',
    bestseller: true
  },
  {
    id: 7,
    name: 'Matcha Latte',
    description: 'Matcha japonês premium batido com leite vaporizado e um toque de mel.',
    price: 'R$ 12,50',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2071&auto=format&fit=crop',
    category: 'Especialidade',
    bestseller: false
  },
  {
    id: 8,
    name: 'Chai Latte',
    description: 'Chá preto infundido com especiarias e leite vaporizado.',
    price: 'R$ 22,50', // valor fixo
    image: 'https://images.unsplash.com/photo-1545408074-076d7582081e?q=80&w=1935&auto=format&fit=crop',
    category: 'Especialidade',
    bestseller: false
  },

  //Confeitaria
  {
    id: 9,
    name: 'Croissant',
    description: 'Croissant clássico francês, amanteigado e com textura folhada.',
    price: 'R$ 14,00', // valor fixo
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1726&auto=format&fit=crop',
    category: 'Confeitaria',
    bestseller: false
  },
  {
    id: 10,
    name: 'Almond Croissant',
    description: 'Croissant amanteigado recheado com creme de amêndoas e coberto com amêndoas fatiadas.',
    price: 'R$ 17,50', // valor fixo
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1740&auto=format&fit=crop',
    category: 'Confeitaria',
    bestseller: true
  },
  {
    id: 11,
    name: 'Chocolate Muffin',
    description: 'Muffin de chocolate rico com pedaços de chocolate.',
    price: 'R$ 14,00', // valor fixo
    image: 'https://images.unsplash.com/photo-1553993818-564c60f8e705?q=80&w=2070&auto=format&fit=crop',
    category: 'Confeitaria',
    bestseller: false
  },

  //Comida
  {
    id: 12,
    name: 'Torrada de Abacate',
    description: 'Torrada de pão de fermentação natural coberta com abacate amassado, tomates-cereja e brotos.',
    price: 'R$ 20,50', // valor fixo
    image: 'https://images.unsplash.com/photo-1623691752358-0be1e4235183?q=80&w=1974&auto=format&fit=crop',
    category: 'Comida',
    bestseller: true
  },
  {
    id: 13,
    name: 'Chicken Pesto Panini',
    description: 'Sanduíche grelhado com frango, pesto, mozzarella e tomates secos.',
    price: 'R$ 30,00', // valor fixo
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=1740&auto=format&fit=crop',
    category: 'Comida',
    bestseller: false
  },
  {
    id: 14,
    name: 'Quinoa Salad Bowl',
    description: 'Folhas verdes frescas com quinoa, legumes assados e vinagrete de limão.',
    price: 'R$ 40,00', // valor fixo
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1740&auto=format&fit=crop',
    category: 'Comida',
    bestseller: false
  }
];


const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [filteredItems, setFilteredItems] = useState(menuItems);
  
  const categories = ['Todos', 'Cafés', 'Especialidade', 'Confeitaria', 'Comida'];
  
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
  
  useEffect(() => {
    if (activeCategory === 'Todos') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <div className="page-transition">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-coffee-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2 animate-on-scroll">
              Descubra Nossas Ofertas
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">Nosso cardápio</h1>
            <p className="text-gray-600 animate-on-scroll">
              Explore nossa seleção cuidadosamente curada de cafés, bebidas especiais, doces e pratos. Cada item é feito com os melhores ingredientes e atenção aos detalhes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Menu Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-on-scroll">
            {categories.map(category => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map(item => (
              <MenuCard 
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={item.category}
                bestseller={item.bestseller}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Dietary Section */}
      <section className="py-20 bg-coffee-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-4">Opções Dietéticas Especiais</h2>
            <p className="text-gray-600">
              Entendemos que muitos dos nossos clientes têm necessidades dietéticas específicas. Estamos felizes em oferecer uma variedade de opções para atender a diferentes preferências.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm text-center animate-on-scroll">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl font-bold">V</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Vegetariano</h3>
              <p className="text-gray-600">
                Oferecemos uma variedade de opções vegetarianas e podemos modificar muitos itens do menu para serem vegetarianos
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center animate-on-scroll">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">SG</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sem Glúten</h3>
              <p className="text-gray-600">
                Vários dos nossos pratos são sem glúten, e podemos preparar a maioria das bebidas sem glúten.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm text-center animate-on-scroll">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl font-bold">SL</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sem Lactose</h3>
              <p className="text-gray-600">
                Oferecemos opções de leites alternativos, como aveia, amêndoa e soja, para qualquer bebida do nosso menu.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-coffee-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Quer fazer uma reserva?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-coffee-100 animate-on-scroll">
            Para grupos de 6 ou mais pessoas, recomendamos fazer uma reserva para garantir que possamos acomodar todos.
          </p>
          <a 
            href="tel:+15551234567" 
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 animate-on-scroll btn-hover"
          >
            WhatsApp (68) 99924-8990
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Menu;