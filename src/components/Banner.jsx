import React from "react";

const banner = () => (
  <section className={`flex flex-col justify-center text-center items-center bg-[url("assets/banner/b2.jpg")] w-[100%] h-[40vh] bg-cover bg-center`}>
    <h4 className={`text-[#fff] text-[16px]`}>Repair Services</h4>
    <h2 className={`text-[#fff] text-[30px] py-[10px] px-0`}>Up to <span className={`text-[#ef3636]`}>70% Off</span> - All t-Shirts & Accessories</h2>
    <button className={`normal hover:text-white hover:bg-[#9b2f08]`}>Explore More</button>
  </section>
)

export default banner;