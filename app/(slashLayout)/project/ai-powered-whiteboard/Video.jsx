import React from 'react'
// max-md:w-[62%] h-80 max-sm:h-30 max-md:h-44 max-lg:h-[13rem] max-sm:w-[85%] 
const Video = () => {
  return (
    <div className='flex flex-col items-start justify-center max-sm:w-[90%] w-[70%] max-sm:h-40 h-56 '>

    <iframe src="https://drive.google.com/file/d/1utzwKmYWXK-RyBYjQfyNH2ANjGlOfgAn/preview" 
    allow="autoplay" 
    className='w-full h-full'></iframe>
    </div>
  )
}

export default Video