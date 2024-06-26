import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


export default function Product() {

  
 
   
 
  return (
    


    <div className=' w-full'>
        
        <section className="text-gray-600 body-font">

            <div className='flex flex-col justify-center text-center  items-center space-y-4 mt-8'>
            <h3 className='text-green-500 text-xl font-semibold'>Products</h3>
            <h1 className='font-bold text-3xl'>Discover a whole new level of gaming, with our consoles</h1>
            </div>


  <div className="container px-5 py-24 mx-auto ">
    <div className="flex  md:flex-row flex-col items-center justify-center -m-4 space-between lg: md:space-y-0 space-y-10 space-x-5 ">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[80%] shadow-lg border-2 border-solid hover:shadow-lg hover:scale-110 ease-in-out transition-all delay-100">
        
        <Link className=" block h-48 rounded overflow-hidden" href={"/Products"}> <Image src={"/xboxseriesS.jpg"} alt="ecommerce" className=" object-contain object-center w-full h-full block" width={500} height={500}></Image> </Link>
        
        <div className="mt-4 ">
          <h2 className="text-gray-900 title-font text-lg font-medium">XBox Series S</h2>
          <p className="mt-1">£249.99</p>
        </div>  

      </div>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-[80%] shadow-lg border-2 border-solid hover:scale-110 ease-in-out transition-all delay-100">
      <Link className="block relative h-48 rounded overflow-hidden" href={"/Products"}> <Image src={"/ps5.webp"} alt="ecommerce" className=" object-contain object-center w-full h-full block" width={400} height={400}></Image> </Link>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">PlayStation 5</h2>
          <p className="mt-1">£404.99</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[80%] shadow-lg border-2 border-solid hover:scale-110 ease-in-out transition-all delay-100">
      <Link className="block relative h-48 rounded overflow-hidden" href={"/Products"}> <Image src={"/seriesX.jpg"} alt="ecommerce" className="object-contain object-center w-full h-full block" width={400} height={400}></Image> </Link>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">Xbox Series X</h2>
          <p className="mt-1">£449.99</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-[80%] shadow-lg border-2 border-solid hover:scale-110 ease-in-out transition-all delay-100">
      <Link className="block relative h-48 rounded overflow-hidden" href={"/Products"}> <Image src={"/ps4.webp"} alt="ecommerce" className=" object-contain object-center w-full h-full block" width={400} height={400}></Image> </Link>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">PlayStation 4</h2>
          <p className="mt-1">£179.99</p>
        </div>
      </div>

      
    </div>
  </div>
</section>
    </div>
  )
}
