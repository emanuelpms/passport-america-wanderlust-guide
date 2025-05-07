
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CityCardProps {
  id: string;
  countryId: string;
  name: string;
  imageSrc: string;
  description: string;
  className?: string;
}

const CityCard = ({ 
  id, 
  countryId, 
  name, 
  imageSrc, 
  description, 
  className 
}: CityCardProps) => {
  return (
    <Link 
      to={`/country/${countryId}/city/${id}`} 
      className={cn("card-destination block", className)}
    >
      <img 
        src={imageSrc} 
        alt={name} 
        className="card-image"
      />
      <div className="card-content">
        <h3 className="text-xl font-semibold font-display">{name}</h3>
        <p className="text-xs text-gray-100 line-clamp-2 mt-1">{description}</p>
      </div>
    </Link>
  );
};

export default CityCard;
