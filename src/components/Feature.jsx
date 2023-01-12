import React from "react";
import { products } from '../constants';

const Feature = () => (
  <section className="text-center py-[40px] px-[80px] md:px-[40px] md:py-[40px] bg-[#E5D1B8]">
    <h2 className="font-spartan font-bold text-[46px] leading-[54px] text-black">Featured Products</h2>
    <p className="font-spartan text-[16px] mt-[15px] mb-[20px] text-[#c54809]">Summer Collection New Mordern Design</p>
    
    <div className={`flex flex-wrap justify-between pt-[20px] md:justify-center`}>
      {products.map((nav) => (
        <div 
          key={nav.id}
          className={`w-[23%] min-w-[250px] px-[12px] py-[10px] mx-0 my-[15px] border border-solid border-[#482614] rounded-[25px] shadow-[60px_60px_90px_rgba(0,0,0,0.02)] cursor-pointer relative transition-[0.2s_ease] hover:shadow-[60px_60px_90px_rgba(0,0,0,0.06)] md:m-[15px]`}
        >
          <img src={nav.img} alt="" className="w-full rounded-[20px]"/>
        
          <div className={`text-start py-[10px] px-0`}>
            <span className={`text-[#5a5a5a] text-[14px]`}>{nav.name}</span>
            <h5 className={`font-bold text-[16px] text-black pt-[7px]`}>{nav.title}</h5>
          
            <div className="text-[12px] text-[#f56720]">
              <i className="fas fa-star pr-[3px]"></i>
              <i className="fas fa-star pr-[3px]"></i>
              <i className="fas fa-star pr-[3px]"></i>
              <i className="fas fa-star pr-[3px]"></i>
              <i className="fas fa-star pr-[3px]"></i>
            </div>

            <h4 className={`font-spartan font-bold text-[15px] text-[#5a5a5a] pt-[7px]`}> $78</h4>
          </div>
          <a href="#"><i className="fas fa-shopping-cart cart font-medium text-[#5a5a5a] w-[40px] h-[40px] leading-10 bottom-[20px] right-[10px] rounded-[50px] bg-[#e8f6ea] border border-solid border-lightGreen absolute"></i></a>
        </div>
      ))}
    </div>
  </section>
);

export default Feature;