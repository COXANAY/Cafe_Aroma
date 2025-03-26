
import { useEffect, useRef } from 'react';
import MenuCard from './MenuCard';

const featuredItems = [
  {
    id: 1,
    name: 'Signature Espresso',
    description: 'Our house blend with notes of chocolate, caramel, and a hint of citrus.',
    price: '$4.50',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop',
    category: 'Coffee',
    bestseller: true
  },
  {
    id: 2,
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha whisked with steamed milk and a touch of honey.',
    price: '$5.25',
    image: 'https://images.unsplash.com/photo-1536677177614-9e9bb56d02b9?q=80&w=1740&auto=format&fit=crop',
    category: 'Specialty',
    bestseller: false
  },
  {
    id: 3,
    name: 'Almond Croissant',
    description: 'Buttery layered pastry filled with rich almond cream and topped with sliced almonds.',
    price: '$4.75',
    image: 'https://images.unsplash.com/photo-1623334044303-241021148842?q=80&w=1740&auto=format&fit=crop',
    category: 'Pastry',
    bestseller: true
  },
  {
    id: 4,
    name: 'Avocado Toast',
    description: 'Sourdough toast topped with smashed avocado, cherry tomatoes, and microgreens.',
    price: '$8.95',
    image: 'https://images.unsplash.com/photo-1603046891744-8888bc041c65?q=80&w=1615&auto=format&fit=crop',
    category: 'Food',
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
            Crafted with passion
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Our Featured Items</h2>
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