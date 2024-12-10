import React from 'react'

const Video = () => {
  return (
    <div className='flex flex-col items-start justify-center w-[70%] max-md:w-[62%] h-80 max-sm:h-30 max-md:h-44 max-lg:h-[13rem] max-sm:w-[85%] '>

    <iframe src="https://drive.google.com/file/d/1utzwKmYWXK-RyBYjQfyNH2ANjGlOfgAn/preview" 
    allow="autoplay" 
    className='w-full h-full'></iframe>
    </div>
  )
}

export default Video