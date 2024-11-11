import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
    const [userData, setUserData] = useState({
        FirstName: '',
        LastName: '',
        email: '',
        phone:'',
        role: '',
        country: '',
        state: '',
        city: '',
        zip:''
    });
   const navigate = useNavigate();
   useEffect(() => {
    const id = localStorage.getItem('userid');
    if (!id) {
        navigate('/signin');
        return;
    }
    const fetchdata = async () => {
        try {
            const response = await fetch(`http://localhost:3000/about?id=${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const { user } = await response.json();
            setUserData(user);
        } catch (err) {
            console.error(err.message);
        }
    };
    fetchdata();
}, []);

    const handleClick = () => {
      navigate(`/update`);
  };
    return (
        <div className='w-full h-screen flex'>
            <SideBar />
            <div className='w-[90%] h-full p-[20px]'>
                <p className='font-bold text-[20px]'>My Profile</p>
                <div className='w-[100%] mx-auto mt-[10px] rounded-sm shadow-black flex p-[20px] items-center' style={{ boxShadow: "0.1px 0.1px 1px" }}>
                    <div className='w-[100px] h-[100px] rounded-full shadow-sm bg-blue-50 shadow-slate-900 justify-center items-center flex text-4xl'>{userData.FirstName[0]}</div>
                    <div className='flex flex-col px-[20px]'>
                        <p className='text-[20px] font-bold'>{userData.FirstName} {userData.LastName}</p>
                        <p className='text-[15px]'>{userData.role}</p>
                        <p className='text-[15px]'>{`${userData.city}, ${userData.state}, ${userData.country}`}</p>
                    </div>
                </div>

                <div className='w-[100%] mx-auto mt-[20px] shadow-black p-[20px] rounded-sm' style={{ boxShadow: "0.1px 0.1px 1px" }}>
                <div className='flex justify-between items-center'>
                        <p className='font-bold text-[20px]'>Personal Information</p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600' onClick={handleClick}>
                           Edit
                         </button>
               </div>
                    <div className='flex py-[5px]'><p className='w-[50%] font-bold'>First Name</p><p className='font-bold'>Last Name</p></div>
                    <div className='flex py-[5px]'><p className='w-[50%]'>{userData.FirstName}</p><p>{userData.LastName}</p></div>
                    <div className='flex py-[5px]'><p className='w-[50%] font-bold'>Email Address</p><p className='font-bold'>Phone</p></div>
                 <div className='flex py-[5px]'><p className='w-[50%]'>{userData.email}</p><p>+91 {userData.phone}</p></div>
                    <div className='flex py-[5px]'><p className='w-[50%] font-bold'>Role</p></div>
                    <div className='flex py-[5px]'><p className='w-[50%] '>{userData.role}</p></div>
                </div>
                <div className='w-[100%] mx-auto mt-[20px] shadow-black p-[20px] rounded-sm' style={{ boxShadow: "0.1px 0.1px 1px" }}>
                <div className='flex justify-between items-center'>
                        <p className='font-bold text-[20px]'>Address</p>
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-sm hover:bg-blue-600' onClick={handleClick}>
                           Edit
                         </button>
               </div>
                    <div className='flex py-[5px]'><p className='w-[50%] font-bold'>Country</p><p className='font-bold'>State</p></div>
                    <div className='flex py-[5px]'><p className='w-[50%]'>{userData.country}</p><p>{userData.state}</p></div>
                    <div className='flex py-[5px]'><p className='w-[50%] font-bold'>City</p><p className='font-bold'>Zip</p></div>
                    <div className='flex py-[5px]'><p className='w-[50%]'>{userData.city}</p><p>{userData.zip}</p></div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
