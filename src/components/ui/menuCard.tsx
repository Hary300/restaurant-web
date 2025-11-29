import Image, { StaticImageData } from 'next/image';
import React from 'react';

type MenuCardProps = {
  icon: string | StaticImageData;
  title: string;
};

const MenuCard: React.FC<MenuCardProps> = ({ icon, title }) => {
  return (
    <div className='flex flex-col gap-1.5 p-2 shadow-md rounded-lg bg-white items-center hover:scale-105 transition-transform'>
      <div className=' flex justify-center items-center '>
        <Image src={icon} alt={title} width={65} height={65} />
      </div>
      <p className='text-center'>{title}</p>
    </div>
  );
};

export default MenuCard;
