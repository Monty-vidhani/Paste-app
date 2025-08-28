import React from 'react'
import {NavLink} from 'react-router-dom' ;
const NavBar = () => {

  return (
    <div className='flex flex-row px-3 top-0 sticky z-10 bg-gray-50 items-center justify-between border-b-2 m-2'>
      <div className='Logo flex items-center sm:justify-start  mb-2 sm:mb-0'>
        <img src="https://img.icons8.com/material-outlined/96/FAB005/clipboard.png" alt="" className='h-12 ' />
      </div>
      <div className='links w-[60%] h-full flex items-center justify-evenly text-2xl '>
        <NavLink to='/'>Home</NavLink>
        <NavLink to="/pastes">Pastes</NavLink>
      </div>
    <label className="switch w-[10%]">
{/*         <input className="toggle" type="checkbox" />
        <span className="slider" />
        <span className="card-side" /> */}
      </label>
    </div>
 
  )
}

export default NavBar
