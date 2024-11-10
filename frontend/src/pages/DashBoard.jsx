
import React from 'react'
import SideBar from '../components/SideBar'

function DashBoard() {
  return (
    <div className='w-full h-screen flex'>
        <SideBar></SideBar>
       <div className='w-[90%]  h-full p-[50px]'>

       <p className='font-bold text-[20px]'>My Profile</p>
            <div className='w-[100%] mx-auto mt-[20px] rounded-sm shadow-black flex p-[20px] items-center'style={{boxShadow:"0.1px 0.1px 1px"}}>
                <div className='w-[100px] h-[100px] rounded-full bg-black'></div>
                <div className='flex flex-col px-[20px]'>
                    <p className='text-[15px] font-bold'>Jack Adams</p>
                    <p className='text-[10px]'>Product Designer</p>
                    <p className='text-[10px]'>Los Angeles, Calidornia, USA</p>
                </div>
            </div>

            <div className='w-[100%] mx-auto mt-[20px] shadow-black p-[20px] rounded-sm' style={{boxShadow:"0.1px 0.1px 1px"}}>
                <p className='font-bold text-[20px]'>Personal Information</p>
                <div className='flex py-[10px]'><p className='w-[50%] font-bold'>First Name</p><p className='font-bold'>Last Name</p></div>
                <div className='flex py-[10px]'><p className='w-[50%]'>Jack</p><p>Adams</p></div>
                <div className='flex py-[10px]'><p className='w-[50%] font-bold'>Email Address</p><p className='font-bold'>Phone</p></div>
                <div className='flex py-[10px]'><p className='w-[50%]'>jatin@gmail.com</p><p>+91 xxxxxxxxxxx</p></div>
                <div className='flex py-[10px]'><p className='w-[50%] font-bold'>Bio</p></div>
                <div className='flex py-[10px]'><p className='w-[50%]'>Product Designer</p></div>
            </div>

       </div>
         
    </div>
  )
}

export default DashBoard
