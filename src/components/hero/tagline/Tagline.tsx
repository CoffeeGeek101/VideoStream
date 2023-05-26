const Tagline = () => {
  return (
    <div className='flex flex-col items-center md:items-start py-4 md:gap-5 md:p-5 lg:p-8 z-10'>
        <p className='font-semibold text-lg xs:text-base xs:font-bold md:text-5xl md:py-2 lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-violet-500'>Unleash Your Entertainment Journey:</p>
        <div className="flex flex-row md:flex-col text-sm md:text-5xl md:font-bold gap-5 ">
        <p className=''> Stream</p>
        <p className='ml-0 md:ml-[30px]'> Discover</p>
        <p className='ml-0 md:ml-[90px]'> Repeat!</p>
        </div>
    </div>
  )
}

export default Tagline