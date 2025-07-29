import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';



const ViewPaste = () => {



const {id} = useParams() ; 
const allPastes = useSelector((state)=>state.paste.pastes) ;
const paste = allPastes.filter((p)=>p._id === id)[0] ;



  return (
   <div className='w-full p-5 mt-3 flex flex-col items-center'>
     <div className='flex flex-row gap-7 justify-between items-center w-[50%]'>
        <h1         
        >{[paste.title]}</h1>
        
        {/* <button className='h-[70%]'  onClick={()=>{
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Paste Copied") ;
                      }}>Copy</button> */}
                         <div className="box-button">
        <div className="button" onClick={()=>{
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Paste Copied") ;
                      }}><span>Copy</span></div>
      </div>
      
                      
    </div>
    <div className='mt-8 w-[50%]'>
        <textarea value={paste.content} placeholder='enter content here'  
        onChange={(e)=>setValue(e.target.value)} rows={20}
        className='card w-full border-1 p-4'
         disabled
        ></textarea>
    </div>

   </div>
  )
}

export default ViewPaste