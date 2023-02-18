import React from 'react'
import "./Hero.css"
import {BsFillArrowDownCircleFill} from "react-icons/bs"
import img2 from "../static/Images/1676115078290-removebg-preview.png";

function Hero() {
  return (
    <div className='wrapper bg-[#111] flex items-center justify-between
            px-[5rem] rounded-b-[1rem] w-[100%] h-[45rem] relative 
            '>
        {/* left side */}
        <div className='leftSide '>
        <div className='headings flex flex-col items-start justify-content h-[100%] w-[100%]'>
                <span className='text-[8rem] text-[grey]'>Hello!</span>{" "}
                <span className='text-[4rem]'><b>I Am Weru</b></span>
                <span className='text-[20px]  '>
                    A Creative Freelancer and Frontend Developer
                </span>
                {/* download ads */}
                <div className='mt-[60px] flex '>
                <button>
                    <span className='text-[1.2rem] text-[#333]'>Hire Me</span>
                    <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                        <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                    </svg>
                </button>
                    
                </div>
            </div>
        </div>
        {/* arrowdown  */}
        <div className="middleSide pb-60 pl-[60rem]">
            <div class="loader">
             <div class="loader_cube loader_cube--color"></div>
             <div class="loader_cube loader_cube--glowing"></div>
            </div>
            
        </div>

        {/* right side */}
        <div className="rightSide ">
            {/* <img src={img} alt="" /> */}
            <img src={img2} className='image h-[100%] w-[95%]' />
        </div>
        <div className='icon h-[2rem]'>
        <div class="loader2">
             <div class="loader2_cube loader_cube--color"></div>
             <div class="loader2_cube loader_cube--glowing"></div>
            </div>
        </div>
    </div>
  )
}

export default Hero