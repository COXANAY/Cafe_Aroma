import { Star } from 'lucide-react';

interface TestimonialProps {
  text: string;
  author: string;
  position?: string;
  rating: number;
  image?: string;
}

const Testimonial = ({ text, author, position, rating, image }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 animate-on-scroll">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic mb-6">"{text}"</p>
      
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-medium text-gray-900">{author}</h4>
          {position && <p className="text-sm text-gray-500">{position}</p>}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;