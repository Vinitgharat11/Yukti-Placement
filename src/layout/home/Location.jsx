import React from 'react'

const Location = () => {
  return (
    <section className="text-gray-600 body-font relative bg-Secondary1 mt-10 sm:hidden">
      <div className=" px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap justify-center ">
        <div className='mt-10 mx-80'>
          <p className='font-Poppins text-[30px]'>Contact-us</p>
        </div>
        <div className="w-[80vw] h-[500px] md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" className="absolute inset-0 " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.9382794148696!2d72.75546561109579!3d19.800214081482363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71f2af8138a97%3A0xd0d23e66d4ca1702!2sYukti%20Job%20Placement%20Boisar%2CPalghar%2CMumbai%2CGujrat!5e0!3m2!1sen!2sin!4v1681969937664!5m2!1sen!2sin" ></iframe>
          <div className="bg-white absolute flex flex-wrap py-6 rounded shadow-md top-5 right-0">
            <div className="lg:w-1/2 px-6 ">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1 w-60">Tarapur road Mahavir Market 2nd Floor shop no 207,Above Bank of Baroda Ostwal Empire Opposite to Boisar Bus Depo, Boisar, Maharashtra 401501</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed">Yuktiplacement.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Location
