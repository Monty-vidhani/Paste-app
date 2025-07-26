import React, { useState } from 'react'
import {useSelector,useDispatch  } from "react-redux";
import { removeFromPastes, resetAllPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link} from "react-router-dom";



const Paste = () => {
  const pastes = useSelector((state)=> state.paste.pastes) ;
  const[searchTerm,setSearchTerm] = useState('') ;
  const dispatch = useDispatch() ;
  const filterData = pastes.filter((paste)=> paste.title.toLowerCase().includes(searchTerm.toLowerCase())) ; 

function handleDelete(pasteId){
  dispatch(removeFromPastes(pasteId)) ;
}
function deleteAll(pastes){
  dispatch(resetAllPastes(pastes));
}





  return (
    <div className='w-full mt-7 flex flex-col items-center'>
      <div className='flex flex-row gap-7 justify-between w-[50%]'>
        <input className='input w-[70%] border-1 px-4' 
       type="search" 
        placeholder='Search here'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <div className="box-button">
        <div className="button" onClick={deleteAll}><span>Delete All</span></div></div>
      </div>
      <div className='flex w-[50%] items-center  flex-col gap-5 mt-5'>
        {
          filterData.length > 0 && 
          filterData.map(
            (paste)=>{
              return (
                <div className='border w-full  p-5 view flex flex-col  gap-4' key={paste?._id}>
                  <div>{paste.title}</div>
                  <div className='overflow-hidden'>{paste.content}</div>
                  <div className='flex flex-row gap-4 place-content-evenly'>
                    <button>
                      <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                    </button>
                    <button>
                      <Link to={`/pastes/${paste?._id}`}>View</Link>
                    </button>
                    <button onClick={() => handleDelete(paste?._id)}>Delete</button>
                    <button onClick={()=>{
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Paste Copied") ;
                      }}>Copy</button>
                    <button>Share</button>
                  </div>
                  <div>{paste.createdAt}</div>
                  </div>
              )
            }
          )
        }
      </div>

    </div>
  )
}

export default Paste