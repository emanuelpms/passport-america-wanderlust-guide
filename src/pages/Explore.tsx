
import { useState } from 'react';
import { countries } from '@/data/countries';
import { Map, Filter } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import CountryCard from '@/components/CountryCard';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState('nameAsc');
  
  // Filter logic
  let filteredCountries = countries;
  
  if (searchQuery) {
    filteredCountries = filteredCountries.filter(country => 
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  
  if (selectedRegions.length) {
    // In a real app you'd have region data - this is just a placeholder
    // For now, we'll just show all countries regardless of selection
  }
  
  // Sort logic
  if (sortOrder === 'nameAsc') {
    filteredCountries = [...filteredCountries].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'nameDesc') {
    filteredCountries = [...filteredCountries].sort((a, b) => b.name.localeCompare(a.name));
  }
  
  return (
    <div className="pb-20">
      <PageHeader 
        title="Explore Destinos"
        subtitle="Descubra países fascinantes nas Américas para sua próxima viagem"
        showBackButton={false}
      />
      
      <div className="container-app space-y-6">
        {/* Search and Filter Bar */}
        <div className="flex flex-col space-y-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Buscar países..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-muted pr-10"
              />
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${!searchQuery && 'hidden'}`}
              >
                &times;
              </button>
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setFilterVisible(!filterVisible)}
              className={filterVisible ? "bg-muted" : ""}
            >
              <Filter size={18} />
            </Button>
            
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-auto">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nameAsc">A-Z</SelectItem>
                <SelectItem value="nameDesc">Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filterVisible && (
            <div className="bg-muted p-4 rounded-lg space-y-4 animate-fade-in">
              <h3 className="font-medium">Filtrar por região</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {['América do Sul', 'América Central', 'América do Norte', 'Caribe'].map(region => (
                  <div key={region} className="flex items-center space-x-2">
                    <Checkbox 
                      id={region}
                      checked={selectedRegions.includes(region)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedRegions([...selectedRegions, region]);
                        } else {
                          setSelectedRegions(selectedRegions.filter(r => r !== region));
                        }
                      }}
                    />
                    <Label htmlFor={region}>{region}</Label>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    setSelectedRegions([]);
                  }}
                >
                  Limpar
                </Button>
                
                <Button 
                  size="sm"
                  onClick={() => setFilterVisible(false)}
                >
                  Aplicar
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground">
              {filteredCountries.length} {filteredCountries.length === 1 ? 'país encontrado' : 'países encontrados'}
            </h2>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Map size={16} />
              <span>Ver no mapa</span>
            </Button>
          </div>
          
          {filteredCountries.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCountries.map((country) => (
                <CountryCard
                  key={country.id}
                  id={country.id}
                  name={country.name}
                  imageSrc={country.imageSrc}
                  description={country.description}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Nenhum país corresponde aos seus filtros</p>
              <Button variant="link" onClick={() => {
                setSearchQuery('');
                setSelectedRegions([]);
              }}>
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Explore;
