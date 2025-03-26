
import { useState } from 'react';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  bestseller?: boolean;
}

const MenuCard = ({ name, description, price, image, category, bestseller }: MenuCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="menu-card group animate-on-scroll"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-52">
        <img 
          src={image} 
          alt={name} 
          className={`w-full h-full object-cover img-hover ${isHovered ? 'scale-105' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className="text-xs uppercase tracking-wider bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
        {bestseller && (
          <div className="absolute top-4 right-4">
            <span className="text-xs uppercase tracking-wider bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full">
              Bestseller
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5 bg-white">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium">{name}</h3>
          <span className="text-primary font-medium">{price}</span>
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;