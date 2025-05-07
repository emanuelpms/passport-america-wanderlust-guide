
import { useState } from 'react';
import { countries } from '@/data/countries';
import CountryCard from '@/components/CountryCard';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import BottomNavigation from '@/components/BottomNavigation';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCountries = searchQuery 
    ? countries.filter(country => 
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : countries;
  
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800" 
          alt="Travel Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-display">
            Passport América
          </h1>
          <p className="text-lg text-white mb-8 max-w-lg">
            Seu guia completo para explorar as maravilhas das Américas
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-md flex">
            <Input
              type="text"
              placeholder="Buscar um país..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/90 text-black border-0 rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="rounded-l-none">
              <Search size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="container-app">
        <h2 className="text-3xl font-bold mb-6">Descubra Destinos</h2>
        
        {filteredCountries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Nenhum país encontrado para "{searchQuery}"</p>
            <Button variant="link" onClick={() => setSearchQuery('')}>
              Limpar busca
            </Button>
          </div>
        ) : (
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
        )}
      </section>
      
      {/* Tips Section */}
      <section className="bg-ocean-dark/10 py-12 mt-12">
        <div className="container-app">
          <h2 className="text-2xl font-bold mb-6">Por que usar o Passport América?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Informações Completas</h3>
              <p className="text-muted-foreground">
                Tudo o que você precisa em um só lugar: documentos, transporte, hospedagem, atrações e mais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Planejamento Fácil</h3>
              <p className="text-muted-foreground">
                Roteiros personalizados baseados no seu perfil, tempo de viagem e orçamento.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Conteúdo Confiável</h3>
              <p className="text-muted-foreground">
                Informações verificadas e atualizadas para garantir a melhor experiência em sua viagem.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Home;
