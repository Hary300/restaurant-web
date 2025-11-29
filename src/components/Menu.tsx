import React from 'react';
import MenuCard from './ui/menuCard';

const Menu = () => {
  return (
    <div className='mt-6 md:mt-12 px-4 md:px-30 grid grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-11.5 '>
      <MenuCard icon='/icons/all-food.svg' title='All Restaurant' />
      <MenuCard icon='/icons/location.svg' title='Nearby' />
      <MenuCard icon='/icons/discount.svg' title='Discount' />
      <MenuCard icon='/icons/best-seller.svg' title='Best Seller' />
      <MenuCard icon='/icons/delivery.svg' title='Delivery' />
      <MenuCard icon='/icons/lunch.svg' title='Lunch' />
    </div>
  );
};

export default Menu;
