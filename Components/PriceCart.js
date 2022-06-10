import React from 'react'

const PriceCart = () => {
  return (
    <div>
        <div className="h-fit bg-white text-center">
            <h1 className='text-5xl font-sans font-bold pt-6 py-3'>A Plan for Every Dog's Needs</h1>
            <p className='text-base font-serif font-light text-gray-500 py-2  pb-7'>Simple and affordable price plans for your and your dog.</p>
            <div className="flex flex-row justify-center space-x-8 py-10">
            <div class="flex justify-center border-2 border-gray-200  rounded-lg ">
                <div class="block rounded-lg w-96  shadow-lg bg-white max-w-sm text-center">
                    <div class="py-3 px-6 bg-gray-100 font-semibold font-serif text-2xl  border-b border-gray-300">
                    Chihuahua
                    </div>
                    <div class="p-6">
                    <h1 class="text-gray-900 text-5xl font-bold mb-2">Free</h1>
                    <h3  class="text-gray-700 text-base mb-4">5 Matches Per Day</h3>
                    <h3  class="text-gray-700 text-base mb-4">10 Messages Per Day</h3>
                    <h3  class="text-gray-700 text-base mb-4">Unlimited App Usage</h3>
                     
                    <button type="button" class="w-60 inline-block px-10 py-3  text-black bg-white border-1 border-solid border-black rounded-lg  font-medium text-xs leading-tight uppercase  shadow-md hover:bg-zinc-800 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" >Sign Up</button>
                    </div>
                </div>
            </div>

            <div class="flex justify-center border-2 border-gray-200  rounded-lg">
                <div class="block rounded-lg w-96  shadow-lg bg-white max-w-sm text-center">
                    <div class="py-3 px-6 bg-gray-100 font-semibold font-serif text-2xl  border-b border-gray-300">
                    Labrador
                    </div>
                    <div class="p-6">
                    <h1 class="text-gray-900 text-5xl font-bold mb-2">$49 / mo</h1>
                    <h3  class="text-gray-700 text-base mb-4">Unlimited Matches</h3>
                    <h3  class="text-gray-700 text-base mb-4">Unlimited Messages</h3>
                    <h3  class="text-gray-700 text-base mb-4">Unlimited App Usage</h3>
                     
                    <button type="button" class="w-60 py-3  inline-block px-10     text-black bg-white border-1 border-solid border-black rounded-lg     font-medium text-xs leading-tight uppercase  shadow-md   hover:shadow-lg hover:bg-zinc-800 hover:text-white focus:bg-zinc-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign Up</button>
                    </div>
                </div>
            </div>

            <div class="flex justify-center  border-2 border-gray-200  rounded-lg ">
                <div class="block rounded-lg  w-96 shadow-lg bg-white max-w-sm text-center">
                    <div class="py-3 px-6 bg-gray-100 font-semibold font-serif text-2xl  border-b border-gray-300">
                    Mastiff
                    </div>
                    <div class="p-6">
                    <h1 class="text-gray-900 text-5xl font-bold mb-2">$99 / mo</h1>
                    <h3  class="text-gray-700 text-base mb-4">Pirority Listing</h3>
                    <h3  class="text-gray-700 text-base mb-4">Unlimited Matches</h3>
                    <h3  class="text-gray-700 text-base mb-4">Unlimited Messages</h3>
                    <h3  class="text-gray-700 text-base mb-4">Unlimited Messages</h3>

                     
                    <button type="button" class="w-60 inline-block px-10 py-3    text-black bg-white border-1 border-solid border-black rounded-lg    font-medium text-xs leading-tight uppercase  shadow-md hover:bg-zinc-800 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign Up</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PriceCart