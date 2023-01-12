import React from "react";

const Newsletter = () => (
  <section className={`newsletter py-[40px] px-[80px] bg-[#E5D1B8]`}>
    <div>
      <h4 className={`text-[22px] font-bold text-[#E5D1B8]`}>Sign Up For Newsletters</h4>
      <p className={`text-[14px] font-semibold text-black`}>Get E-mail updates about our latest shop and <span className={`text-[#8f8e8e]`}>special offers.</span></p>
    </div>

    <div className={`flex w-[40%]`}>
      <input type="text" placeholder="Your email address"/>
      <button className="normal">Sign up</button>
    </div>
  </section>
)

export default Newsletter