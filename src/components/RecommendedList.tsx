'use client';

import { useState } from 'react';
import Image from 'next/image';
import { RecommendedResto } from '@/types/types';
import { getDistanceKm } from '@/lib/distance';
import Link from 'next/link';

const USER_LAT = -6.1754;
const USER_LON = 106.8272;
const STEP = 6;

export default function RecommendedList({
  data,
}: {
  data: RecommendedResto[];
}) {
  const [visible, setVisible] = useState(STEP);

  const visibleData = data.slice(0, visible);

  return (
    <div className='min-h-screen px-4 md:px-30 py-10 mx-auto'>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold mb-6'>Recommended</h1>
        <Link href='/resto' className='text-[#C12116] font-extrabold text-lg'>
          See all
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {visibleData.map((resto) => (
          <div
            key={resto.id}
            className='bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg flex gap-4 hover:scale-105 transition-transform '
          >
            <div className='w-[120px] h-[120px] bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-200'>
              <Image
                src={resto.logo}
                width={100}
                height={100}
                alt={resto.name}
                className='object-contain'
              />
            </div>

            <div className='flex flex-col justify-center'>
              <h2 className='text-xl font-bold'>{resto.name}</h2>
              <p className='text-sm'>⭐ {resto.star}</p>
              <p className='text-sm opacity-70'>
                {resto.place} ·{' '}
                {getDistanceKm(
                  USER_LAT,
                  USER_LON,
                  resto.lat,
                  resto.long
                ).toFixed(1)}{' '}
                km
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* SHOW MORE BUTTON */}
      {visible < data.length && (
        <div className='flex justify-center mt-10'>
          <button
            onClick={() => setVisible((v) => v + STEP)}
            className='px-6 py-2 rounded-full border border-white/30 hover:bg-white/10 transition'
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
