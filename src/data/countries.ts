
import { Country } from './types';

export const countries: Country[] = [
  {
    id: 'brazil',
    name: 'Brasil',
    description: 'País de natureza exuberante, praias paradisíacas e cultura vibrante',
    longDescription: 'O Brasil é o maior país da América do Sul e o quinto maior do mundo, conhecido por suas praias deslumbrantes, florestas tropicais e festivais animados como o Carnaval. A diversidade cultural brasileira é refletida na sua música, culinária e hospitalidade calorosa de seu povo.',
    imageSrc: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
    flagSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
    capital: 'Brasília',
    language: 'Português',
    currency: 'Real (BRL)',
    entryRequirements: {
      passport: true,
      visa: false,
      vaccines: ['Febre Amarela (recomendada)'],
      otherDocuments: ['Passaporte válido por pelo menos 6 meses']
    },
    travelInfo: {
      timeZone: 'UTC-3',
      electricalOutlet: 'Tipo N (127V/220V)',
      bestTimeToVisit: 'Setembro a Março',
      localTransportation: ['Ônibus', 'Metrô', 'Táxi', 'Aplicativos de transporte']
    }
  },
  {
    id: 'argentina',
    name: 'Argentina',
    description: 'Terra do tango, dos pampas e das montanhas impressionantes dos Andes',
    longDescription: 'A Argentina é um país de contrastes, desde as geleiras da Patagônia até a vibrante capital Buenos Aires. Famosa por seu tango, vinho Malbec e churrascos deliciosos, a Argentina oferece uma combinação fascinante de cultura europeia e latino-americana.',
    imageSrc: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849',
    flagSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    capital: 'Buenos Aires',
    language: 'Espanhol',
    currency: 'Peso Argentino (ARS)',
    entryRequirements: {
      passport: true,
      visa: false,
      vaccines: ['Nenhuma obrigatória'],
      otherDocuments: ['Passaporte válido', 'Seguro viagem (recomendado)']
    },
    travelInfo: {
      timeZone: 'UTC-3',
      electricalOutlet: 'Tipo I (220V)',
      bestTimeToVisit: 'Outubro a Abril',
      localTransportation: ['Ônibus', 'Metrô', 'Táxi', 'Remise (táxi privado)']
    }
  },
  {
    id: 'peru',
    name: 'Peru',
    description: 'Lar de Machu Picchu e da antiga civilização Inca',
    longDescription: 'O Peru é um país de patrimônio histórico incomparável, com sítios arqueológicos únicos como Machu Picchu. Além da herança inca, o país oferece uma culinária de classe mundial, paisagens diversificadas desde a costa do Pacífico até a floresta amazônica, e tradições culturais ricas.',
    imageSrc: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    flagSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
    capital: 'Lima',
    language: 'Espanhol',
    currency: 'Sol Peruano (PEN)',
    entryRequirements: {
      passport: true,
      visa: false,
      vaccines: ['Febre Amarela (recomendada para visitas à região amazônica)'],
      otherDocuments: ['Passaporte válido', 'Cartão de imigração']
    },
    travelInfo: {
      timeZone: 'UTC-5',
      electricalOutlet: 'Tipos A e C (220V)',
      bestTimeToVisit: 'Maio a Setembro (estação seca)',
      localTransportation: ['Ônibus', 'Táxi', 'Combi (vans de transporte compartilhado)']
    }
  },
  {
    id: 'chile',
    name: 'Chile',
    description: 'País de natureza diversificada, dos desertos às geleiras',
    longDescription: 'O Chile é uma faixa estreita de terra entre os Andes e o Oceano Pacífico, oferecendo paisagens extraordinariamente diversas: do deserto do Atacama no norte às geleiras da Patagônia no sul. Com excelentes vinhos, cidades cosmopolitas e parques nacionais impressionantes, o Chile é um destino para todos os gostos.',
    imageSrc: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
    flagSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
    capital: 'Santiago',
    language: 'Espanhol',
    currency: 'Peso Chileno (CLP)',
    entryRequirements: {
      passport: true,
      visa: false,
      vaccines: ['Nenhuma obrigatória'],
      otherDocuments: ['Passaporte válido', 'Tarjeta de Turismo (emitida na chegada)']
    },
    travelInfo: {
      timeZone: 'UTC-4 (UTC-3 no verão)',
      electricalOutlet: 'Tipo C/L (220V)',
      bestTimeToVisit: 'Outubro a Abril (para a maior parte do país)',
      localTransportation: ['Ônibus', 'Metrô em Santiago', 'Táxi', 'Uber']
    }
  },
  {
    id: 'colombia',
    name: 'Colômbia',
    description: 'Terra do café, cidades coloniais e praias caribenhas',
    longDescription: 'A Colômbia surpreende os visitantes com sua diversidade natural e cultural, desde as praias do Caribe até os Andes e a Amazônia. O país do café e das flores encanta com cidades coloniais coloridas, música alegre como cumbia e salsa, e a calorosa hospitalidade dos colombianos.',
    imageSrc: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86',
    flagSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    capital: 'Bogotá',
    language: 'Espanhol',
    currency: 'Peso Colombiano (COP)',
    entryRequirements: {
      passport: true,
      visa: false,
      vaccines: ['Febre Amarela (recomendada)'],
      otherDocuments: ['Passaporte válido', 'Prova de fundos suficientes']
    },
    travelInfo: {
      timeZone: 'UTC-5',
      electricalOutlet: 'Tipos A e B (110V)',
      bestTimeToVisit: 'Dezembro a Março e Julho a Agosto (estações secas)',
      localTransportation: ['Ônibus', 'TransMilenio (em Bogotá)', 'Táxi', 'Uber']
    }
  },
  {
    id: 'mexico',
    name: 'México',
    description: 'Rica cultura milenar, praias paradisíacas e gastronomia única',
    longDescription: 'O México é um país de cores vibrantes, história antiga e tradições vivas. Desde as ruínas maias e astecas até as praias de Cancún e a vibrante Cidade do México, o país oferece uma mistura fascinante de antigo e moderno, complementada por uma das culinárias mais celebradas do mundo.',
    imageSrc: 'https://images.unsplash.com/photo-1518638150340-f706e86654de',
    flagSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
    capital: 'Cidade do México',
    language: 'Espanhol',
    currency: 'Peso Mexicano (MXN)',
    entryRequirements: {
      passport: true,
      visa: false,
      vaccines: ['Nenhuma obrigatória'],
      otherDocuments: ['Passaporte válido', 'Formulário de Migração (FMM)']
    },
    travelInfo: {
      timeZone: 'Varia por região, UTC-8 a UTC-5',
      electricalOutlet: 'Tipos A e B (127V)',
      bestTimeToVisit: 'Novembro a Abril (estação seca)',
      localTransportation: ['Metro', 'Ônibus', 'Táxi', 'Uber']
    }
  }
];
