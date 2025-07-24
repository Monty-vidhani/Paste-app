import React from 'react'
import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';


const Home = () => {
const [title, setTitle] = useState("") ;
const [value, setValue] = useState("") ;
const[searchParams,SetSearchParams] = useSearchParams() ;
const pasteId = searchParams.get("pasteId") ;
const dispatch = useDispatch() ;
const allPastes = useSelector((state)=>state.paste.pastes) ;



useEffect(() => {
 
if(pasteId){
    const paste = allPastes.find((p)=>p._id === pasteId);
    setTitle(paste.title) ;
    setValue(paste.content) ;
}

}, [pasteId])



function createPaste(){
    if(title === ""){
        toast.error("Please Enter Title") ;
        return ;
    }else if(value === ""){
        toast.error("Please enter Content");
        return ;
    }
        const paste = {
            title : title ,
            content: value,
            _id : pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        if(pasteId){
                dispatch(updateToPastes(paste)) ;
        }else{
                dispatch(addToPastes(paste)) ;
        }

        setTitle("");
        setValue("");
        SetSearchParams({}) ;
}


  return (
   <div className='w-full p-2 flex flex-col items-center'>
     <div className='flex flex-row gap-7 w-[80%] justify-between'>
        <input className='p-2 rounded-2xl mt-2 w-[70%] border-1 pl-4' type="text" placeholder='Enter Title Here'
            value={title}
            onChange={(e)=>setTitle(e.target.value)} 
            
        />
        <button className='p-2 rounded-2xl mt-2' onClick={createPaste}>{

                pasteId ? "Update My Paste" : "Create My Paste"
}</button>
    </div>
    <div className='mt-8 w-[80%]'>
        <textarea value={value} placeholder='enter content here'  
        onChange={(e)=>setValue(e.target.value)} rows={20}
        className='rounded-2xl w-full border-1 p-4'
         
        ></textarea>
    </div>

   </div>
   
  )
}

export default Home