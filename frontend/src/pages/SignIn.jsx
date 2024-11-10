import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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

    const handleclick=()=>{
        
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
            <Button className="mx-24">Sign In</Button>
        </CardContent>
        <CardFooter>
           <p className="px-9">Create a new Account?? <Link to={"/signup"} className="underline cursor-pointer">SignUp</Link></p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignIn
