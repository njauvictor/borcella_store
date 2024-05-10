import React from 'react';

const Hero: React.FC = () => {
  return (
<section className="hero min-h-screen bg-cover bg-no-repeat bg-center md:min-h-0" style={{ backgroundImage: `url(/banner2.png)` }}>

      <div className="container mx-auto px-4 py-20 flex flex-col items-start justify-center h-full">
        <h5 className="text-[13px] sm:text-[13px] md:text-[14px] lg:text-[15px]  text-grey-2 uppercase tracking-widest mt-10 mb-1">welcome to our store</h5>
        <h1 className="max-w-[65%] text-[32px] sm:text-[34px] md:text-[38px] lg:text-[44px] font-custom font-black text-green1 mt-4 mb-4">
    Shop Our <br></br><span className="text-red-1 opacity 75">Ladies' </span>Collections
</h1>

  
<p className="max-w-[50%] text-[13px] sm:text-[13px] md:text-[15px] lg:text-[17px] text-body font-semibold text-grey-2 leading-snug mt-2 mb-10">Shop a wide range of clothing, accessories, and more. Look elegant & feel sexy all-day!</p>

        <div className="flex gap-4">
        <button className="btn bg-red-1 hover:bg-opacity-100 active:bg-opacity-100 opacity-75 hover:opacity-100 active:opacity-100 py-3 px-5 rounded-lg text-body text-white text-[13px] transition duration-300">Shop Now</button>
<button className="btn bg-green1 hover:bg-opacity-100 active:bg-opacity-100 opacity-75 hover:opacity-100 active:opacity-100 py-3 px-5 rounded-lg text-body text-white text-[13px] transition duration-300">Learn More</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;