import React from 'react'
import { Heroimg1, arrow, avatar } from '../../assets/images'
const HeroSection = () => {
  return (
    <section className=' w-full overflow-hidden bg-Primary1'>
            <div className=' mainContainer  flex flex-wrap w-[100vw] h-[600px] sm:p-10 '>
                <div className='Left w-[50%] sm:hidden md:hidden' >
                    <div className='relative overflow-hidden w-full h-full'>
                        <div className='flex w-72 h-24 rounded-[12px] bg-white absolute top-16 right-10'>
                            <div>
                                <img className='h-14 m-3' src={avatar} alt="" />
                            </div>
                            <div className='m-4 font-Poppins'>
                                <p className='text-[20px]'>John</p>
                                <p className='text-[13px] font-light'>Ukti placement is best </p>
                            </div>
                        </div>
                        <div className='flex w-72 h-24 rounded-[12px] bg-white absolute top-44 right-24'>
                            <div>
                                <img className='h-14 m-3' src={avatar} alt="" />
                            </div>
                            <div className='m-4 font-Poppins'>
                                <p className='text-[20px]'>John</p>
                                <p className='text-[13px] font-light'>Ukti placement is best </p>
                            </div>
                        </div>
                        <div className='absolute bottom-10 right-56 '>
                            <img className='h-56' src={arrow} alt="" />
                        </div>
                        <div className=' absolute bottom-0 '>
                            <img className=' h-[22rem]  ' src={Heroimg1} alt="" />
                        </div>
                    </div>
                </div>
                <div className='Right w-[50%] pt-[80px]  sm:w-full sm:pl-1 md:w-full md:p-10 md:text-center'>
                    <div className='font-Poppins relative'>
                        <p className=''><span >-</span> Yukti Placement</p>
                        <p className='font-semibold text-[42px] sm:text-[29px] sm:w-[250px] lg:text-[30px] '>Exclsuive Agency <br /> For Placements <br />
                        Provide Solution
                        </p>
                        <p className='font-light text-[12px] pt-1 sm:text-[9px] '>We match top talent with top employers to create a win-win situation for everyone Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, reiciendis.</p>
                        <div className='pt-10'>
                            <input className='text-[20px] h-10 placeholder:text-[15px] placeholder:font-semibold placeholder:pl-6 ' placeholder='email adress' type="text" />
                            <button className='ml-5 w-[200px] mt-4 rounded-[10px] h-10 bg-Dark text-white outline-none'>Contact-with-US</button>
                        </div>
                        <p className='UnderLine'></p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default HeroSection
