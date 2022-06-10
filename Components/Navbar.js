import React from 'react'

const Navbar = () => {
  return (
  <div className='  py-14  bg-pink-custom-bright' >
      <div className="nav_item w-3/4 mx-auto flex flex-row  ">
        <div className=' ml-5 mr-96 text-4xl font-bold font-sans cursor-pointer text-slate-200 hover:text-slate-100'>tindog</div>
        <div className="div flex flex-row ml-44 space-x-8">
        <div className="Contact  text-xl font-serif font-medium text-slate-300 hover:text-slate-200 py-2  cursor-pointer   ">Contact</div>
        <div className="price   text-xl font-serif font-medium text-slate-300 hover:text-slate-200  py-2 cursor-pointer ">Price</div>
        <div className="Download  text-xl font-serif font-medium text-slate-300 hover:text-slate-200  py-2 cursor-pointer  ">Download</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar