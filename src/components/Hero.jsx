import React from 'react';

const Hero = () => (
  <section id="hero" className={`bg-[url("assets/hero.webp")] pr-[-30px]`}>
    <div>
        <h4 className={`pb-[15px] font-bold text-black`}>Trade-in-offer</h4>
        <h2 className={`font-bold text-black`}>
          Super value deals <br className={`text-[#1B1B1B]`} /> {" "}
          <span className={`text-[#E5D1B8]`}>On all products</span> {" "}
        </h2> 
        <p className="text-[#8f8e8e]">save more with coupons & up to 70% off!</p>
        
        
      </div>
  </section>
)

export default Hero;