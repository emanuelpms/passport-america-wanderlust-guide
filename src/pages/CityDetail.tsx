
import { useParams } from 'react-router-dom';
import { countries } from '@/data/countries';
import { cities } from '@/data/cities';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHeader from '@/components/PageHeader';
import { Alert, AlertDescription } from '@/components/ui/alert';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Map, Star, Clock, DollarSign } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const CityDetail = () => {
  const { countryId, cityId } = useParams<{ countryId: string; cityId: string }>();
  const navigate = useNavigate();
  
  const country = countries.find(c => c.id === countryId);
  const city = cities.find(c => c.id === cityId && c.countryId === countryId);
  
  if (!country || !city) {
    return (
      <div className="container-app">
        <Alert className="bg-passion-light/20 border-passion">
          <AlertDescription>
            Cidade não encontrada. Por favor, verifique o URL ou retorne para a página do país.
          </AlertDescription>
        </Alert>
        <div className="text-center my-8">
          <Button onClick={() => navigate(countryId ? `/country/${countryId}` : '/')}>
            {countryId ? `Voltar para ${country?.name || 'o país'}` : 'Página inicial'}
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pb-20">
      <PageHeader 
        title={city.name}
        subtitle={`${city.description} | ${country.name}`}
        imageUrl={city.imageSrc}
      />
      
      <Tabs defaultValue="info" className="container-app">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="info">Informações</TabsTrigger>
          <TabsTrigger value="attractions">Passeios</TabsTrigger>
          <TabsTrigger value="restaurants">Gastronomia</TabsTrigger>
          <TabsTrigger value="tips">Dicas</TabsTrigger>
          <TabsTrigger value="transport">Transporte</TabsTrigger>
        </TabsList>
        
        <TabsContent value="info" className="tab-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Sobre {city.name}</h2>
                <p className="text-base text-muted-foreground">{city.longDescription}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Hospedagem</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {city.accommodations.map(accommodation => (
                    <Card key={accommodation.id}>
                      <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-lg">{accommodation.name}</CardTitle>
                        <CardDescription>{accommodation.type} • {accommodation.priceRange}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <div className="aspect-[3/2] overflow-hidden rounded-md mb-3">
                          <img 
                            src={accommodation.imageSrc} 
                            alt={accommodation.name}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">{accommodation.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex justify-between text-sm">
                        <div className="flex items-center">
                          <Star size={16} className="text-sunset fill-sunset mr-1" />
                          <span>{accommodation.rating}/5</span>
                        </div>
                        <span className="text-ocean">{accommodation.amenities.slice(0, 2).join(' • ')}</span>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Clima e Época</h3>
                <p className="text-muted-foreground">
                  A melhor época para visitar {city.name} coincide com a temporada 
                  recomendada para {country.name}: {country.travelInfo.bestTimeToVisit}.
                </p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Custos Estimados</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium w-32">Hospedagem:</span>
                    <span>{city.accommodations[0]?.priceRange || '$$ - $$$'} por noite</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32">Alimentação:</span>
                    <span>$$ por refeição</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32">Transporte:</span>
                    <span>
                      {city.transportInfo.publicTransport.ticketPrices.single.amount}
                      {' '}{city.transportInfo.publicTransport.ticketPrices.single.currency}
                      {' '}por trajeto
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium w-32">Atrações:</span>
                    <span>Varia de gratuito a {city.attractions[0]?.price?.amount || '?'}{' '}
                    {city.attractions[0]?.price?.currency || ''}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="attractions" className="tab-content">
          <h2 className="text-2xl font-bold mb-6">Atrações em {city.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.attractions.map(attraction => (
              <Card key={attraction.id} className="overflow-hidden">
                <div className="aspect-[3/2]">
                  <img 
                    src={attraction.imageSrc} 
                    alt={attraction.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{attraction.name}</CardTitle>
                    <span className="text-sm py-1 px-2 bg-muted rounded-full">
                      {attraction.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{attraction.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center">
                      <Clock size={16} className="text-ocean mr-2" />
                      <span className="text-sm">{attraction.openingHours}</span>
                    </div>
                    <div className="flex items-center">
                      {attraction.price ? (
                        <>
                          <DollarSign size={16} className="text-ocean mr-2" />
                          <span className="text-sm">
                            {attraction.price.amount} {attraction.price.currency}
                          </span>
                        </>
                      ) : (
                        <span className="text-sm text-green-600 font-medium">Entrada Gratuita</span>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/50">
                  <div className="flex items-center w-full">
                    <Map size={16} className="text-ocean mr-2" />
                    <span className="text-sm text-muted-foreground truncate">{attraction.location}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="restaurants" className="tab-content">
          <h2 className="text-2xl font-bold mb-6">Gastronomia em {city.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.restaurants.map(restaurant => (
              <Card key={restaurant.id} className="overflow-hidden">
                <div className="aspect-[3/2]">
                  <img 
                    src={restaurant.imageSrc} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{restaurant.name}</CardTitle>
                    <div className="flex items-center">
                      <Star size={16} className="text-sunset fill-sunset mr-1" />
                      <span>{restaurant.rating}</span>
                    </div>
                  </div>
                  <CardDescription>{restaurant.priceRange} • {restaurant.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{restaurant.description}</p>
                </CardContent>
                <CardFooter className="bg-muted/50">
                  <div className="flex items-center w-full">
                    <Map size={16} className="text-ocean mr-2" />
                    <span className="text-sm text-muted-foreground truncate">{restaurant.address}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="tips" className="tab-content">
          <h2 className="text-2xl font-bold mb-6">Dicas para {city.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.tips.map(tip => (
              <Card key={tip.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{tip.title}</CardTitle>
                    <span className="text-sm py-1 px-3 bg-muted rounded-full">
                      {tip.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tip.content}</p>
                </CardContent>
              </Card>
            ))}
            
            {/* Generic tips */}
            <Card>
              <CardHeader>
                <CardTitle>Moeda Local</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A moeda local é {country.currency}. É recomendável ter sempre um pouco de dinheiro 
                  em espécie para pequenas compras, embora cartões de crédito sejam amplamente aceitos 
                  em estabelecimentos turísticos.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Comunicação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O idioma falado é o {country.language}. Considere baixar um aplicativo 
                  de tradução offline e aprender algumas frases básicas para facilitar 
                  a comunicação.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="transport" className="tab-content">
          <h2 className="text-2xl font-bold mb-6">Transporte em {city.name}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Do Aeroporto ao Centro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Existem várias opções para chegar do aeroporto ao centro da cidade:
                </p>
                
                <ul className="space-y-2 mb-4">
                  {city.transportInfo.fromAirport.options.map((option, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-ocean rounded-full mr-3"></div>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col space-y-2 mt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Custo médio:</span>
                    <span>
                      {city.transportInfo.fromAirport.averageCost.amount} 
                      {' '}{city.transportInfo.fromAirport.averageCost.currency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tempo estimado:</span>
                    <span>{city.transportInfo.fromAirport.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Transporte Público</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Opções de transporte público disponíveis na cidade:
                </p>
                
                <ul className="space-y-2 mb-4">
                  {city.transportInfo.publicTransport.options.map((option, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-forest rounded-full mr-3"></div>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col space-y-2 mt-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Bilhete único:</span>
                    <span>
                      {city.transportInfo.publicTransport.ticketPrices.single.amount} 
                      {' '}{city.transportInfo.publicTransport.ticketPrices.single.currency}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Passe diário:</span>
                    <span>
                      {city.transportInfo.publicTransport.ticketPrices.day.amount} 
                      {' '}{city.transportInfo.publicTransport.ticketPrices.day.currency}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Aluguel de Veículos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {city.transportInfo.rentalOptions.length > 0 && !city.transportInfo.rentalOptions[0].includes("Não recomendado") ? (
                    "Alugar um carro pode ser uma boa opção para explorar a cidade e seus arredores. Principais opções de aluguel:"
                  ) : (
                    "Informações sobre aluguel de veículos:"
                  )}
                </p>
                
                <ul className="space-y-2">
                  {city.transportInfo.rentalOptions.map((option, index) => (
                    <li key={index} className="flex items-center">
                      <div className={`w-2 h-2 ${option.includes("Não recomendado") ? "bg-passion" : "bg-sunset"} rounded-full mr-3`}></div>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <BottomNavigation />
    </div>
  );
};

export default CityDetail;
