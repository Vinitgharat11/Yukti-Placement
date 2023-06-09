import { useState } from 'react';
import { NavLinks } from '../../Constant'
import { Link, NavLink,  } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-Primary'>
      <div className='flex justify-evenly pt-6 '>
        <div className='text-center'>
          <Link to="/" >
          <p className='font-Poppins font-bold text-[25px] text-Dark '>Logo</p>
          </Link>
          <div className='flex text=[] md:hidden lg:hidden xl:hidden 2xl:hidden'>
          {NavLinks.map(item => (
            <li className='list-none font-Poppins hover:text-white NavLink text-[10px] mx-2 ' >
              <NavLink to={item.location} >
                {item.Link}
              </NavLink>
            </li>
          ))}
          </div>
        </div>
         <div className=' flex gap-7 text-Dark sm:hidden '>
          {NavLinks.map(item => (
            <li className='list-none font-Poppins hover:text-white  text-[14px] ' >
              <NavLink to={item.location} activeClassName="active">
                {item.Link}
              </NavLink>
            </li>
          ))}
        </div>
      
      </div>
    </nav>
  )
}

export default Navbar
