
import { useState } from 'react';
import { User, Mail, MapPin, Globe, LogOut, Settings, CreditCard } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import BottomNavigation from '@/components/BottomNavigation';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  // Mock user data - in a real app this would come from authentication
  const [user] = useState({
    name: 'Carolina Silva',
    email: 'carolina.silva@exemplo.com',
    location: 'São Paulo, Brasil',
    memberSince: 'Janeiro 2023',
    isPremium: true,
    visitedCountries: ['Brasil', 'Argentina', 'Peru'],
    savedPlans: 3,
    nextTrip: {
      destination: 'Buenos Aires, Argentina',
      date: '20-27 Nov, 2023'
    }
  });
  
  return (
    <div className="pb-20">
      <PageHeader 
        title="Perfil"
        subtitle="Gerencie suas informações e preferências"
        showBackButton={false}
      />
      
      <div className="container-app space-y-8">
        {/* User Info Card */}
        <Card className="relative overflow-hidden">
          {user.isPremium && (
            <div className="absolute top-0 right-0">
              <Badge className="m-3 bg-sunset hover:bg-sunset-dark">Premium</Badge>
            </div>
          )}
          
          <CardHeader className="text-center pt-8">
            <div className="w-20 h-20 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
              <User size={40} className="text-muted-foreground" />
            </div>
            <CardTitle className="text-2xl">{user.name}</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-3">
            <div className="flex items-center">
              <Mail size={16} className="text-muted-foreground mr-3" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="text-muted-foreground mr-3" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center">
              <Globe size={16} className="text-muted-foreground mr-3" />
              <span>
                {user.visitedCountries.length} 
                {user.visitedCountries.length === 1 ? ' país' : ' países'} 
                {' '}visitados
              </span>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center border-t p-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Membro desde {user.memberSince}
            </p>
          </CardFooter>
        </Card>
        
        {/* Subscription Status */}
        <Card className={`border-l-4 ${user.isPremium ? 'border-l-sunset' : 'border-l-muted-foreground'}`}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <CreditCard className="mr-2" size={18} />
              Status da Assinatura
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {user.isPremium ? (
              <>
                <p>Você tem acesso a todos os recursos premium do Passport América!</p>
                <div className="flex justify-between items-center text-sm px-3 py-1 bg-muted rounded-md">
                  <span>Plano Premium</span>
                  <span>Renova em: 15 Jan 2024</span>
                </div>
              </>
            ) : (
              <p>Atualize para o plano Premium para acessar recursos exclusivos!</p>
            )}
          </CardContent>
          
          <CardFooter>
            <Button className={user.isPremium ? "w-full" : "w-full bg-sunset hover:bg-sunset-dark"}>
              {user.isPremium ? 'Gerenciar Assinatura' : 'Assinar Premium'}
            </Button>
          </CardFooter>
        </Card>
        
        {/* Account Settings */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="settings">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <Settings size={18} className="mr-2" />
                Configurações da Conta
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <Button variant="outline" className="w-full justify-start">
                  Editar Perfil
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Alterar Senha
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Preferências de Notificação
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Idioma da Aplicação
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Moeda Preferida
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="trips">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                Minhas Viagens
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <Button variant="outline" className="w-full justify-start">
                  Histórico de Viagens
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Roteiros Salvos ({user.savedPlans})
                </Button>
                {user.nextTrip && (
                  <div className="mt-4 p-3 bg-muted rounded-md">
                    <h4 className="font-medium mb-1">Próxima Viagem</h4>
                    <p className="text-sm">{user.nextTrip.destination}</p>
                    <p className="text-xs text-muted-foreground">{user.nextTrip.date}</p>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="help">
            <AccordionTrigger className="text-lg font-medium">
              <div className="flex items-center">
                <span className="i-lucide-help-circle mr-2" />
                Ajuda e Suporte
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 p-2">
                <Button variant="outline" className="w-full justify-start">
                  Perguntas Frequentes
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Contato
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Reportar um Problema
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Separator />
        
        {/* Logout Button */}
        <Button variant="outline" className="w-full flex items-center">
          <LogOut size={16} className="mr-2" />
          Sair da Conta
        </Button>
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
