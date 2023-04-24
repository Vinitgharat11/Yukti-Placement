import React from 'react'
import { ProviderItems } from '../../Constant'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ProviderCard = () => {
  return (
    <>
      {ProviderItems.map(item => (
        <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={100}>
        <div className='flex flex-wrap mt-10 bg-white rounded-[10px] w-[850px] justify-center shadow-md sm:w-52 md:w-[550px] ' >
          <div className=''>
            <h1 className='font-Poppins my-16 ml-6 sm:text-[15px] sm:my-3 sm:ml-0 md:mt-5 md:my-0'>{item.Title}</h1>
          </div>
          <div className='ml-12 font-Poppins py-6 '>
            <p className='font-semibold pt-7 text-[20px] sm:text-[15px] sm:pt-0 '>{item.Heading}</p>
            <p className='w-[550px] font-light text-[12px] sm:hidden '>{item.contain}</p>
          </div>
        </div>
        </AnimationOnScroll>
      ))}

    </>
  )
}



const Provide = () => {
  return (
    <section className='bg-Secondary h-[650px] mt-10 overflow-hidden font-Poppins '>
      <div className='w-[850px] mx-[20%]'>
        <ProviderCard />
      </div>

    </section>
  )
}

export default Provide
