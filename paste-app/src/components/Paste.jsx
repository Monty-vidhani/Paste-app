import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromPastes, resetAllPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Copy, Trash2,Pencil,Share2,Eye } from "lucide-react";


const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  function deleteAll() {
    dispatch(resetAllPastes());
  }

  return (
    <div className="w-full p-5 flex flex-col items-center">
      {/* 🔍 Search + Delete All */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 w-full max-w-4xl justify-between items-center">
        <input
          className="p-2 input w-full sm:w-[70%] border-2 pl-4"
          type="search"
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="box-button !w-full sm:!w-[20%] text-center">
          <div className="button w-full sm:w-full text-center font-semibold" onClick={deleteAll}>
            <span>Delete All</span>
          </div>
        </div>
      </div>
    
      {/* 📝 Pastes List */}
      <div className="flex w-full max-w-4xl items-center flex-col gap-5 mt-5">
        
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div
                className="border w-full p-3 view flex flex-col gap-4 "
                key={paste?._id}
              >
                <div className="font-semibold">{paste.title}</div>

                <div className="overflow-hidden p-2 max-h-24">
                  {paste.content}
                </div>

                <div className="flex flex-wrap gap-3 justify-evenly">
                  <button>
                    <Link to={`/?pasteId=${paste?._id}`}><Pencil/></Link>
                  </button>
                  <button>
                    <Link to={`/pastes/${paste?._id}`}><Eye/></Link>
                  </button>
                  <button onClick={() => handleDelete(paste?._id)}><Trash2/></button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Paste Copied");
                    }}
                  >
                    <Copy/>
                  </button>
                  {/* <button><Share2/></button> */}
                </div>

                <div className="text-sm text-gray-500">{format(new Date(paste.createdAt), "dd, MMM EEE h:mm a")}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Paste;
