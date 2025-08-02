
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
  features: string[];
  icon?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  gradient?: string;
}

const ProductCard = ({
  title,
  description,
  image,
  features,
  icon,
  linkText = "Learn More",
  linkHref = "#",
  gradient = "bg-gradient-to-r from-fintech-purple to-fintech-blue"
}: ProductCardProps) => {
  return (
    <div className={`glass-card p-6 rounded-xl group transition-all duration-300 hover:-translate-y-2 border border-gray-100 shadow-sm hover:shadow-lg h-full flex flex-col justify-between`}>
      <div>
        {image ? (
          <div className="w-14 h-14 rounded-xl mb-4 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : icon ? (
          <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${gradient} text-white`}>
            {icon}
          </div>
        ) : null}
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className={`rounded-full p-1 mt-0.5 ${gradient}`}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="bg-fintech-green">
                  <circle cx="4" cy="4" r="4" fill="white" />
                </svg>
              </span>
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <a href={linkHref} className="inline-flex items-center text-sm font-medium text-fintech-green hover:text-fintech-green/90 transition-colors group-hover:underline">
        {linkText}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ProductCard;
