import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input"

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate =useNavigate();
    const handleclick=async()=>{
      try{
        const response = await fetch("http://localhost:3000/signin",{
          method:'POST',
          headers:{
            'Content-Type': 'application/json',
          },
         body:JSON.stringify({
            email: email,
            password: password
          }),
        });
        if (!response.ok) {
          const errorData = await response.json(); 
          throw new Error(errorData.error || "Failed to sign up");
        }
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
          <CardTitle >SignIn</CardTitle>
          <CardDescription>SignIn using valid credentials</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Email</p>
            <Input type="email" placeholder="user@example.com" onChange={e=>setEmail(e.target.value)}></Input>
        </CardContent>
        <CardContent>
            <p>Password</p>
            <Input  type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}></Input>
        </CardContent>
        <CardContent >
            <Button className="mx-24" onClick={handleclick}>Sign In</Button>
        </CardContent>
        <CardFooter>
           <p className="px-9">Create a new Account?? <Link to={"/signup"} className="underline cursor-pointer">SignUp</Link></p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignIn
