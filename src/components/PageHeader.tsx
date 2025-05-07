
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  className?: string;
  imageUrl?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  showBackButton = true, 
  className,
  imageUrl
}: PageHeaderProps) => {
  const navigate = useNavigate();
  
  if (imageUrl) {
    return (
      <div className={cn("relative w-full", className)}>
        <div className="relative h-64 w-full overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-pattern"></div>
          
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            {subtitle && (
              <p className="text-sm text-gray-100 mt-1 max-w-xl">{subtitle}</p>
            )}
          </div>
          
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)}
              className="absolute top-6 left-6 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("py-6", className)}>
      <div className="container-app flex flex-col">
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)} 
            className="mb-2 flex items-center text-ocean hover:underline"
            aria-label="Go back"
          >
            <ArrowLeft size={16} className="mr-1" />
            <span>Back</span>
          </button>
        )}
        
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHeader;
