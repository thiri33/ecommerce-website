import React from "react";

const Banner3 = () => (
  <section className={`flex flex-wrap justify-between bg-[#E5D1B8] py-[40px] px-[80px] md:px-[40px] md:py-[40px]`}>
    <div className="flex justify-center items-start text-center flex-col min-w-[580px] h-[50vh] p-[30px] bg-b2 bg-cover bg-[top_0_right_30%] md:min-w-full md:h-[50vh] md:p-[30px] sm:h-[40vh]">
      <h4 className={`font-spartan font-light text-[20px] text-[#8f8e8e]`}>crazy deals</h4>
      <h2 className={`font-spartan leading-[54px] font-extrabold text-[28px] text-[#E5D1B8]`}>buy 1 get 1 free</h2>
      <span className={`font-medium text-[14px] text-black pb-[15px]`}>The best classic dress is on sale at cara</span>
      <button className={`font-semibold text-[13px] bg-transparent border-solid border-[#E5D1B8] outline-none cursor-pointer transition-[0.2s] text-[#E5D1B8] border px-[16px] py-[7px] hover:border hover:border-solid hover:border-[#c54809] hover:text-white hover:bg-[#c54809]`}>Learn More</button>
    </div>

    <div className="flex justify-center items-start text-center flex-col min-w-[580px] h-[50vh] p-[30px] bg-b3 bg-cover bg-[top_0_right_30%] md:min-w-full md:h-[50vh] md:p-[30px] sm:h-[40vh]" >
      <h4 className={`font-spartan font-light text-[20px] text-[#383838]`}>spring/summer</h4>
      <h2 className={`font-spartan leading-[54px] font-extrabold text-[28px] text-[#E5D1B8]`}>upcoming season</h2>
      <span className={`font-medium text-[14px] text-black pb-[15px]`}>The best classic dress is on sale at cara</span>
      <button className={`font-semibold text-[13px] bg-transparent border-solid border-[#E5D1B8] outline-none cursor-pointer transition-[0.2s] text-[#E5D1B8] border px-[16px] py-[7px] hover:border hover:border-solid hover:border-[#c54809] hover:text-white hover:bg-[#c54809]`}>Collection</button>
    </div>
  </section>

)

export default Banner3