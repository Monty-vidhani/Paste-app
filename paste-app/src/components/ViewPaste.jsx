import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';



const ViewPaste = () => {



const {id} = useParams() ; 
const allPastes = useSelector((state)=>state.paste.pastes) ;
const paste = allPastes.filter((p)=>p._id === id)[0] ;



  return (
   <div className='w-full p-2 flex flex-col items-center'>
     <div className='flex flex-row gap-7 justify-between items-center w-[80%]'>
        <h1 className='p-2' 
        // type="text" placeholder='Enter Title Here'
            // value={[paste.title]}
            // onChange={(e)=>setTitle(e.target.value)} 
            // disabled
            
        >{[paste.title]}</h1>
        <button className='h-[70%]'  onClick={()=>{
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Paste Copied") ;
                      }}>Copy</button>
        {/* <button className='p-2 rounded-2xl mt-2' >{

                pasteId ? "Update My Paste" : "Create My Paste"
}</button> */}
    </div>
    <div className='mt-8 w-[80%]'>
        <textarea value={paste.content} placeholder='enter content here'  
        onChange={(e)=>setValue(e.target.value)} rows={15}
        className='rounded-2xl w-full border-1 p-4'
         disabled
        ></textarea>
    </div>

   </div>
  )
}

export default ViewPaste