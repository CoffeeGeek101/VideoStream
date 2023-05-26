import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Player from './components/videoplayer/Player';
import './index.css'
import { useAppSelector } from './redux/store';

function App() {

  const isOpen = useAppSelector(state => state.player.isOpen);
  const video = useAppSelector(state => state.player.video);

  return (
    <div className='flex flex-col relative w-sccreen h-screen bg-slate-900 font-wix'>
      <Player isOpen={isOpen} video={video} />
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
