import React from 'react'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToPastes, updateToPastes } from '../redux/pasteSlice';


const Home = () => {
const [title, setTitle] = useState("") ;
const [value, setValue] = useState("") ;
const[searchParams,SetSearchParams] = useSearchParams() ;
const pasteId = searchParams.get("pasteId") ;
const dispatch = useDispatch() ;
function createPaste(){
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
   <div>
     <div className='flex flex-row gap-7 place-content-between'>
        <input className='p-2 rounded-2xl mt-2 w-[50%] pl-4' type="text" placeholder='Enter Title Here'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />
        <button className='p-2 rounded-2xl mt-2' onClick={createPaste}>{

                pasteId ? "Update My Paste" : "Create My Paste"
}</button>
    </div>
    <div className='mt-8'>
        <textarea value={value} placeholder='enter content here'  
        onChange={(e)=>setValue(e.target.value)} rows={20}
        className='rounded-2xl min-w-[500px] p-4'
        ></textarea>
    </div>

   </div>
   
  )
}

export default Home