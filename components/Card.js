import React from "react";

const Card = () => {
  return (
    <div className='my-8 mx-4 p-8 w-[calc(100%-32px)] rounded-3xl leading-10 bg-card tracking-[0.374px] backdrop-blur-[75px]'>
      <div className=' font-bold text-4xl leading-10'>
        Default <br /> Bold/Large/Title <br /> 34
      </div>
      <div className='mt-4 text-base leading-5 tracking-[-0.24px] text-[#ebebf5] opacity-60'>
        Content <br /> description
        <br /> here
      </div>
    </div>
  );
};

export default Card;
