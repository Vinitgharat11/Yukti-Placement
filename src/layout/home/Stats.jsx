import React from 'react';
import { StatsImg } from '../../assets/images'

const Stats = () => {
    return (
        <section className="mt-24">
            <div className="flex flex-wrap">
                <div className='w-[50%] font-Poppins ml-16 flex flex-wrap sm:w-[250px] md:w-[350px] '>
                    <p className='text-[32px] font-medium '>"Connecting talent to opportunity - Your path to success starts with us."</p>
                    <p className='text-[15px] font-extralight'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore ut nulla et, maiores consectetur alias ipsa dolorum ad quisquam modi?</p>
                    <div className='sm:my-10'>
                    <div className=' mx-10 sm:my-5'>
                        <h3 className='text-[28px] font-Poppins font-medium'>27k </h3>
                        <p className='text-[12px]'>Students and Young Alumni</p>
                    </div>
                    <div className=' mx-10 sm:my-5 '>
                        <h3 className='text-[28px] font-Poppins font-medium'>1000+</h3>
                        <p className='text-[12px]'>Employee</p>
                    </div>
                    <div className=' mx-10 sm:my-5'>
                        <h3 className='text-[28px] font-Poppins font-medium'>13</h3>
                        <p className='text-[12px]'>college placement cells</p>
                    </div>
                    </div>
                 
                </div>
                <div className='h-[300px] ml-56 sm:hidden md:ml-36 mt-10' >
                    <img className='w-full h-full md:w-[150px]' src={StatsImg} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Stats
