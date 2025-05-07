
import { City } from './types';

export const cities: City[] = [
  {
    id: 'rio-de-janeiro',
    countryId: 'brazil',
    name: 'Rio de Janeiro',
    description: 'Cidade Maravilhosa com praias famosas e o Cristo Redentor',
    longDescription: 'O Rio de Janeiro é uma cidade vibrante conhecida por suas praias icônicas como Copacabana e Ipanema, pelo famoso Cristo Redentor no Corcovado, e pelo Pão de Açúcar com seu bondinho. A cidade oferece uma mistura única de beleza natural, cultura animada e festividades como o Carnaval.',
    imageSrc: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
    attractions: [
      {
        id: 'cristo-redentor',
        name: 'Cristo Redentor',
        description: 'Uma das Sete Maravilhas do Mundo Moderno, esta estátua de 30 metros no topo do Corcovado oferece vistas panorâmicas da cidade.',
        imageSrc: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e',
        category: 'Monumento',
        price: {
          amount: 80,
          currency: 'BRL'
        },
        openingHours: '8:00 - 19:00 diariamente',
        location: 'Parque Nacional da Tijuca - Alto da Boa Vista',
        coordinates: {
          lat: -22.9519,
          lng: -43.2105
        }
      },
      {
        id: 'pao-de-acucar',
        name: 'Pão de Açúcar',
        description: 'Complexo de montanhas com teleférico que oferece vistas espetaculares da cidade e da baía.',
        imageSrc: 'https://images.unsplash.com/photo-1554168848-228452c09d60',
        category: 'Atração Natural',
        price: {
          amount: 120,
          currency: 'BRL'
        },
        openingHours: '8:00 - 21:00 diariamente',
        location: 'Urca',
        coordinates: {
          lat: -22.9492,
          lng: -43.1545
        }
      }
    ],
    restaurants: [
      {
        id: 'marius-degustare',
        name: 'Marius Degustare',
        description: 'Famoso restaurante de frutos do mar com sistema de rodízio e decoração náutica.',
        imageSrc: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
        category: 'Frutos do Mar',
        priceRange: '$$$',
        address: 'Av. Atlântica, 290 - Leme',
        rating: 4.6
      },
      {
        id: 'confeitaria-colombo',
        name: 'Confeitaria Colombo',
        description: 'Café histórico em ambiente Belle Époque, servindo doces e salgados tradicionais desde 1894.',
        imageSrc: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8',
        category: 'Café',
        priceRange: '$$',
        address: 'R. Gonçalves Dias, 32 - Centro',
        rating: 4.7
      }
    ],
    accommodations: [
      {
        id: 'copacabana-palace',
        name: 'Belmond Copacabana Palace',
        description: 'Hotel de luxo histórico na praia de Copacabana, oferecendo serviço impecável e instalações de primeira classe.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel de Luxo',
        priceRange: '$$$$',
        amenities: ['Piscina', 'Spa', 'Restaurantes', 'Academia', 'Serviço de quarto 24h'],
        address: 'Av. Atlântica, 1702 - Copacabana',
        rating: 4.8
      },
      {
        id: 'santa-teresa-hotel',
        name: 'Hotel Santa Teresa',
        description: 'Boutique hotel em bairro histórico com vista para a baía, oferecendo design elegante e atmosfera tranquila.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Boutique Hotel',
        priceRange: '$$$',
        amenities: ['Piscina', 'Spa', 'Restaurante', 'Bar na cobertura', 'Wi-Fi grátis'],
        address: 'R. Alm. Alexandrino, 660 - Santa Teresa',
        rating: 4.6
      }
    ],
    transportInfo: {
      fromAirport: {
        options: ['Táxi', 'Uber', 'Ônibus BRT', 'Transfer privado'],
        averageCost: {
          amount: 70,
          currency: 'BRL'
        },
        duration: '30-60 minutos, dependendo do destino e trânsito'
      },
      publicTransport: {
        options: ['Metrô', 'Ônibus', 'VLT (centro)', 'BRT'],
        ticketPrices: {
          single: {
            amount: 5.80,
            currency: 'BRL'
          },
          day: {
            amount: 25,
            currency: 'BRL'
          }
        }
      },
      rentalOptions: ['Agências internacionais', 'Locadoras locais', 'Aplicativos de compartilhamento']
    },
    tips: [
      {
        id: 'seguranca',
        title: 'Segurança',
        content: 'Fique atento aos seus pertences, especialmente em áreas lotadas. Evite ostentar objetos de valor e utilize cofres do hotel.',
        category: 'Segurança'
      },
      {
        id: 'economia',
        title: 'Economizando',
        content: 'Os quiosques nas praias oferecem bebidas e petiscos a preços mais acessíveis que restaurantes. Metrô é mais rápido e econômico para evitar o trânsito.',
        category: 'Economia'
      }
    ]
  },
  {
    id: 'sao-paulo',
    countryId: 'brazil',
    name: 'São Paulo',
    description: 'Metrópole vibrante com cultura diversificada e gastronomia de classe mundial',
    longDescription: 'São Paulo é a maior cidade do Brasil e um dos maiores centros econômicos da América Latina. Conhecida por sua cena cultural diversificada, gastronomia internacional e vida noturna agitada, a cidade oferece uma experiência urbana incomparável com museus de classe mundial, parques e uma infinidade de opções de entretenimento.',
    imageSrc: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5',
    attractions: [
      {
        id: 'masp',
        name: 'MASP - Museu de Arte de São Paulo',
        description: 'O mais importante museu de arte do Brasil, com uma coleção abrangente de arte ocidental e brasileira em um edifício icônico.',
        imageSrc: 'https://images.unsplash.com/photo-1584707824245-f67bad2c62bd',
        category: 'Museu',
        price: {
          amount: 50,
          currency: 'BRL'
        },
        openingHours: '10:00 - 18:00 (fechado às segundas)',
        location: 'Av. Paulista, 1578',
        coordinates: {
          lat: -23.5614,
          lng: -46.6550
        }
      },
      {
        id: 'ibirapuera',
        name: 'Parque Ibirapuera',
        description: 'Enorme parque urbano com lagos, museus, espaço para atividades físicas e eventos culturais.',
        imageSrc: 'https://images.unsplash.com/photo-1525046504785-5b8f36eb98e7',
        category: 'Parque',
        price: null,
        openingHours: '5:00 - 00:00 diariamente',
        location: 'Av. Pedro Álvares Cabral',
        coordinates: {
          lat: -23.5874,
          lng: -46.6576
        }
      }
    ],
    restaurants: [
      {
        id: 'dom',
        name: 'D.O.M.',
        description: 'Restaurante premiado do chef Alex Atala, apresentando ingredientes brasileiros com técnicas modernas.',
        imageSrc: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
        category: 'Alta Gastronomia',
        priceRange: '$$$$',
        address: 'R. Barão de Capanema, 549 - Jardins',
        rating: 4.9
      },
      {
        id: 'mercado-municipal',
        name: 'Mercado Municipal',
        description: 'Mercado histórico com barracas de comida, produtos frescos e o famoso sanduíche de mortadela.',
        imageSrc: 'https://images.unsplash.com/photo-1605274280925-9dd1baacb97b',
        category: 'Mercado/Comida',
        priceRange: '$$',
        address: 'R. da Cantareira, 306 - Centro',
        rating: 4.5
      }
    ],
    accommodations: [
      {
        id: 'fasano',
        name: 'Hotel Fasano São Paulo',
        description: 'Hotel de luxo com design elegante, localizado no exclusivo bairro dos Jardins.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel de Luxo',
        priceRange: '$$$$',
        amenities: ['Spa', 'Piscina na cobertura', 'Restaurante premiado', 'Academia', 'Serviço de mordomo'],
        address: 'R. Vittorio Fasano, 88 - Jardins',
        rating: 4.8
      },
      {
        id: 'renaissance',
        name: 'Renaissance São Paulo Hotel',
        description: 'Hotel sofisticado na Av. Paulista, com quartos espaçosos e excelente localização.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel Business',
        priceRange: '$$$',
        amenities: ['Piscina coberta', 'Academia', 'Spa', 'Restaurantes', 'Centro de negócios'],
        address: 'Alameda Santos, 2233 - Jardins',
        rating: 4.6
      }
    ],
    transportInfo: {
      fromAirport: {
        options: ['Táxi', 'Uber', 'Ônibus Airport Bus Service', 'Metrô+trem'],
        averageCost: {
          amount: 100,
          currency: 'BRL'
        },
        duration: '45-90 minutos, dependendo do destino e trânsito'
      },
      publicTransport: {
        options: ['Metrô', 'Ônibus', 'Trem urbano (CPTM)'],
        ticketPrices: {
          single: {
            amount: 4.40,
            currency: 'BRL'
          },
          day: {
            amount: 20,
            currency: 'BRL'
          }
        }
      },
      rentalOptions: ['Agências tradicionais', 'Apps de aluguel por hora', 'Serviços de compartilhamento']
    },
    tips: [
      {
        id: 'melhor-epoca',
        title: 'Melhor época',
        content: 'De março a maio ou setembro a novembro para temperaturas mais amenas e menos chuva.',
        category: 'Clima'
      },
      {
        id: 'mobilidade',
        title: 'Mobilidade',
        content: 'Evite dirigir em horários de pico. O metrô é rápido e eficiente para evitar o notório trânsito da cidade.',
        category: 'Transporte'
      }
    ]
  },
  {
    id: 'buenos-aires',
    countryId: 'argentina',
    name: 'Buenos Aires',
    description: 'Capital argentina conhecida pelo tango, arquitetura europeia e excelente gastronomia',
    longDescription: 'Buenos Aires, a capital da Argentina, é uma cidade de grande riqueza cultural, com sua arquitetura elegante que lembra cidades europeias, vibrante cena artística, e paixão pelo tango. Conhecida por seus bairros distintos, excelentes restaurantes e vida noturna animada, Buenos Aires oferece uma experiência única e sofisticada na América do Sul.',
    imageSrc: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849',
    attractions: [
      {
        id: 'casa-rosada',
        name: 'Casa Rosada',
        description: 'Sede do governo argentino, este palácio presidencial de cor rosa é um ícone da cidade.',
        imageSrc: 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e',
        category: 'Monumento Histórico',
        price: null,
        openingHours: 'Visitas guiadas aos sábados, domingos e feriados das 10:00 às 18:00',
        location: 'Balcarce 50, Plaza de Mayo',
        coordinates: {
          lat: -34.6083,
          lng: -58.3703
        }
      },
      {
        id: 'recoleta-cemetery',
        name: 'Cemitério da Recoleta',
        description: 'Cemitério histórico com túmulos e mausoléus extraordinários, incluindo o de Eva Perón.',
        imageSrc: 'https://images.unsplash.com/photo-1664401523581-9b24be0f381d',
        category: 'Atração Histórica',
        price: null,
        openingHours: '8:00 - 18:00 diariamente',
        location: 'Junín 1760, Recoleta',
        coordinates: {
          lat: -34.5875,
          lng: -58.3951
        }
      }
    ],
    restaurants: [
      {
        id: 'don-julio',
        name: 'Don Julio',
        description: 'Uma das melhores parrillas (churrascarias) da cidade, com excelentes cortes de carne e vinhos.',
        imageSrc: 'https://images.unsplash.com/photo-1588354924596-71b74f559b61',
        category: 'Parrilla/Churrascaria',
        priceRange: '$$$',
        address: 'Guatemala 4691, Palermo',
        rating: 4.8
      },
      {
        id: 'cafe-tortoni',
        name: 'Café Tortoni',
        description: 'Café histórico fundado em 1858, com atmosfera Belle Époque e shows de tango.',
        imageSrc: 'https://images.unsplash.com/photo-1468421201266-ec88b2809284',
        category: 'Café Histórico',
        priceRange: '$$',
        address: 'Av. de Mayo 825, Centro',
        rating: 4.5
      }
    ],
    accommodations: [
      {
        id: 'alvear-palace',
        name: 'Alvear Palace Hotel',
        description: 'Hotel de luxo clássico no coração de Recoleta, oferecendo serviço impecável e elegância atemporal.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel de Luxo',
        priceRange: '$$$$',
        amenities: ['Spa', 'Piscina', 'Restaurantes gourmet', 'Bar', 'Serviços de concierge'],
        address: 'Av. Alvear 1891, Recoleta',
        rating: 4.9
      },
      {
        id: 'palermo-soho-house',
        name: 'Mine Hotel Boutique',
        description: 'Hotel boutique charmoso no bairro descolado de Palermo Soho.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel Boutique',
        priceRange: '$$$',
        amenities: ['Piscina', 'Jardim', 'Café da manhã incluído', 'Wi-Fi grátis'],
        address: 'Gorriti 4770, Palermo Soho',
        rating: 4.7
      }
    ],
    transportInfo: {
      fromAirport: {
        options: ['Táxi', 'Remise', 'Ônibus', 'Transfer privado'],
        averageCost: {
          amount: 1500,
          currency: 'ARS'
        },
        duration: '30-60 minutos, dependendo do destino e trânsito'
      },
      publicTransport: {
        options: ['Metrô (Subte)', 'Ônibus (Colectivo)', 'Trem urbano'],
        ticketPrices: {
          single: {
            amount: 30,
            currency: 'ARS'
          },
          day: {
            amount: 150,
            currency: 'ARS'
          }
        }
      },
      rentalOptions: ['Locadoras internacionais', 'Serviço de motorista']
    },
    tips: [
      {
        id: 'cambio',
        title: 'Câmbio',
        content: 'Leve dólares em espécie. O câmbio paralelo (Blue Dollar) costuma ter taxas muito melhores que as oficiais.',
        category: 'Dinheiro'
      },
      {
        id: 'seguranca',
        title: 'Segurança',
        content: 'Como em qualquer grande cidade, mantenha-se atento aos seus pertences, especialmente em áreas turísticas e no transporte público.',
        category: 'Segurança'
      }
    ]
  },
  {
    id: 'lima',
    countryId: 'peru',
    name: 'Lima',
    description: 'Capital peruana com rica história colonial e gastronomia premiada',
    longDescription: 'Lima, a capital do Peru, é uma metrópole fascinante à beira do Pacífico, com uma combinação única de história colonial, sítios pré-colombianos e uma das cenas gastronômicas mais celebradas do mundo. A cidade oferece aos visitantes um centro histórico patrimônio da UNESCO, museus de classe mundial, bairros modernos à beira-mar e uma incrível variedade culinária.',
    imageSrc: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129',
    attractions: [
      {
        id: 'plaza-mayor',
        name: 'Plaza Mayor (Plaza de Armas)',
        description: 'Centro histórico de Lima, rodeado por edifícios coloniais importantes como a Catedral e o Palácio do Governo.',
        imageSrc: 'https://images.unsplash.com/photo-1580188557357-9615a5788915',
        category: 'Centro Histórico',
        price: null,
        openingHours: '24 horas (acesso público)',
        location: 'Centro Histórico',
        coordinates: {
          lat: -12.0464,
          lng: -77.0324
        }
      },
      {
        id: 'circuito-magico',
        name: 'Circuito Mágico das Águas',
        description: 'Parque com espetaculares fontes iluminadas, reconhecido pelo Guinness como o maior complexo de fontes do mundo.',
        imageSrc: 'https://images.unsplash.com/photo-1583373834259-46ddd02f108b',
        category: 'Parque',
        price: {
          amount: 15,
          currency: 'PEN'
        },
        openingHours: '15:00 - 22:30 (quarta a domingo)',
        location: 'Parque de la Reserva',
        coordinates: {
          lat: -12.0703,
          lng: -77.0352
        }
      }
    ],
    restaurants: [
      {
        id: 'central',
        name: 'Central',
        description: 'Restaurante do chef Virgílio Martínez, várias vezes classificado entre os melhores do mundo, com um menu que explora os diversos ecossistemas peruanos.',
        imageSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        category: 'Alta Gastronomia',
        priceRange: '$$$$',
        address: 'Av. Pedro de Osma 301, Barranco',
        rating: 4.9
      },
      {
        id: 'la-mar',
        name: 'La Mar Cebichería',
        description: 'Um dos melhores restaurantes de frutos do mar de Lima, especializado em ceviches frescos e outras delícias marinhas.',
        imageSrc: 'https://images.unsplash.com/photo-1537639622086-67781f4131d3',
        category: 'Frutos do Mar',
        priceRange: '$$$',
        address: 'Av. La Mar 770, Miraflores',
        rating: 4.7
      }
    ],
    accommodations: [
      {
        id: 'belmond-miraflores',
        name: 'Belmond Miraflores Park',
        description: 'Hotel de luxo com vista para o oceano em Miraflores, oferecendo quartos espaçosos e serviço excepcional.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel de Luxo',
        priceRange: '$$$$',
        amenities: ['Piscina no terraço', 'Spa', 'Academia', 'Restaurantes', 'Lounge executivo'],
        address: 'Av. Malecón de la Reserva 1035, Miraflores',
        rating: 4.8
      },
      {
        id: 'casa-republica',
        name: 'Casa República Barranco',
        description: 'Hotel boutique em uma mansão restaurada no artístico bairro de Barranco.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel Boutique',
        priceRange: '$$$',
        amenities: ['Café da manhã incluído', 'Terraço', 'Bar', 'Wi-Fi grátis', 'Concierge'],
        address: 'Jr. Domeyer 366, Barranco',
        rating: 4.7
      }
    ],
    transportInfo: {
      fromAirport: {
        options: ['Táxi autorizado', 'Transfer privado', 'Serviço de shuttle'],
        averageCost: {
          amount: 60,
          currency: 'PEN'
        },
        duration: '30-60 minutos, dependendo do destino e trânsito'
      },
      publicTransport: {
        options: ['Metropolitano (BRT)', 'Ônibus', 'Táxi'],
        ticketPrices: {
          single: {
            amount: 2.5,
            currency: 'PEN'
          },
          day: {
            amount: 12,
            currency: 'PEN'
          }
        }
      },
      rentalOptions: ['Locadoras internacionais', 'Serviço de motorista (recomendado)']
    },
    tips: [
      {
        id: 'neblina',
        title: 'Neblina costeira',
        content: 'De maio a outubro, Lima fica frequentemente coberta por uma névoa conhecida localmente como "garúa". Traga um casaco leve.',
        category: 'Clima'
      },
      {
        id: 'bairros',
        title: 'Melhores bairros',
        content: 'Miraflores, Barranco e San Isidro são os bairros mais seguros e turísticos, com melhores opções de hospedagem, restaurantes e vida noturna.',
        category: 'Localização'
      }
    ]
  },
  {
    id: 'cusco',
    countryId: 'peru',
    name: 'Cusco',
    description: 'Antiga capital inca e porta de entrada para Machu Picchu',
    longDescription: 'Cusco, a antiga capital do Império Inca, é uma cidade fascinante localizada a 3.400 metros de altitude nos Andes peruanos. Com suas ruas de paralelepípedos, magníficas construções coloniais construídas sobre fundações incas, e rica cultura viva, Cusco é muito mais que apenas um ponto de partida para Machu Picchu. A cidade em si é um destino extraordinário, misturando harmoniosamente o passado indígena com a influência espanhola.',
    imageSrc: 'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    attractions: [
      {
        id: 'sacsayhuaman',
        name: 'Sacsayhuamán',
        description: 'Impressionante fortaleza inca construída com enormes blocos de pedra encaixados com precisão surpreendente.',
        imageSrc: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be',
        category: 'Sítio Arqueológico',
        price: {
          amount: 130,
          currency: 'PEN'
        },
        openingHours: '7:00 - 18:00 diariamente',
        location: 'Norte de Cusco',
        coordinates: {
          lat: -13.5089,
          lng: -71.9824
        }
      },
      {
        id: 'catedral',
        name: 'Catedral de Cusco',
        description: 'Imponente catedral colonial localizada na Plaza de Armas, com impressionante coleção de arte religiosa.',
        imageSrc: 'https://images.unsplash.com/photo-1572987685677-277d6c4b860f',
        category: 'Monumento Religioso',
        price: {
          amount: 25,
          currency: 'PEN'
        },
        openingHours: '10:00 - 18:00 (fechado durante missas)',
        location: 'Plaza de Armas',
        coordinates: {
          lat: -13.5153,
          lng: -71.9785
        }
      }
    ],
    restaurants: [
      {
        id: 'chicha',
        name: 'Chicha por Gastón Acurio',
        description: 'Restaurante do famoso chef peruano Gastón Acurio, com cozinha contemporânea baseada em ingredientes andinos.',
        imageSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        category: 'Peruana Contemporânea',
        priceRange: '$$$',
        address: 'Plaza Regocijo 261, 2º andar',
        rating: 4.7
      },
      {
        id: 'pachapapa',
        name: 'Pachapapa',
        description: 'Restaurante aconchegante em um pátio colonial em San Blas, especializado em comida tradicional andina, incluindo cuy (porquinho-da-índia).',
        imageSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        category: 'Andina Tradicional',
        priceRange: '$$',
        address: 'Carmen Bajo 120, San Blas',
        rating: 4.5
      }
    ],
    accommodations: [
      {
        id: 'belmond-monasterio',
        name: 'Belmond Hotel Monasterio',
        description: 'Luxuoso hotel em um mosteiro colonial do século XVI, com quartos com oxigênio enriquecido para ajudar com a altitude.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel de Luxo',
        priceRange: '$$$$',
        amenities: ['Oxigênio enriquecido', 'Pátio colonial', 'Restaurante', 'Capela', 'Serviço de concierge'],
        address: 'Calle Palacios 136, Plazoleta Nazarenas',
        rating: 4.8
      },
      {
        id: 'casa-andina',
        name: 'Casa Andina Premium Cusco',
        description: 'Hotel bem localizado em um casarão colonial restaurado perto da Plaza de Armas.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel Premium',
        priceRange: '$$$',
        amenities: ['Restaurante', 'Bar', 'Spa', 'Wi-Fi grátis', 'Chá de coca no lobby'],
        address: 'Calle Santa Teresa 344',
        rating: 4.6
      }
    ],
    transportInfo: {
      fromAirport: {
        options: ['Táxi', 'Transfer do hotel', 'Transporte compartilhado'],
        averageCost: {
          amount: 30,
          currency: 'PEN'
        },
        duration: '15-20 minutos'
      },
      publicTransport: {
        options: ['Ônibus local', 'Táxi', 'A pé (centro histórico)'],
        ticketPrices: {
          single: {
            amount: 1,
            currency: 'PEN'
          },
          day: {
            amount: 5,
            currency: 'PEN'
          }
        }
      },
      rentalOptions: ['Não recomendado para turistas devido às estreitas ruas coloniais e restrições de tráfego']
    },
    tips: [
      {
        id: 'altitude',
        title: 'Altitude',
        content: 'Cusco está a 3.400m acima do nível do mar. Tome os primeiros dias com calma, beba muita água e experimente chá de coca para ajudar na aclimatação.',
        category: 'Saúde'
      },
      {
        id: 'boleto-turistico',
        title: 'Boleto Turístico',
        content: 'Considere adquirir o Boleto Turístico de Cusco, que dá acesso a vários sítios arqueológicos e museus na cidade e arredores.',
        category: 'Economia'
      }
    ]
  },
  {
    id: 'mexico-city',
    countryId: 'mexico',
    name: 'Cidade do México',
    description: 'Vibrante metrópole com rica história pré-colombiana e colonial',
    longDescription: 'A Cidade do México é uma das maiores metrópoles do mundo, oferecendo uma fascinante mistura do antigo e do moderno. Capital do país e lar de mais de 21 milhões de habitantes em sua área metropolitana, a cidade impressiona com suas ruínas astecas, arquitetura colonial espanhola, bairros artísticos, e uma das cenas gastronômicas mais dinâmicas da América.',
    imageSrc: 'https://images.unsplash.com/photo-1518659526054-190340b35735',
    attractions: [
      {
        id: 'templo-mayor',
        name: 'Templo Mayor',
        description: 'Sítio arqueológico do principal templo da antiga capital asteca, Tenochtitlán, com museu anexo exibindo artefatos encontrados nas escavações.',
        imageSrc: 'https://images.unsplash.com/photo-1547995886-6dc09384c6e6',
        category: 'Sítio Arqueológico',
        price: {
          amount: 75,
          currency: 'MXN'
        },
        openingHours: '9:00 - 17:00 (fechado às segundas)',
        location: 'Centro Histórico',
        coordinates: {
          lat: 19.4348,
          lng: -99.1319
        }
      },
      {
        id: 'frida-kahlo',
        name: 'Museu Frida Kahlo (Casa Azul)',
        description: 'Casa onde a famosa artista mexicana viveu, agora transformada em museu com suas obras e objetos pessoais.',
        imageSrc: 'https://images.unsplash.com/photo-1626858144453-7066c3762932',
        category: 'Museu',
        price: {
          amount: 230,
          currency: 'MXN'
        },
        openingHours: '10:00 - 17:30 (fechado às segundas)',
        location: 'Coyoacán',
        coordinates: {
          lat: 19.3550,
          lng: -99.1626
        }
      }
    ],
    restaurants: [
      {
        id: 'pujol',
        name: 'Pujol',
        description: 'Restaurante do chef Enrique Olvera, frequentemente classificado entre os melhores do mundo, explorando a culinária mexicana tradicional com técnicas contemporâneas.',
        imageSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        category: 'Alta Gastronomia Mexicana',
        priceRange: '$$$$',
        address: 'Tennyson 133, Polanco',
        rating: 4.9
      },
      {
        id: 'el-cardenal',
        name: 'El Cardenal',
        description: 'Restaurante tradicional mexicano amado pelos locais, famoso por seus cafés da manhã e pratos clássicos preparados com ingredientes de alta qualidade.',
        imageSrc: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5',
        category: 'Mexicana Tradicional',
        priceRange: '$$',
        address: 'Calle de la Palma 23, Centro Histórico',
        rating: 4.7
      }
    ],
    accommodations: [
      {
        id: 'four-seasons',
        name: 'Four Seasons Hotel Mexico City',
        description: 'Hotel luxuoso ao redor de um belo jardim interno, localizado no elegante Paseo de la Reforma.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel de Luxo',
        priceRange: '$$$$',
        amenities: ['Spa', 'Piscina', 'Fitness Center', 'Restaurantes gourmet', 'Bar'],
        address: 'Paseo de la Reforma 500, Juárez',
        rating: 4.8
      },
      {
        id: 'downtown-mexico',
        name: 'Downtown Mexico',
        description: 'Hotel boutique em um palácio colonial do século XVII no Centro Histórico, com terraço na cobertura e piscina.',
        imageSrc: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
        type: 'Hotel Boutique',
        priceRange: '$$$',
        amenities: ['Piscina na cobertura', 'Restaurantes', 'Bar', 'Wi-Fi grátis', 'Design único'],
        address: 'Isabel la Católica 30, Centro Histórico',
        rating: 4.6
      }
    ],
    transportInfo: {
      fromAirport: {
        options: ['Táxi autorizado', 'Uber', 'Metrô', 'Metrobús'],
        averageCost: {
          amount: 300,
          currency: 'MXN'
        },
        duration: '30-90 minutos, dependendo do destino e trânsito'
      },
      publicTransport: {
        options: ['Metrô', 'Metrobús', 'Ônibus', 'Ecobici (compartilhamento de bicicletas)'],
        ticketPrices: {
          single: {
            amount: 5,
            currency: 'MXN'
          },
          day: {
            amount: 30,
            currency: 'MXN'
          }
        }
      },
      rentalOptions: ['Não recomendado devido ao trânsito intenso e restrições de circulação']
    },
    tips: [
      {
        id: 'altitude',
        title: 'Altitude',
        content: 'A Cidade do México está a 2.240m acima do nível do mar. Algumas pessoas podem sentir os efeitos da altitude nos primeiros dias.',
        category: 'Saúde'
      },
      {
        id: 'seguranca',
        title: 'Segurança',
        content: 'Fique em áreas turísticas como Polanco, Condesa, Roma e Centro Histórico. Use aplicativos de transporte em vez de táxis de rua, especialmente à noite.',
        category: 'Segurança'
      }
    ]
  }
];
