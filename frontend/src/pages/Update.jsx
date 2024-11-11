import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Update() {
  const [userData, setUserData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zip: 0
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem('userid');
        const response = await fetch(`http://localhost:3000/about?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
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

    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      const id = localStorage.getItem('userid');
      const response = await fetch(`http://localhost:3000/update?id=${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      alert("User updated successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err.message);
      alert("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-200">
      <Card className="w-[350px] h-auto ">
        <CardHeader className="justify-center items-center">
          <CardTitle>Edit</CardTitle>
          <CardDescription>Enter the Information</CardDescription>
        </CardHeader>
          <div className='w-auto h-auto flex'> 
          <div>
        <CardContent>
          <p>FirstName</p>
          <Input  type="text" placeholder="Enter your FirstName" value={userData.FirstName} onChange={(e) => setUserData({ ...userData, FirstName: e.target.value })}  />
        </CardContent>
        <CardContent> <p>LastName</p>
          <Input type="text"  placeholder="Enter your LastName"  value={userData.LastName} onChange={(e) => setUserData({ ...userData, LastName: e.target.value })} />
        </CardContent>
        <CardContent>
          <p>Email</p>
          <Input   type="email"  placeholder="user@example.com"  value={userData.email}  onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        </CardContent>
        <CardContent>
          <p>Phone</p>
          <Input  type="tel"   placeholder="Enter your Phone Number" value={userData.phone} onChange={(e) => setUserData({ ...userData, phone: e.target.value })}  />
        </CardContent>
        </div>

        <div>
        <CardContent>
          <p>Country</p>
          <Input type="text" placeholder="Enter your Country" value={userData.country} onChange={(e) => setUserData({ ...userData, country: e.target.value })}  />
        </CardContent>
        <CardContent>
          <p>City</p>
          <Input  type="text"  placeholder="Enter your City" value={userData.city} onChange={(e) => setUserData({ ...userData, city: e.target.value })} />
        </CardContent>
        <CardContent>
          <p>State</p>
          <Input  type="text"  placeholder="Enter your State" value={userData.state} onChange={(e) => setUserData({ ...userData, state: e.target.value })} />
        </CardContent>
        <CardContent>
          <p>Zip</p>
          <Input  type="text"  placeholder="Enter your State" value={userData.zip} onChange={(e) => setUserData({ ...userData, zip: e.target.value })} />
        </CardContent>
        </div>
          </div>
        <CardContent>
          <Button className="mx-[100px]" onClick={handleUpdate}>Update</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Update;