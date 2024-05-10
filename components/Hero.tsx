import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero min-h-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(/banner2.png)` }}>
      <div className="container mx-auto px-5 sm:px-10 py-20 flex flex-col items-start justify-center h-full"> <h5 className="text-xs font-semibold text-grey opacity-60 uppercase tracking-widest leading-snug mt-8">Welcome to Our Store</h5>
<div className="leading-snug mb-2">
  <h1 className="text-[42px] sm:text-[42px] md:text-[48px] lg:text-[48px] font-custom font-black text-green1 mt-4 mb-4">Shop Our <br></br> <span className="text-red-1 opacity-70" >Ladies</span> Collection</h1>
  
  </div>     
        <p className="text-lg font-body font-semibold text-grey opacity-60 leading-snug mb-4"> Enjoy discounts of up to 30%!<br></br> Dress elegantly and feel sexy all-day</p>
      
        <div className="flex gap-4 mt-4">
        <button className="btn bg-green1 px-5 py-3 rounded-lg text-white">Shop Now</button>  
        <button className="btn bg-red-1 opacity-65 px-5 py-3 rounded-lg text-white">Learn More</button> ```


        </div>
      </div>
    </section>
  );
};

export default Hero;