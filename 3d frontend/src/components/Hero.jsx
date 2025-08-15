import React from 'react'
import { IoDiamond } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <main className='flex lg:mt-20 flex-col  lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
            <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
                {/* tag box */}
                <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] shadow-[0_0_15px_rgba(255.255,255,0.4)] rounded-full'>
                    <div className='absolute inset-[3px] bg-black  rounded-full gap-1 flex items-center justify-center'>
                        <i className="flex items-center gap-2">
                            <IoDiamond />
                            INTRODUCING
                        </i>
                    </div>
                </div>
                {/* main heading */}
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white my-8 tracking-wider'>
                    EMAIL FOR 
                    <br/> DEVELOPERS
                </h1>
                {/* description */}
                <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                    Ensure your messages land where they matter — in the inbox. Send transactional and marketing emails at scale.
                </p>

                {/* buttons */}
                <div className='flex flex-row gap-4'>
                    <a  className='flex  items-center gap-2 mt-3 border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="">Documentation<span ><FaLink /></span></a>
                    <a  className='flex items-center gap-2 mt-3 border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white ' href="">GetStarted<span ><FaLink /></span></a>
                </div>
            </div>
            {/* 3D robot */}
             <Spline 
             data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
                data-aos-duration="3000"
      className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/STaCgZTYc4GBpXZj/scene.splinecode" />
  
        </main>
    )
}

export default Hero