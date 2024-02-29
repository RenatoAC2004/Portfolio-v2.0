import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../swiperWrapper.css';


const Programador = () => {

  return (
    <section id="Programador" className='flex md:flex-col flex-col h-screen pt-20'>
      <div className='flex flex-col items-center px-6 py-6'>

        <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight
       text-gray-900 md:text-4xl lg:text-5xl dark:text-white underline">PROGRAMAÇÃO</h1>

<p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sapien augue, venenatis a odio ut, faucibus mattis leo. Mauris in ultricies justo. Phasellus blandit pellentesque dolor a consectetur. Mauris accumsan orci sed tellus pellentesque, sit amet eleifend libero rutrum. Vivamus urna dui, finibus mattis mauris vel, sodales placerat risus. Curabitur vitae quam non turpis facilisis sodales. Phasellus ac diam posuere, tempus enim in, lacinia metus. Aenean non magna a lacus mollis auctor sed in eros. In non elementum ex. Nam vel massa sem. 
</p>
<br></br>
<p>Atualmente, eu conheço/estudo sobre as seguintes linguagens:</p>
<br></br>
        </div>
  <div className='pb-6'>

        <Swiper className='bg-slate-800 w-full ease-linear border-4 border-white rounded-full shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] shadow-white '  modules={[Autoplay]} autoplay={{delay:0, pauseOnMouseEnter: true, disableOnInteraction: false,}} loop={true} slidesPerView={8} speed={3000} >
            <SwiperSlide className='w-full object-cover flex p-3'><img src="HTML.png" /></SwiperSlide>
            <SwiperSlide className='w-full object-cover flex p-3'><img src="CSS.png" /></SwiperSlide>
            <SwiperSlide className='w-full object-cover flex p-2'><img src="Javascript.png" /></SwiperSlide>
            <SwiperSlide className='w-full object-cover flex p-3'><img src="Logo_C_sharp.svg.png"/></SwiperSlide>
            <SwiperSlide className='w-full object-cover flex p-3'><img src="Python.png" /></SwiperSlide>
            <SwiperSlide className='w-full object-cover flex'><img src="PHP.png" /></SwiperSlide>
            <SwiperSlide className='w-full object-cover flex'><img src="Tailwind_CSS.png" /></SwiperSlide>
            <SwiperSlide className='w-full object-cover flex'><img src="Mysql_logo.png" /></SwiperSlide>
            <SwiperSlide className='w-full object-cover flex pl-3'><img src="React.png" /></SwiperSlide>
        </Swiper>
</div>

<div>
<h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight
       text-gray-900 md:text-4xl lg:text-5xl dark:text-white underline ">MEUS PROJETOS</h1>
</div>
  </section>
  )
}

export default Programador