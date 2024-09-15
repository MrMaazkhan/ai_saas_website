import Image from 'next/image';
import Logo from '@/assets/logosaas.png'
import React from 'react';


const ResponsiveNav = () => {
  return (
    <div className="responsive-nav">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn"><span></span></label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">

        <ul className='flex flex-col gap-6 mt-16 text-3xl text-white justify-center items-center font-semibold '>
      <li> <Image src={Logo} alt="sass logo" height={60} width={60}  /></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Customers</a></li>
          <li><a href="#">Updates</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveNav;
