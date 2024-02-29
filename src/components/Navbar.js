import React from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const controlNav = () =>{
    setNav(!nav)
  }
  return (
    <nav className="bg-primary fixed w-full flex py-6 px-20 justify-center items-center z-20"> 
      <div className="w-fit h-[32px] flex items-center">Renato Carvalho</div>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-x-10'>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#Programador">Programador</a>
          </li>

          <li>
            <a href="#Gamedev">Game-Dev</a>
          </li>

          <li>
            <a href="#Designer">Designer</a>
          </li>

          <li>
            <a href="#Sobre">Sobre</a>
          </li>

          <li>
            <a href="#Contato">Contato</a>
          </li>
      </ul>

    <div className='block sm:hidden' onClick={controlNav}>
      {nav ?  <IoClose size={20}/> : <IoMenu size={20}/>}

    </div>

      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <li className='p-4 border-b border-gray-600'>
            <a href="#Home">Home</a>
          </li>

          <li className='p-4 border-b border-gray-600'>
            <a href="#Programador">Programador</a>
          </li>

          <li className='p-4 border-b border-gray-600'>
            <a href="#Gamedev">Game-Dev</a>
          </li>

          <li className='p-4 border-b border-gray-600'>
            <a href="#Designer">Designer</a>
          </li>

          <li className='p-4 border-b border-gray-600'>
            <a href="#Sobre">Sobre</a>
          </li>

          <li className='p-4 border-b border-gray-600'>
            <a href="#Contato">Contato</a>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar