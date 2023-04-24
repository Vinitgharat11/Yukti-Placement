import React from 'react'
import { avatar } from '../../assets/images'
import { Testemoniesdata } from '../../Constant'

const Testemonies = ({ title }) => {
    return (
        <section className=''>
            <div className='flex flex-col    '>
                {/* 1st pallet */}
                {Testemoniesdata.map(item => (

                    <div className={`${item.color}  h-2/4   '`}>
                        <div className={`bg-white w-[550px] h-[200px] flex flex-col rounded-2xl mx-10 my-6 sm:w-[250px] sm:h-64 items-center`}>
                            <div className='mx-48 mt-2 w-11 h-16 sm:ml-5  '>
                                <img className='w-full h-full' src={avatar} alt="" />
                            </div>
                            <div className='mx-48 mt-2 sm:mt-10 sm:flex sm:flex-col sm:justify-center sm:m-24  '>
                                <h2>{item.title}</h2>
                                <p className='text-[12px] font-Poppins font-light'>Comments</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Testemonies
