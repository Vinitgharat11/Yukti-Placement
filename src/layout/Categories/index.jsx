import React from 'react'
import { Jobs } from '../../Constant'

const Cards = () => {
    return (
        <section >
            <div className='flex gap-10 flex-wrap p-10'>
                {Jobs.map(item => (
                    <div className=' card bg-Primary rounded-[12px] w-64 h-36 ml-5 '>
                        <div className='w-10 h-14 ml-24 mt-4 '>
                            <img className='w-full h-full' src={item.img} alt="" />
                        </div>
                        <div className='text-center mt-10' >
                            <p>{item.Title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const Categories = () => {
    return (
        <section className='flex'>
            <div className='pt-28 ml-56 font-Poppins text-[23px] sm:p-0 sm:ml-0 sm:pt-10 sm:w-0 '>
                <p className='font-light'> Find Jobs By <span className='UnderLine text-[35px] font-semibold relative'>Categories</span> </p>
            </div>
            <div className='w-full h-[550px] p-10 sm:py-56'>
                <Cards />
            </div>
        </section>
    )
}

export default Categories
