import React from 'react'
 // Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faHeart,
  faCircleCheck,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";
const AdvantageOfApp = () => {
  
  return (
    <div className='h-fit py-36 bg-white z-40 relative'> 
        <div className=" flex flex-row space-x-36 text-center justify-center mx-52">
            <div className="">
            <FontAwesomeIcon
                className='my-3 text-6xl text-pink-custom-normal hover:text-pink-custom-dark'
                icon={faCircleCheck}
                // style={{ fontSize: 59, color: "#ef8172" }}
              />
             <h1 className='font-bold text-3xl py-2' >Easy to use.</h1>
             <p className='font-light font-serif text-base text-gray-600'>So easy to use, even your dog could do it.</p>
            </div>
            <div className="">
            <FontAwesomeIcon
                className='my-3 text-6xl text-pink-custom-normal  hover:text-pink-custom-dark'

                icon={faBullseye}
                // style={{ fontSize: 59, color: "#ef8172 "  }}
              />
              <h1 className='font-bold text-3xl py-2' >Elite Clientele</h1>
              <p className='font-light font-serif text-base text-gray-600'>So easy to use, even your dog could do it.</p>
            </div>
            <div className="">
            <FontAwesomeIcon
                className='my-3 text-6xl text-pink-custom-normal hover:text-pink-custom-dark'
                icon={faHeart}
                // style={{ fontSize: 59, color: "#ef8172" }}
              />
              <h1 className='font-bold text-3xl py-2' >Guaranteed to work.</h1>
              <p className='font-light font-serif text-base text-gray-600'>Find the love of your dog's life or your money back.</p>
            </div>
        </div>
    </div>
  )
}

export default AdvantageOfApp