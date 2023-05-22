const Navbar = () => {
  return (
    <div className='w-full h-auto p-4 md:py-7 md:px-10 flex flex-row justify-between items-center'>
        <div className='relative'>
            <h1 
            style={{textShadow: '0 0 15px rgba(255, 255, 255, 0.376)'}}
            className='text-xl md:text-4xl lg:text-5xl font-bold text-white/10 bg-clip-text bg-gradient-to-r from-pink-400 to-violet-800 hover:cursor-pointer'>vVid.</h1>
            <div className='w-[45px] h-[15px] md:w-[65px] md:h-[20px] absolute bg-gradient-to-r from-pink-500 to-violet-500 top-1 left-0 blur-md md:blur-lg opacity-95 animate-pulse'></div>
        </div>
        <div className='flex flex-row items-center justify-end gap-2'>
            <p className='text-gray-400 text-xs md:text-base font-light hover:underline decoration-blue-400 cursor-pointer'>username</p>
            <img src='images/user.webp' className='w-[30px] md:w-[45px] h-[30px] md:h-[45px] object-cover object-center rounded-full hover:cursor-pointer'/>
        </div>
    </div>
  )
}

export default Navbar