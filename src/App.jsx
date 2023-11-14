import { Demo, Footer, Hero, NavBar } from './components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes } from 'react-router-dom'

library.add(fas)

function App() {

  return (
    <>
      <div className='w-full bg-primary overflow-hidden'>
        <div className='px-6 startflex'>
          <div className="box">
            <NavBar />
          </div>
        </div>
        
        <div className="bg-primary startflex">
          <div className='box'>
            <Routes>
              <Route element={<Hero/>} path='/' />
              <Route element={<Demo/>} path='/demo'/>
            </Routes>
          </div>
        </div>
        <div className='bg-primary startflex'>
          <div className='box'>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
