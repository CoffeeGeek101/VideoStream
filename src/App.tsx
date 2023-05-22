import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import './index.css'

function App() {

  return (
    <div className='flex flex-col w-sccreen h-screen bg-slate-900 font-wix'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
