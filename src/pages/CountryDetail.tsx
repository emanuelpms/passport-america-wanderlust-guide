
import { useParams } from 'react-router-dom';
import { countries } from '@/data/countries';
import { cities } from '@/data/cities';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Compass, Map, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import CityCard from '@/components/CityCard';
import { Alert, AlertDescription } from '@/components/ui/alert';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CountryDetail = () => {
  const { countryId } = useParams<{ countryId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  
  const country = countries.find(c => c.id === countryId);
  const countryCities = cities.filter(city => city.countryId === countryId);
  
  if (!country) {
    return (
      <div className="container-app">
        <Alert className="bg-passion-light/20 border-passion">
          <AlertDescription>
            País não encontrado. Por favor, verifique o URL ou retorne para a página inicial.
          </AlertDescription>
        </Alert>
        <div className="text-center my-8">
          <Button onClick={() => navigate('/')}>
            Voltar para a página inicial
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pb-20">
      <PageHeader 
        title={country.name}
        subtitle={country.description}
        imageUrl={country.imageSrc}
      />
      
      <Tabs 
        defaultValue="overview" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="container-app"
      >
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="entry">Entrada</TabsTrigger>
          <TabsTrigger value="cities">Cidades</TabsTrigger>
          <TabsTrigger value="travel">Como Chegar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="tab-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Sobre {country.name}</h2>
                <p className="text-base text-muted-foreground">{country.longDescription}</p>
              </div>
              
              {countryCities.length > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Principais Cidades</h3>
                    <Button 
                      variant="link" 
                      onClick={() => setActiveTab('cities')}
                      className="flex items-center text-ocean"
                    >
                      Ver todas <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {countryCities.slice(0, 2).map((city) => (
                      <CityCard
                        key={city.id}
                        id={city.id}
                        countryId={country.id}
                        name={city.name}
                        imageSrc={city.imageSrc}
                        description={city.description}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Informações Básicas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin size={20} className="mr-3 text-ocean flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium block">Capital:</span>
                      <span className="text-muted-foreground">{country.capital}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar size={20} className="mr-3 text-ocean flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium block">Melhor época para visitar:</span>
                      <span className="text-muted-foreground">{country.travelInfo.bestTimeToVisit}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Compass size={20} className="mr-3 text-ocean flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium block">Idioma:</span>
                      <span className="text-muted-foreground">{country.language}</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Map size={20} className="mr-3 text-ocean flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium block">Moeda:</span>
                      <span className="text-muted-foreground">{country.currency}</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              {country.flagSrc && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bandeira</h3>
                  <img 
                    src={country.flagSrc} 
                    alt={`Bandeira de ${country.name}`}
                    className="w-full h-auto rounded-md border"
                  />
                </div>
              )}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="entry" className="tab-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Requisitos de Entrada</h2>
                
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Documentos Necessários</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className={`w-5 h-5 rounded-full mr-3 ${country.entryRequirements.passport ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span>Passaporte</span>
                    </li>
                    <li className="flex items-center">
                      <div className={`w-5 h-5 rounded-full mr-3 ${country.entryRequirements.visa ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span>Visto</span>
                    </li>
                    {country.entryRequirements.otherDocuments.map((doc, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-blue-500 mr-3"></div>
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Vacinas</h3>
                {country.entryRequirements.vaccines.length > 0 ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {country.entryRequirements.vaccines.map((vaccine, index) => (
                      <li key={index}>{vaccine}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">Não há requisitos específicos de vacinação para entrada neste país.</p>
                )}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Informações Práticas</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="font-medium block">Fuso Horário:</span>
                    <span className="text-muted-foreground">{country.travelInfo.timeZone}</span>
                  </li>
                  <li>
                    <span className="font-medium block">Tomadas elétricas:</span>
                    <span className="text-muted-foreground">{country.travelInfo.electricalOutlet}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Dicas de Comunicação</h3>
                <p className="text-muted-foreground">
                  O idioma oficial é o {country.language}. Em áreas turísticas, você encontrará pessoas que falam inglês, mas é sempre bom aprender algumas frases básicas no idioma local.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="cities" className="tab-content">
          <h2 className="text-2xl font-bold mb-6">Cidades para Visitar em {country.name}</h2>
          
          {countryCities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryCities.map((city) => (
                <CityCard
                  key={city.id}
                  id={city.id}
                  countryId={country.id}
                  name={city.name}
                  imageSrc={city.imageSrc}
                  description={city.description}
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Não há informações sobre cidades para este país ainda. Estamos trabalhando nisso!
            </p>
          )}
        </TabsContent>
        
        <TabsContent value="travel" className="tab-content">
          <h2 className="text-2xl font-bold mb-6">Como Chegar e Circular em {country.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Chegando ao País</h3>
              <p className="text-muted-foreground mb-4">
                A maioria dos visitantes chega através de voos internacionais para as principais cidades. 
                Para brasileiros, existem diversas opções de voos diretos ou com conexões.
              </p>
              
              <h4 className="font-medium text-lg mt-6 mb-3">Principais Companhias Aéreas</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Companhias locais</li>
                <li>LATAM</li>
                <li>GOL</li>
                <li>Azul</li>
                <li>Aerolíneas Argentinas</li>
                <li>Copa Airlines</li>
                <li>Avianca</li>
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Transporte Local</h3>
              <p className="text-muted-foreground mb-4">
                Existem várias opções para se locomover dentro do país:
              </p>
              
              <h4 className="font-medium text-lg mt-4 mb-3">Meios de Transporte</h4>
              <ul className="space-y-3">
                {country.travelInfo.localTransportation.map((transport, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-sunset rounded-full mr-3"></div>
                    <span>{transport}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <h4 className="font-medium text-lg mb-3">Dicas para Turistas</h4>
                <p className="text-muted-foreground">
                  Em muitas cidades turísticas, aplicativos de transporte como Uber são uma opção conveniente e geralmente mais segura que táxis não oficiais.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <BottomNavigation />
    </div>
  );
};

export default CountryDetail;
