import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Copy } from 'lucide-react';



const ViewPaste = () => {



const {id} = useParams() ; 
const allPastes = useSelector((state)=>state.paste.pastes) ;
const paste = allPastes.filter((p)=>p._id === id)[0] ;



  return (
   <div className='w-full p-5 flex flex-col items-center'>
     <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 w-full max-w-4xl justify-between items-center'>
        <h1          
        >{[paste.title]}</h1>
        

      <div className="box-button !w-full sm:!w-auto text-center">
        <div className="button w-full sm:w-full text-center flex font-semibold text-lg items-center justify-center" onClick={()=>{
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Paste Copied") ;
                      }}><span className='flex gap-2.5 '>Copy <Copy/></span>
        </div>
      </div>
      
                      
    </div>
    <div className='mt-8 w-full max-w-4xl'>
        <textarea value={paste.content} placeholder='enter content here'  
        onChange={(e)=>setValue(e.target.value)} rows={20}
        className='w-full p-4 card'
         disabled
        ></textarea>
    </div>

   </div>
  )
}

export default ViewPaste