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
function deleteALL(pastes){
  dispatch(resetAllPastes(pastes));
}





  return (
    <div className='w-full p-2 flex flex-col items-center'>
      <div className='flex flex-row justify-between w-[80%]'>
        <input className='p-2 rounded-2xl mt-2 w-[50%] border-1 pl-4' 
       type="search" 
        placeholder='Search here'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <button className='p-2 rounded-2xl mt-2' onClick={deleteALL}>Delete All</button>
      </div>
      <div className='flex w-[80%] items-center flex-col gap-5 mt-5'>
        {
          filterData.length > 0 && 
          filterData.map(
            (paste)=>{
              return (
                <div className='border w-full rounded-2xl p-5 flex flex-col  gap-4' key={paste?._id}>
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