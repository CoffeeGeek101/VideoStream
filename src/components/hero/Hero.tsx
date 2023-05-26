
import Tagline from './tagline/Tagline'
import Videolist from './videolist/Videolist'

const Hero = () => {

  

  return (
    <div className='text-white p-5 flex flex-col md:flex-row relative overflow-hidden'>
      <div className="w-[500px] h-[400px] absolute top-[10px] left-[-100px] bg-gradient-radial from-pink-400 from-1% via-pink-600 to-slate-900 to-40% blur-3xl opacity-50 animate-pulse"></div>
      <div className="w-[1300px] h-[800px] absolute top-[-100px] right-[-100px] bg-gradient-radial from-blue-400 from-1% via-blue-600 to-slate-900 to-40% blur-3xl opacity-50 animate-pulse"></div>
      <Tagline/>
      <Videolist/>
    </div>
  )
}

export default Hero