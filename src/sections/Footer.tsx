import logo from '@/assets/logosaas.png';
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkdIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="px-5 md:px-10">
        <div className='inline-flex relative before:content-[""] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB93CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute '>
        <Image src={logo} alt='logo image' height={40} className='relative' />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX/>
          <SocialInsta/>
          <SocialPin/>
          <SocialLinkdIn/>
          <SocialYoutube/>
        </div>
        <p className='mt-6'>&copy; 2024 Your Company, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
