import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex flex-col items-center text-center space-y-10'>
        <div className='flex flex-col space-y-3'>
            <h1 className='text-3xl font-bold'>Subscribe to our newsletter</h1>
            <p>Stay informed and never miss out on updates - subscribe to our newsletter!</p>
        </div>
        <div className='border-b-2 border-gray-500 w-2/5  '><input className='focus:outline-0 ' type="text"  /></div>
        <div>
            <button className='px-10 py-4 bg-transparent border-2 border-black'>Subscribe</button>
        </div>
    </div>
  )
}

export default Subscribe