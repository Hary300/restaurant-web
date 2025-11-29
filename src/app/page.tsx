// src/app/page.tsx
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Footer from '@/components/ui/footer';
import Image from 'next/image';
import { getRecommended } from '@/lib/api';
import { RecommendedResto } from '@/types/types';

export default async function Home() {
  const recommended: RecommendedResto[] = await getRecommended();

  return (
    <div className='min-h-screen'>
      <Hero />
      <Menu />

      <div className='px-4 md:px-30 py-10  mx-auto'>
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Recommended Restaurants
        </h1>

        {recommended.length === 0 ? (
          <p className='text-center opacity-70'>
            No recommendations available.
          </p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {recommended.map((resto) => (
              <div
                key={resto.id}
                className=' bg-white/10 rounded-xl p-4 border border-white/20 flex items-center justify-center gap-4 hover:scale-105 transition-transform shadow-lg'
              >
                {/* Gambar restoran */}
                {resto.images?.[0] ? (
                  <Image
                    src={resto.images[0]}
                    width={100}
                    height={100}
                    alt={resto.name}
                    className='rounded-lg object-cover shrink-0'
                  />
                ) : resto.logo ? (
                  <Image
                    src={resto.logo}
                    width={100}
                    height={100}
                    alt={resto.name}
                    className='rounded-lg object-cover shrink-0'
                  />
                ) : (
                  <div className='w-[100px] h-[100px] bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 shrink-0'>
                    No Image
                  </div>
                )}

                {/* Info restoran */}
                <div className='flex flex-col justify-center'>
                  <h2 className='text-xl font-bold'>{resto.name}</h2>
                  <p className='text-sm opacity-80'>
                    ⭐ {resto.star} | {resto.place}
                  </p>
                  <p className='text-sm opacity-70 mt-1'>
                    {resto.reviewCount} reviews
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
