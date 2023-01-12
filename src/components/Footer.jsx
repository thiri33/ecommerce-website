import React from "react";
import { logo, app , pay, play } from "../assets";
import { footerLinks, socialMedia } from '../constants';
import { Link } from "react-router-dom";

const Footer = () => (

  <footer className={`flex flex-wrap justify-between bg-[#E5D1B8] py-[40px] px-[80px]`}>
    <div className={`flex flex-col items-start mb-[20px]`}>
      <img src={logo} alt="cara" className="w-[124px] h-[32px] mb-[30px]"/>
      <h4 className={`font-bold`}>Contact</h4>
      <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
      <p><strong>Phone:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
      <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
    
      <div className="mt-10 flex flex-col justify-between sm:mb-0 mb-10">
        <h4 className={`font-bold text-[14px]`}>Follow Us</h4>
        <div className="flex flex-row md:mt-0 mb-[6px]">
          {socialMedia.map((social, index) => (
            <a key={social.id} href={social.link}>
              <i className={`${social.icon} w-[30px] h-[30px] objext-contain cursor-pointer ${index !== socialMedia-length -1 ? 'mr-1' : 'mr-0' }`} />
            </a>
          ))}
        </div>
      </div>
</div>
<div className="flex flex-col">


      <div className="flex justify-between items-start mb-5">
      {footerLinks.map((footerLink) => (
        <div key={footerLink.title} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-spartan font-medium text-[18px] leading-[27px]">
            {footerLink.title}
          </h4>
          <ul className="list-none mt-4">
            {footerLink.links.map((link, index) => (
              <li key={link.name}
                className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-[#c54809] cursor-pointer ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
              >
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
</div>
<div>
      <div className="flex flex-col items-start mt-4 sm:mt-0">
      <h4 className={`font-bold text-[14px] pb-5`}>Install App</h4>
      <p className={`text-[#465b52] text-[13px] mb-2`}>From App Store or Google Play</p>
        <div className="flex">
          <img src={app} alt="app" className={`border border-solid border-[#482614] rounded-md m-[10px_0_15px_0]`}/>
          <img src={play} alt="play" className={`border border-solid border-[#482614] rounded-md m-[10px_0_15px_0]`}/>
        </div>
          
      <p className={`text-[#465b52] text-[13px] mb-2`}>Secured Payment Gareways</p>
        <img src={pay} alt="pay" className="border border-solid rounded-md"/>
      </div>
        
      <p className={`text-[#465b52] text-[16px] mb-2`}>@ 2023, cara.com - react js/tailwind css</p>
          
    </div>
  </footer>
);

export default Footer;