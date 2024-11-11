import React, { useEffect, useState } from 'react';
import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom';

function Bulk() {
    const [alluser, setAlluser] = useState([{
      FirstName:'',
      LastName:'',
      _id:''
    }]);
  
    const fetchUser = async () => {
        try {
          console.log("inside fetch");
            const response = await fetch('http://localhost:3000/admin/bulk', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            
            const res= await response.json();
            console.log(res);
            setAlluser(res.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="w-full h-screen flex">
            <SideBar Role="admin" />
            <div className="w-[90%] h-full p-[50px]">
                <div className="w-full h-screen">
                    {alluser.length > 0 ? (
                        alluser.map(user => (
                            <Listing  key={user._id} userId={user._id} firstName={user.FirstName} lastName={user.LastName} />  ))
                    ) : (
                        <p className="p-[20px]">No user Found</p>
                    )}
                </div>
            </div>
        </div>
    );
}

function Listing({ userId, firstName, lastName }) {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between my-3 p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-blue-200 flex items-center justify-center text-white font-semibold mr-3">
                    {firstName ? firstName[0] : ""}
                </div>
                <div>
                    <p className="font-medium text-gray-700">{firstName} {lastName}</p>
                </div>
            </div>
            <button
                onClick={() => navigate(`/user?id=${userId}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                View Profile
            </button>
        </div>
    );
}

export default Bulk;
