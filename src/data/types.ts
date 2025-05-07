
export interface Country {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  flagSrc?: string;
  capital: string;
  language: string;
  currency: string;
  entryRequirements: {
    passport: boolean;
    visa: boolean;
    vaccines: string[];
    otherDocuments: string[];
  };
  travelInfo: {
    timeZone: string;
    electricalOutlet: string;
    bestTimeToVisit: string;
    localTransportation: string[];
  };
}

export interface City {
  id: string;
  countryId: string;
  name: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  attractions: Attraction[];
  restaurants: Place[];
  accommodations: Accommodation[];
  transportInfo: TransportInfo;
  tips: Tip[];
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  category: string;
  price: {
    amount: number;
    currency: string;
  } | null;
  openingHours: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Place {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  category: string;
  priceRange: string;
  address: string;
  rating: number;
}

export interface Accommodation {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  type: string;
  priceRange: string;
  amenities: string[];
  address: string;
  rating: number;
}

export interface TransportInfo {
  fromAirport: {
    options: string[];
    averageCost: {
      amount: number;
      currency: string;
    };
    duration: string;
  };
  publicTransport: {
    options: string[];
    ticketPrices: {
      single: {
        amount: number;
        currency: string;
      };
      day: {
        amount: number;
        currency: string;
      };
    };
  };
  rentalOptions: string[];
}

export interface Tip {
  id: string;
  title: string;
  content: string;
  category: string;
}

export interface Itinerary {
  id: string;
  title: string;
  description: string;
  days: ItineraryDay[];
  totalCost: {
    amount: number;
    currency: string;
  };
  suitableFor: string[];
  duration: number;
}

export interface ItineraryDay {
  day: number;
  activities: ItineraryActivity[];
}

export interface ItineraryActivity {
  time: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  cost: {
    amount: number;
    currency: string;
  } | null;
}
