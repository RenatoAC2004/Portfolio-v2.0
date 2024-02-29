import React from 'react'
import TextAnimation from './Typewriter';

const Hero = () => {
  return (
    <section id="home" className='flex md:flex-col flex-col h-screen pt-20 -z-10'>
      <div className='flex-1 flex justify-center items-center xl:px-0 sm:px-16 px-6 h-full'>
        <div className='w-full'>
      <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight
       text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><TextAnimation /></h1>

       <p className='text-justify'>Seja bem-vindo ao meu portfolio. Desça a página para ver alguns dos meus projetos, ou clique em um dos botões abaixo.</p>
       
        <div className='flex py-12 gap-x-8 items-center'>
          <button className='border-2 text-white p-2 font-bold text-xl w-full overflow-hidden group relative'>
              <span className='absolute h-0 group-hover:h-full transition-all ease-out duration-300 w-full bg-white left-0 bottom-0'></span>
              <span className='relative group-hover:text-black transition-all ease-out duration-300'>CONTATO</span>
          </button>
          <button className='border-2 text-white p-2 font-bold text-xl w-full overflow-hidden group relative'>
              <span className='absolute h-0 group-hover:h-full transition-all ease-out duration-300 w-full bg-white left-0 bottom-0'></span>
              <span className='relative group-hover:text-black transition-all ease-out duration-300'>SOBRE MIM</span>
          </button>
        </div>

       </div>

       <div className='flex h-full w-full mt-auto justify-center items-center relative'>
          <img src="testeCortado.png" alt="Descrição da Imagem" className='mt-auto h-full z-10 '/>
          <div className='absolute z-[1] w-[70%] h-[65%] top-[-80px] right-[6%]  bg-gradient-to-r from-green-600 to-green-800 blur-[120px] '></div>
          <div className='absolute z-[2] w-[100%] h-[50%] bottom-0 rounded-full bg-white bg-opacity-60 blur-[150px]'></div>
       </div>

       
      </div>
    </section>
  )
}

export default Hero