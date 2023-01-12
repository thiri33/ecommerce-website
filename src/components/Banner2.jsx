import React from "react";


const Banner2 = () => (
  <section className={`block py-[40px] px-[80px] w-[100%] h-[100%] bg-[#E5D1B8] md:px-[40px] md:py-[40px] `}>
    <div className="flex justify-center items-start text-center flex-col min-w-[580px] h-[50vh] p-[30px] bg-b1 bg-cover bg-[top_0_bottom_0] md:bg-[top_0_right_50%] md:bg-[bottom_0_left-10%]">
      <h4 className={`font-spartan font-light text-[20px] text-white`}>crazy deals</h4>
      <h2 className={`font-spartan leading-[54px] font-extrabold text-[28px] text-white`}>buy 1 get 1 free</h2>
      <span className={`font-medium text-[14px] text-white pb-[15px]`}>The best classic dress is on sale at cara</span>
      <button className={`font-semibold text-[13px] bg-transparent border-solid border-white outline-none cursor-pointer transition-[0.2s] text-white border px-[16px] py-[7px] hover:border hover:border-solid hover:border-green hover:bg-green`}>Learn More</button>
    </div>
  </section>
)

export default Banner2;