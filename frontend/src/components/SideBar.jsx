import React from 'react'

function SideBar() {
  return (
    <div className='w-[10%] h-screen shadow-sm shadow-[#969595]'>
            <ul className='flex flex-col text-[15px]'>
                <li className='border-b-[1px] shadow-sm text-[20px] shadow-[#969595] font-bold p-[20px]'>Users</li>
                <li className='py-[25px] px-[20px]'><a href='./dashboard'>Home</a></li>
                <li className='py-[25px] px-[20px]' ><a href='./all'>Users</a></li>
                <li className='py-[25px] px-[20px]'>Help</li>
                <li className='py-[25px] px-[20px]'>About</li>
                <li className='py-[25px] px-[20px]'>Log Out</li>
            </ul>
       </div>
  )
}

export default SideBar
