import React from 'react'

const Contact = () => {
  return (
    <section className='bg-Primary1 flex justify-center '>
      <div className='w-3/4 h-[400px]  bg-Secondary1  my-24 rounded-[10px] xl:w-1/2 lg:w-2/3'>
        <div className='flex flex-col gap-5  text-center font-Poppins '>
          <form className='mt-16'>
            <p className='text-sm'>Enter Your Email </p>
            <input type="text" placeholder='email' className='rounded outline-none h-8 w-56 placeholder:text-[12px] placeholder:text-center' />
          </form>
          <form className='' >
            <p className='text-sm'>Enter Your Phone Number </p>
            <input size="" type="Number" placeholder='Phone No' className='rounded outline-none h-8 w-56 placeholder:text-[12px] placeholder:text-center' />
          </form>
          <form className=''>
            <p className='text-sm'>Ask Questions</p>
            <textarea type="text" placeholder='Ask Anything' className='rounded outline-none h-8 w-56 placeholder:text-[12px] placeholder:text-center' />
          </form>
        </div>
        <div className="flex justify-center">
          <button className='bg-Dark text-white rounded-sm w-20 h-10 my-7 '>Submit</button>
        </div>
      </div>
    </section>
  )
}

export default Contact
