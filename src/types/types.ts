// types.ts (di folder src/types atau langsung di page.tsx)
export type RecommendedResto = {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  reviewCount: number;
  lat: number;
  long: number;
};

export type PriceRange = {
  min: number;
  max: number;
};

export type Resto = {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  category: string;
  reviewCount: number;
  menuCount: number;
  priceRange: PriceRange;
};
