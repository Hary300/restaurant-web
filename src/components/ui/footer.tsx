import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className='bg-[#0A0D12] px-4 md:px-30 py-10 md:py-20 flex flex-col gap-4 md:flex-row md:justify-between text-white '>
      {/* block 1 */}
      <div className='flex flex-col gap-6 max-w-[380px] w-full mx-auto md:mx-0'>
        <div className='flex items-center gap-2 mb-5'>
          <Image src='/icons/red-logo.svg' alt='logo' width={30} height={30} />
          <p className='font-extrabold text-[32px]'>Foody</p>
        </div>
        <p className='text-lg font-medium mb-10'>
          Enjoy homemade flavors & chef’s signature dishes, freshly prepared
          every day. Order online or visit our nearest branch.
        </p>
        <div className='flex flex-col gap-5'>
          <p className='text-lg font-extrabold'>Follow on Social Media</p>
          <div className='flex gap-3'>
            <Link
              href='https://www.facebook.com'
              target='_blank'
              className='size-10 border border-[#252B37] rounded-full flex items-center justify-center'
            >
              <Image
                src='/icons/fb.svg'
                alt='facebook icon'
                width={11}
                height={21}
              />
            </Link>

            <Link
              href='https://www.instagram.com'
              target='_blank'
              className='size-10 border border-[#252B37] rounded-full flex items-center justify-center'
            >
              <Image
                src='/icons/ig.svg'
                alt='instagram icon'
                width={21}
                height={21}
              />
            </Link>

            <Link
              href='https://www.linkedin.com'
              target='_blank'
              className='size-10 border border-[#252B37] rounded-full flex items-center justify-center'
            >
              <Image
                src='/icons/linkedin.svg'
                alt='linkedin icon'
                width={17}
                height={17}
              />
            </Link>

            <Link
              href='https://www.tiktok.com'
              target='_blank'
              className='size-10 border border-[#252B37] rounded-full flex items-center justify-center'
            >
              <Image
                src='/icons/tiktok.svg'
                alt='tiktok icon'
                width={18}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='flex gap-4 lg:gap-16'>
        {/* Block 2 */}
        <div className='flex-1 flex flex-col gap-5'>
          <Link href='#' className='text-lg font-extrabold'>
            Explore
          </Link>
          <Link href='#' className='text-lg font-medium'>
            All Food
          </Link>
          <Link href='#' className='text-lg font-medium'>
            Nearby
          </Link>
          <Link href='#' className='text-lg font-medium'>
            Discount
          </Link>
          <Link href='#' className='text-lg font-medium'>
            Best Seller
          </Link>
          <Link href='#' className='text-lg font-medium'>
            Delivery
          </Link>
          <Link href='#' className='text-lg font-medium'>
            Lunch
          </Link>
        </div>
        {/* Block 3 */}
        <div className='flex-1 flex flex-col gap-5'>
          <Link href='#' className='text-lg font-extrabold'>
            Help
          </Link>
          <Link href='#' className='text-lg font-medium'>
            How to Order
          </Link>
          <Link href='#' className='text-lg font-medium'>
            Payment Methods
          </Link>
          <Link href='#' className='text-lg font-medium'>
            Track My Order
          </Link>
          <Link href='#' className='text-lg font-medium'>
            FAQ
          </Link>
          <Link href='#' className='text-lg font-medium'>
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
