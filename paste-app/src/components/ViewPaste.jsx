import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {



const {id} = useParams() ; 
const allPastes = useSelector((state)=>state.paste.pastes) ;
const paste = allPastes.filter((p)=>p._id === id)[0] ;



  return (
   <div>
     <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-2 rounded-2xl mt-2 w-[50%] pl-4' type="text" placeholder='Enter Title Here'
            value={[paste.title]}
            onChange={(e)=>setTitle(e.target.value)} 
            disabled
            
        />
        {/* <button className='p-2 rounded-2xl mt-2' >{

                pasteId ? "Update My Paste" : "Create My Paste"
}</button> */}
    </div>
    <div className='mt-8'>
        <textarea value={paste.content} placeholder='enter content here'  
        onChange={(e)=>setValue(e.target.value)} rows={20}
        className='rounded-2xl min-w-[500px] p-4'
         disabled
        ></textarea>
    </div>

   </div>
  )
}

export default ViewPaste