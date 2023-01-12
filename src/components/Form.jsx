import React from 'react'
import { people } from "../constants";

const Form = () => (
  
    <section id="form-details" className="bg-[#E5D1B8]">
      <form action="" className={`w-[65%] flex flex-col items-start `}>
        <span className={`text-[12px]`}>LEAVE A MESSAGE</span>
        <h2 className={`font-bold text-[26px] leading-9 py-[10px] px-0`}>WE love to hear from you</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="text" placeholder="E-mail"/>
        <input type="text" placeholder="Subject"/>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <button className={`text-[14px] font-semibold bg-[#c54809] text-[#fff] py-[12px] px-[20px] rounded-[4px] cursor-pointer border-none outline-none transition-[0.2s]`}>Submit</button>
      </form>

      <div>
          {people.map((nav) => (
            <div 
              key={nav.id} 
              className="flex items-start pb-[25px] pl-[40px]">
              <img src={nav.img} alt="" className="w-[65px] h-[65px] object-cover mr-[15px]" />
              <p className="m-0 text-[13px] leading-[25px]">
                <span className="block text-[16px] font-bold text-black">
                  {nav.name}
                </span> 
                {nav.text} <br /> {nav.phone} <br /> {nav.email}  
              </p>
            </div>
          ))}
        </div>
        
    </section>
  
)
export default Form