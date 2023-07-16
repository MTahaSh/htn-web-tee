import React from 'react'
import { TiLocationArrowOutline } from "react-icons/ti"
import { CgSoftwareDownload } from "react-icons/cg"
import { BsChatDots } from "react-icons/bs"

const Stats = () => {
    return (
        <div className='flex md:flex-row flex-col gap-x-5 px-6 pt-16 pb-32 my-10 md:space-y-0 space-y-10 transition-all delay-100 ease-in-out border-b-2 border-gray-300'>
            <div className='flex flex-col items-center space-y-6 '>
                <div>
                <TiLocationArrowOutline className='lg:text-8xl md:text-6xl text-8xl text-gray-300' />
                </div>
                <h2 className='lg:text-2xl md:text-lg text-2xl font-bold '>Free Shipping Worldwide</h2>
                <p className='lg:text-md md:text-sm text-md text-gray-500 text-center'>Shop hassle-free with Free Shipping Worldwide! Enjoy delivery to your doorstep, no matter where you are, without any extra charges. Say goodbye to shipping fees and shop conveniently from anywhere in the world.</p>
            </div>
            <div className='flex flex-col items-center space-y-6'>
                <div>
                <CgSoftwareDownload className='lg:text-8xl md:text-6xl text-8xl text-gray-300' />
                </div>
                <h2 className='lg:text-2xl md:text-lg text-2xl font-bold '>Free Returns</h2>
                <p className='lg:text-md md:text-sm text-md text-gray-500 text-center'>
                Shop worry-free with Free Returns! Return your purchase at no extra cost if you are not satisfied. Hassle-free returns and customer satisfaction are our priorities. Shop confidently, knowing you can change your mind without additional fees.</p>
            </div>
            <div className='flex flex-col items-center space-y-6'>
                <div>
                <BsChatDots className='lg:text-8xl md:text-6xl text-8xl text-gray-300' />
                </div>
                <h2 className='lg:text-2xl md:text-lg text-2xl font-bold '>24h Fast Support</h2>
                <p className='lg:text-md md:text-sm text-md text-gray-500 text-center'>
                24/7 Fast Support! Get reliable assistance anytime, day or night. Our dedicated team is here to help with any inquiries or issues promptly and efficiently.</p>
            </div>
        </div>
    )
}

export default Stats