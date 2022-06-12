import Image from "next/image";
import React from "react";
import Card from "./Card";

const Section = () => {
  return (
    <div className=' font-[SF Pro Display] text-white bg-no-repeat pt-[95vw] lg:pt-[65vw] pb-[120px] bg-[url(/creditverse.svg)] bg-cover lg:bg-[url(/creditverselg.svg)] '>
      <div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:px-[4.5rem]'>
        <div>
          <Card />
          <Card />
        </div>
        <div className='lg:flex lg:items-center'>
          <Card />
        </div>
      </div>

      <div className='absolute left-[45%]  w-96 -mt-40 h-96 hidden lg:block '>
        <Image src='/cool.svg' alt='hand image' layout='fill' />
      </div>

      <div className='lg:grid lg:mt-60 lg:grid-cols-9  lg:border lg:mx-[5.5rem] rounded-3xl'>
        <div className='lg:col-span-4'>
          <div className='relative mx-auto w-96 lg:w-[700px] -mt-10 h-[500px] lg:h-full lg:bottom-[-42px]  lg:left-[-160px]'>
            <Image src='/handimg.svg' alt='hand image' layout='fill' />
          </div>
        </div>
        <div className='lg:col-span-4'>
          <div className='font-bold leading-10 lg:leading-[82px] text-3xl lg:text-6xl mt-8 text-center font-[poppins]'>
            a super credit-cool community
          </div>
          <div className='leading-5 lg:leading-10 mt-6  text-sm lg:text-3xl text-center mx-[20vw] lg:mx-0 font-[poppins]'>
            It's super-exclusive, super-fun and super-helpful.
          </div>
          <div className='relative mx-auto w-72 -mt-4 lg:mt-0 h-44  '>
            <Image src='/discord.svg' alt='discord' layout='fill' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
