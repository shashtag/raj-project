import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className='pt-[85px] px-6 pb-24 lg:grid lg:grid-cols-5 lg:gap-4 bg-[#D9ECFF]'>
      <div className='relative h-11  mb-10  w-32 lg:col-span-2'>
        <Image src='/logo.svg' alt='logo' layout='fill' />
      </div>
      <div>
        <div className='text-[#007BFF] font-["poppins] font-medium text-3xl leading-[48px]'>
          company
        </div>
        <div className='leading-[48px] text-2xl '>home</div>
        <div className='leading-[48px] text-2xl '>careers</div>
        <div className='leading-[48px] text-2xl '>help center</div>
        <div className='leading-[48px] text-2xl '>contact us</div>
      </div>
      <div>
        <div className='text-[#007BFF] font-["poppins] font-medium text-3xl leading-[48px]'>
          legal
        </div>
        <div className='leading-[48px] text-2xl '>privacy</div>
        <div className='leading-[48px] text-2xl '>terms of service</div>
        <div className='leading-[48px] text-2xl '>disclaimerr</div>
        <div className='leading-[48px] text-2xl '>safety</div>
      </div>
      <div>
        <div className='text-[#007BFF] font-["poppins] font-medium text-3xl leading-[48px]'>
          contact us
        </div>
        <div className='leading-[48px] text-2xl '>+91-92512124124</div>

        <div className='text-[#007BFF] font-["poppins] font-medium text-3xl leading-[48px]'>
          registered office
        </div>
        <div className='leading-[48px] text-2xl '>
          Dasta Concerto, Sarjapur Bangalore
        </div>
      </div>
    </div>
  );
};

export default Footer;
