import React from 'react'
import { a6 } from "../assets";

const Intro = () => (
  <>
    <section className={`flex items-center py-[40px] px-[80px] bg-[#E5D1B8]`}>
      <img src={a6} alt="" className={`w-[50%] h-auto`} />
      <div className={`pl-[40px]`}>
    <h2 className={`font-bold`}>Who We Are?</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
      culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>

  <section className={`text-center py-[40px] px-[80px] font-bold bg-[#E5D1B8]`}>
    <h1>Download Our<a href="#"> App</a></h1>
    <div className={`w-[70%] h-[100%] m-[30px_auto_0_auto]`}>
      <video autoplay muted loop src="src/assets/about/1.mp4" alt="autoplay_muted_loop" className={`w-[100%] h-[100%] rounded-[20px]`}></video>
    </div>
  </section>
  </>
)

export default Intro