import React from 'react';
import { useAuth } from '../AuthContext/Context';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const info = useAuth();
  console.log(info)
  const nav = useNavigate();
  async function submitHandler(e){
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userData = {
      email,
      password,
     
    };
    try{
      const res = await fetch("https://storyverse-jsoserver.onrender.com/users");
      const resJson = await res.json();
      const user = resJson[0]
      if(user.email === userData.email && user.password === userData.password){
        info.login();
        userData['language'] = user.language;
        userData['country'] = user.country;
        info.login();
        info.setUser(userData);
        nav("/");
    }else{

      alert("Invalid credentials");
    }
  }catch(error){
    console.log(error)
      alert("Something went wrong");
    }
  }

  return (
    <div className="bg-gradient-to-r from-[#ef060f] to-[#b60cf2] min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 transform hover:scale-105 transition-transform">
        <h2 className="text-3xl font-semibold text-center text-indigo-700 mb-6">Log In</h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div className="relative">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-1">Email</label>
          <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300 hover:border-indigo-600"
              placeholder="Email address"
            />
          </div>
        <div className="relative">
            <label htmlFor="password" className="block text-gray-600 font-semibold mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-indigo-600 focus:outline-none transition-all duration-300 hover:border-indigo-600"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-2 rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Dont have an account? <a href="/signup" className="text-indigo-700 hover:underline transition-colors duration-300">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
