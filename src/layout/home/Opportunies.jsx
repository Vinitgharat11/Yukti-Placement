import React from 'react'
import { Teacher } from '../../assets/images'
import { career } from '../../Constant'

const Opportunies = () => {
  return (
    <section>
      <div >
        <div className='flex flex-wrap justify-center mt-10'>
            <p className='w-80 pt-6 text-[29px] font-Poppins'>Opportunies for you </p>
            <p className='w-[520px] text-[15px]'>Yukti Placements is the recruitment partner of choice for a large number of healthcare and educational institutes globally. Over the last  years we’ve helped thousands of professionals live their dreams and find a fulfilling career. See the world of opportunities that awaits you.</p>
        </div>
        <div className='flex flex-wrap justify-center mt-10 gap-10'>
                {career.map(item =>(
            <div className='w-[350px] font-Poppins '>
                <img className='w-64  rounded-[13px] ' src={item.img} alt="" />
                <p className='mt-6'>{item.Title}</p>
                <p className='text-[12px] font-extralight'>{item.des}</p>
                <button className='mt-5 bg-Dark text-white rounded-[10px] w-44 text-[16px]'>view vacancies</button>
            </div> 
                ))}
        </div>
            
      </div>
    </section>
  )
}

export default Opportunies
