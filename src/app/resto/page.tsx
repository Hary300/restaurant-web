import { getAllResto } from '@/lib/api';
import Image from 'next/image';
import { Resto } from '@/types/types';
import Footer from '@/components/ui/footer';
import HeaderWhite from '@/components/ui/headerWhite';

export default async function RestoPage() {
  const restos: Resto[] = await getAllResto();

  return (
    <>
      <HeaderWhite />
      <div className='min-h-screen px-4 md:px-30 py-10 mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>All Restaurants</h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {restos.map((resto) => (
            <div
              key={resto.id}
              className='bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg flex gap-4 hover:scale-105 transition-transform '
            >
              <div className='w-[120px] h-[120px] bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200'>
                <Image
                  src={resto.logo}
                  width={120}
                  height={120}
                  alt={resto.name}
                  className='object-contain'
                />
              </div>

              <div className='flex flex-col justify-center'>
                <h2 className='mt-4 text-xl font-bold'>{resto.name}</h2>
                <p className='text-sm'>⭐ {resto.star}</p>
                <p className='text-sm opacity-70'>{resto.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
