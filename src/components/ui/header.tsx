import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <div className='py-5  flex items-center justify-between bg-transparent'>
      <Link href='/' className='flex items-center gap-2 z-50'>
        <Image src='/icons/logo.svg' alt='logo' width={30} height={30} />
        <p className='hidden lg:block font-extrabold text-[32px] text-white'>
          Foody
        </p>
      </Link>

      <div className='flex items-center'>
        <Image src='/icons/bag.svg' alt='shooping bag' width={30} height={30} />
        <Image
          src='/icons/avatar.svg'
          alt='user avatar'
          width={30}
          height={30}
          className='rounded-full mr-4 ml-6'
        />
        <p className='hidden lg:block text-[18px] font-semibold text-white'>
          John Doe
        </p>
      </div>
    </div>
  );
}

export default Header;
