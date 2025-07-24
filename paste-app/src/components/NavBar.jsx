import React from 'react'
import {NavLink} from 'react-router-dom' ;
const NavBar = () => {
  return (
    <div className='flex flex-row gap-4 justify-between p-5 top-0 sticky bg-gray-50 items-center border-b-2 mb-2'>
            <div className='w-[10%] flex flex-row justify-between items-center'>
              <NavLink  to="/">
               Home
            </NavLink>
              <NavLink to="/pastes">
               Pastes
            </NavLink>
            </div>
             <div>
        <h1>PASTE.....</h1>
      </div>
    </div>
  )
}

export default NavBar