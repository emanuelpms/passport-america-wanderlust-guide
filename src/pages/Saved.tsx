
import { useState, useEffect } from 'react';
import { Bookmark, Heart, Trash2 } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Types for saved items
interface SavedItem {
  id: string;
  type: 'country' | 'city' | 'attraction';
  name: string;
  imageSrc: string;
  description: string;
  path: string;
}

const Saved = () => {
  // Mock data - in a real app this would be stored in localStorage or a backend
  const [savedItems, setSavedItems] = useState<SavedItem[]>([
    {
      id: 'brazil-1',
      type: 'country',
      name: 'Brasil',
      imageSrc: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
      description: 'País de natureza exuberante, praias paradisíacas e cultura vibrante',
      path: '/country/brazil'
    },
    {
      id: 'peru-1',
      type: 'country',
      name: 'Peru',
      imageSrc: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
      description: 'Lar de Machu Picchu e da antiga civilização Inca',
      path: '/country/peru'
    },
    {
      id: 'cusco-1',
      type: 'city',
      name: 'Cusco',
      imageSrc: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
      description: 'Antiga capital inca e porta de entrada para Machu Picchu',
      path: '/country/peru/city/cusco'
    }
  ]);
  
  const [favorites, setFavorites] = useState<SavedItem[]>([
    {
      id: 'rio-1',
      type: 'city',
      name: 'Rio de Janeiro',
      imageSrc: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
      description: 'Cidade Maravilhosa com praias famosas e o Cristo Redentor',
      path: '/country/brazil/city/rio-de-janeiro'
    }
  ]);
  
  const removeItem = (itemId: string, listType: 'saved' | 'favorites') => {
    if (listType === 'saved') {
      setSavedItems(savedItems.filter(item => item.id !== itemId));
    } else {
      setFavorites(favorites.filter(item => item.id !== itemId));
    }
  };
  
  return (
    <div className="pb-20">
      <PageHeader 
        title="Seus Itens Salvos"
        subtitle="Destinos e atrações que você deseja lembrar"
        showBackButton={false}
      />
      
      <div className="container-app">
        <Tabs defaultValue="saved">
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="saved" className="flex items-center gap-2">
              <Bookmark size={16} />
              <span>Salvos</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart size={16} />
              <span>Favoritos</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="saved">
            {savedItems.length > 0 ? (
              <div className="space-y-4">
                {savedItems.map(item => (
                  <SavedCard 
                    key={item.id} 
                    item={item} 
                    onRemove={() => removeItem(item.id, 'saved')} 
                  />
                ))}
              </div>
            ) : (
              <EmptyState 
                title="Nenhum item salvo" 
                description="Salve destinos, cidades ou atrações para acessá-los facilmente depois." 
                actionLabel="Explorar Destinos"
                actionPath="/explore"
              />
            )}
          </TabsContent>
          
          <TabsContent value="favorites">
            {favorites.length > 0 ? (
              <div className="space-y-4">
                {favorites.map(item => (
                  <SavedCard 
                    key={item.id} 
                    item={item} 
                    onRemove={() => removeItem(item.id, 'favorites')} 
                  />
                ))}
              </div>
            ) : (
              <EmptyState 
                title="Nenhum favorito" 
                description="Adicione destinos aos favoritos para planejar suas próximas viagens." 
                actionLabel="Explorar Destinos"
                actionPath="/explore"
              />
            )}
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

interface SavedCardProps {
  item: SavedItem;
  onRemove: () => void;
}

const SavedCard = ({ item, onRemove }: SavedCardProps) => {
  return (
    <div className="flex border rounded-lg overflow-hidden bg-card transition-shadow hover:shadow-md animate-fade-in">
      <div className="w-1/3 h-auto">
        <img 
          src={item.imageSrc} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-muted-foreground hover:text-passion"
              onClick={onRemove}
            >
              <Trash2 size={16} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.description}</p>
        </div>
        
        <div className="mt-3">
          <Button asChild variant="outline" size="sm">
            <a href={item.path}>Visualizar</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel: string;
  actionPath: string;
}

const EmptyState = ({ title, description, actionLabel, actionPath }: EmptyStateProps) => {
  return (
    <div className="text-center py-16">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button asChild>
        <a href={actionPath}>{actionLabel}</a>
      </Button>
    </div>
  );
};

export default Saved;
