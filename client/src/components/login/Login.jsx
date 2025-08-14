import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const validEmail = "surya2006@gmail.com";
    const validPassword = "297236";

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }
    if (email === validEmail && password === validPassword) {
      navigate('/admin');
        
    } else {
      alert("Invalid email or password.");
    }

  };
  return (
    <div className='h-[100vh] flex items-center justify-center'>
                <div className='flex justify-center items-center flex-col bg-slate-200 h-auto w-auto p-10 rounded-md shadow-md'>
                    <h1 className='text-2xl font-semibold p-3 text-center '>Admin <span className='text-violet-900'>Login</span></h1>
                    <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
                        <input onChange={(e)=>setEmail(e.target.value)} className='rounded p-2 m-2 border-2 border-gray-500 h-full w-full focus:outline-none hover:border-violet-600 bg-white' type='email' placeholder='Type Your Email'/>
                        <input onChange={(e)=>setPassword(e.target.value)} className='rounded p-2 m-2 border-2 border-gray-500 h-full w-full focus:outline-none hover:border-violet-600 bg-white' type='password' placeholder='Type Passward'/>
                        <button className='mt-2 cursor-pointer  p-2 rounded-md text-white h-full w-full bg-violet-900 hover:bg-violet-700 '>Submit</button>
                        
                    </form>
                </div>
            </div>
  )
}

export default Login