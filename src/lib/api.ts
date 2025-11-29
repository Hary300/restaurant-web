import { RecommendedResto } from '@/types/types';

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
    console.log('Gagal fetch:', res.status);
    return [];
  }

  const data = await res.json();

  return data?.data?.recommendations || [];
}
