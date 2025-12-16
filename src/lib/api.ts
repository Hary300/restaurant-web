import { RecommendedResto, Resto } from '@/types/types';

// 🔹 Homepage → Top 6
export async function getRecommended(): Promise<RecommendedResto[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.API_TOKEN;

  const res = await fetch(`${baseUrl}/api/resto/recommended`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log('Gagal fetch recommended:', res.status);
    return [];
  }

  const data = await res.json();
  return data?.data?.recommendations || [];
}

// 🔹 All Restaurants → Full list
export async function getAllResto(): Promise<Resto[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.API_TOKEN;

  const res = await fetch(`${baseUrl}/api/resto`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log('Gagal fetch all resto:', res.status);
    return [];
  }

  const data = await res.json();
  return data?.data?.restaurants || [];
}
