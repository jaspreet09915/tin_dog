import React from 'react'

const Carousal = () => {
  return (
    <div> 
 <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
 
      <div class="carousel-item   active relative float-left w-full py-32 h-fit bg-pink-custom-normal">
        <div className="w-2/3   h-fit px-6 mx-auto">
          <h1 className=' cursor-default font-extrabold font-sans leading-10 text-white text-5xl'>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h1>
          <div className="relative mx-auto text-center my-5 text-white">
            <img src="./images/dog-img.jpg" className='rounded-full cursor-pointer w-20 m-4 inline' alt="" />
            <p className='inline cursor-pointer'>Pebbles, New York</p>
          </div>
        </div>
      </div>

     <div class="carousel-item relative float-left w-full  py-32 h-fit bg-pink-custom-normal">
       <div className="w-2/3 h-fit  px-6 mx-auto" >
          <h1 className='font-extrabold  cursor-default font- leading-10  text-white text-5xl'>My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h1>
          <div className="mx-auto relative text-center my-5 text-white ">
          <img src="./images/lady-img.jpg" alt="" className='rounded-full cursor-pointer w-20 m-4 inline' />
          <p className='inline cursor-pointer'> Beverly, Illinois</p>
          </div>
       </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <div className="h-40 bg-pink-custom-normal flex flex-row space-x-6 mx-auto align-middle justify-center">
    <img src="./images/TechCrunch.png" alt=""  className=' w-60 h-24'/>
    <img src="./images/tnw.png" alt=""  className=' w-60 h-24'/>
    <img src="./images/bizinsider.png" alt=""  className=' w-60 h-24'/>
    <img src="./images/mashable.png" alt=""  className=' w-60 h-24'/>
  </div>
</div>
    </div>
  )
}

export default Carousal