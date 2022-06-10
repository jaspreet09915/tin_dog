import React from 'react'
import {BsApple} from 'react-icons/bs';
import {IoLogoGooglePlaystore} from 'react-icons/io5';
const DownloadOurApp = () => {
  return (
<div className="h-fit bg-pink-custom-bright mx-auto justify-center text-center align-middle flex">
    <div className=' w-2/4 py-24'>
        <h1 className='text-5xl font-bold font-serif text-white py-4 '>Find the True Love of Your Dog's Life Today.</h1>
        <div className="">
        <button style={{borderWidth:'1px'}} className=' mt-4  border-zinc-700 border-solid hover:border-zinc-900 rounded-lg hover:bg-zinc-800  bg-zinc-700  px-3 py-1 text-white text-2xl font-serif font-thin mx-1.5 ' > <BsApple className=' text-white inline' /> Download</button>
                <button style={{borderWidth:'1px'}} className=' border-solid  hover:bg-white text-white hover:text-black rounded-lg hover:border-slate-300 text-2xl font-serif font-thin mx-1.5 px-3 py-1 '><IoLogoGooglePlaystore className='inline text-white hover:text-black '/> Download </button>
        </div>
    </div>
</div>
  )
}

export default DownloadOurApp