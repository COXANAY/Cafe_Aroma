
import { useEffect, useRef } from 'react';
import MenuCard from './MenuCard';

const featuredItems = [
  {
    id: 1,
    name: 'Signature Espresso',
    description: 'Nossa mistura exclusiva com notas de chocolate, caramelo e um toque de cítrico.',
    price: 'R$19,00',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop',
    category: 'Cafés',
    bestseller: true
  },
  {
    id: 2,
    name: 'Matcha Latte',
    description: 'Matcha japonês premium batido com leite vaporizado e um toque de mel.',
    price: 'R$ 12,50',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=2071&auto=format&fit=crop',
    category: 'Especialidade',
    bestseller: false
  },
  {
    id: 3,
    name: 'Almond Croissant',
    description: 'Croissant amanteigado recheado com creme de amêndoas e coberto com amêndoas fatiadas.',
    price: 'R$ 17,50',
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1740&auto=format&fit=crop',
    category: 'Confeitaria',
    bestseller: true
  },
  {
    id: 4,
    name: 'Torrada de Abacate',
    description: 'Torrada de pão de fermentação natural coberta com abacate amassado, tomates-cereja e brotos.',
    price: 'R$ 20,50',
    image: 'https://images.unsplash.com/photo-1623691752358-0be1e4235183?q=80&w=1974&auto=format&fit=crop',
    category: 'Comida',
    bestseller: false
  }
];

const FeaturedProducts = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animatedElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
            animatedElements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-wider mb-2">
            Feito com alegria
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Itens em Destaque</h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
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
  );
};

export default FeaturedProducts;