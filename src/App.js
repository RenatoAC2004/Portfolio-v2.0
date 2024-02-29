import React from 'react'

import {Navbar, Hero, Programador, Gamedev, Designer, Sobre, Contato, Footer} from './components';


export const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      
          <Navbar/>

      <div className='bg-gradient-to-r from-primary to-blue-900 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero/>
        </div>
      </div>

      <div className='relative bg-primary flex justify-center items-start sm:px-16 px6 z-10'>
        <div className='xl:max-w-[1280px] w-full'>
          <Programador/>
          {/* <Programador/>
          <Gamedev/>
          <Designer/>
          <Sobre/>
          <Contato/>
          <Footer/> */}
        </div>
      </div>

    </div>
  )
}

export default App