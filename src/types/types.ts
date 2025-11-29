// types.ts (di folder src/types atau langsung di page.tsx)
export type RecommendedResto = {
  id: number;
  name: string;
  star: number;
  place: string;
  logo: string;
  images: string[];
  reviewCount: number;
};
