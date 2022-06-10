import React from 'react'
import { FaBeer } from 'react-icons/fa';
import {BsApple} from 'react-icons/bs';
import {IoLogoGooglePlaystore} from 'react-icons/io5';
const NavBarBottomElement = () => {
  return (
    <div className="1st  "   style={{backgroundColor : "#f83f5b" , height: '36rem'}} >
        <div className="w-3/4  flex flex-row mx-32 pt-7 ">
            <div className=" ml-16 ">
                <h1 className="font-bold text-6xl pt-10 text-white w-3/4 -mr-28 leading-relaxed  ">Meet new and interesting dogs nearby.</h1>
                <button style={{borderWidth:'1px'}} className=' mt-4  border-zinc-700 border-solid hover:border-zinc-900 rounded-lg hover:bg-zinc-800  bg-zinc-700  px-3 py-1 text-white text-2xl font-serif font-thin mx-1.5 ' > <BsApple className=' text-white inline' /> Download</button>
                <button style={{borderWidth:'1px'}} className=' border-solid  hover:bg-white text-white hover:text-black rounded-lg hover:border-slate-300 text-2xl font-serif font-thin mx-1.5 px-3 py-1 '><IoLogoGooglePlaystore className='inline text-white hover:text-black '/> Download </button>
            </div>
            <div className="">
                <img src="./images/iphone6.png" className=' pt-10 rotate-19 z-0'  style={{width:"29rem" }} alt=""   />
            </div>
        </div>
    </div>
  )
}

export default NavBarBottomElement