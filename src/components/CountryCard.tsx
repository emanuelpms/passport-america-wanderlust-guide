
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CountryCardProps {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  className?: string;
}

const CountryCard = ({ id, name, imageSrc, description, className }: CountryCardProps) => {
  return (
    <Link to={`/country/${id}`} className={cn("card-destination block", className)}>
      <img 
        src={imageSrc} 
        alt={name} 
        className="card-image"
      />
      <div className="card-content">
        <h3 className="text-2xl font-semibold font-display">{name}</h3>
        <p className="text-sm text-gray-100 line-clamp-2 mt-1">{description}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
