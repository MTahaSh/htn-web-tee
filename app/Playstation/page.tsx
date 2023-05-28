import Image from 'next/image'
import React from 'react'

export default function Xbox() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">PlayStation Consoles</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Experience gaming excellence with PlayStation consoles. Unleash breathtaking graphics, seamless gameplay, and a vast library of captivating titles. Elevate your gaming journey with PlayStation.</p>
    </div>

    <div className="flex flex-wrap -m-4">


      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src="/ps5.webp" width={400} height={400}></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-xl title-font font-bold text-black mb-1">PlayStation 5 Console</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">£399.99</h1>
            <p className="leading-relaxed">
Experience gaming like never before with the PlayStation 5. Discover stunning graphics, lightning-fast performance, and immersive gameplay. Level up your gaming journey with the extraordinary power of the PS5.</p>
          </div>
        </div>
      </div>



      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src="/ps4.webp" width={400} height={400}></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-xl title-font font-bold text-black mb-1">PlayStation 4 Console</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">£179.99</h1>
            <p className="leading-relaxed">
Enter a world of gaming greatness with the PlayStation 4. Immerse yourself in stunning visuals, captivating gameplay, and a vast library of unforgettable titles. Experience the thrill of console gaming at its finest with the PlayStation 4.</p>
          </div>
        </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src="/mwPs5.webp" width={400} height={400}></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-xl title-font font-bold text-black mb-1">PlayStation®5 Console – Call of Duty® Modern Warfare II Bundle</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">£437.43</h1>
            <p className="leading-relaxed">
Experience the ultimate gaming with the PlayStation 5 MW Bundle. Unleash the power, speed, and excitement of the PS5 combined with the thrilling action of Call of Duty: Modern Warfare.</p>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src="/gowrPs5.webp" width={400} height={400}></Image>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-xl title-font font-bold text-black mb-1">PlayStation®5 Console – God of War™ Ragnarok Bundle</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">£453.64</h1>
            <p className="leading-relaxed">
Embark on an epic gaming journey with the PlayStation 5 God of War Ragnarok Bundle. Unleash the power of the PS5 while immersing yourself in the captivating world of God of War. Experience breathtaking graphics, exhilarating combat, and a legendary adventure like never before. Elevate your gaming with the PlayStation 5 God of War Ragnarok Bundle.</p>
          </div>
        </div>
      </div>
     

      
    </div>
  </div>
</section>
    </div>
  )
}
