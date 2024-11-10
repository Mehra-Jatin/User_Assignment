import React, { useState } from 'react'
import SideBar from '../components/SideBar';
function Bulk() {
    const [alluser, setAlluser] = useState([]);
  return (
    <div className='w-full h-screen flex'>
    <SideBar></SideBar>
   <div className='w-[90%]  h-full p-[50px]'>
        <div className='w-full h-screen'>
            {alluser.length>0?(
                alluser.map(user=><Listing key={user._id} user={user._id} firstName={""} lastName={""}/>)
            ):(
                <p className="p-[20px]">No user Found</p>
            )}
        </div>
    </div>
    </div>
  )
}

function Listing({user,firstName,lastName}){
    
    return (
        <div className="flex items-center justify-between my-3 p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
          <div className="flex items-center">
            <div className="rounded-full h-12 w-12 bg-blue-200 flex items-center justify-center text-white font-semibold mr-3">
              {firstName ? firstName[0] : ""}
            </div>
            <div>
              <p className="font-medium text-gray-700">{firstName} {lastName}</p>
            </div>
            <div>

            </div>
          </div>
           <button onClick={()=>{
              navigate(`/user?id=${user}`)
           }}></button>
          <div>
            
          </div>
        </div>
    )

}

export default Bulk
