import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function HeaderWhite() {
  return (
    <div className='py-5 px-30 flex shadow-[0_0_20px_rgba(203,202,202,0.25)] items-center justify-between bg-transparent '>
      <Link href='/' className=' flex items-center gap-2 z-50'>
        <Image src='/icons/red-logo.svg' alt='logo' width={30} height={30} />
        <p className='hidden lg:block font-extrabold text-[32px] text-black'>
          Foody
        </p>
      </Link>

      <div className='flex items-center'>
        <Image
          src='/icons/black-bag.svg'
          alt='shooping bag'
          width={30}
          height={30}
        />
        <Image
          src='/icons/avatar.svg'
          alt='user avatar'
          width={30}
          height={30}
          className='rounded-full mr-4 ml-6'
        />
        <p className='hidden lg:block text-[18px] font-semibold text-black'>
          John Doe
        </p>
      </div>
    </div>
  );
}

export default HeaderWhite;
