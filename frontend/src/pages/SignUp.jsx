import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"

function SignUp() {
    const [FirstName,setFirstName] =useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate =useNavigate();
    const handleclick=async()=>{
      try{
        const response = await fetch("http://localhost:3000/signup",{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
         body:JSON.stringify({
            FirstName:FirstName,
            LastName:LastName,
            email: email,
            password: password
          }),
        });
        if (!response.ok) {
          const errorData = await response.json(); 
          throw new Error(errorData.error || "Failed to sign up");
        }
        const responseData = await response.json();
        localStorage.setItem('userid',responseData.id);
        navigate('/dashboard');
      }
      catch(err){
       console.error(err.message);
      }
   }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-slate-200">
      <Card className="w-[350px] h-auto">
        <CardHeader className="justify-center items-center">
          <CardTitle >SignUp</CardTitle>
          <CardDescription>SignUp using valid credentials</CardDescription>
        </CardHeader>
        <CardContent>
            <p >FirstName</p>
            <Input type="text" placeholder="Enter your FirstName" onChange={e=>setFirstName(e.target.value)}></Input>
        </CardContent>
        <CardContent>
            <p>LastName</p>
            <Input type="text" placeholder="Enter your LastName " onChange={e=>setLastName(e.target.value)}></Input>
        </CardContent>
        <CardContent>
            <p>Email</p>
            <Input type="email" placeholder="user@example.com" onChange={e=>setEmail(e.target.value)}></Input>
        </CardContent>
        <CardContent>
            <p>Password</p>
            <Input  type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}></Input>
        </CardContent>
        <CardContent >
            <Button className="mx-20" onClick={handleclick}>Create Account</Button>
        </CardContent>
        <CardFooter>
           <p className="px-9">Already have a account?? <Link to={"/signin"} className="underline cursor-pointer">SignIn</Link></p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
