import React ,{useState} from "react";
import Header from "./Header";
import {BG_URL} from "../utils/constants"

const Login = () => {
  const  [signUpForm, setSignUpForm] = useState(false)
  return <div className="login-component ">
    <Header/>
    <img src={BG_URL}alt="" />
    <div className=" w-4/12 absolute mx-auto  mt-24 h-full right-0 bottom-0 left-0 top-0 bg-black bg-opacity-80 text-white">
        <form className="p-14" action="">
          <h1 className="text-3xl font-bold mb-6 ">
            {!signUpForm ? "Sign In":"Sign Up" }
            </h1>
          {signUpForm && 
          <input  className="p-4 my-2 w-full bg-transparent border-gray-500 rounded-sm border" type="email" placeholder="Username " />
          }
          <input  className="p-4 my-2 w-full bg-transparent border-gray-500 rounded-sm border" type="email" placeholder="Email or phone number " />
          <input className="p-4 my-2 w-full bg-transparent border-gray-500 rounded-sm border" type="password" placeholder="Password" />
          <button className="bg-red-600 w-full p-2 text-l font-bold rounded-sm mt-2"> {!signUpForm ? "Sign In":"Create account" }</button>
        </form>
        {!signUpForm && <><span className="p-14 cursor-pointer hover:underline ">Forgot password?</span><br/></>
        }
        
        <span className="  p-14 mt-6 text-gray-400">
          {!signUpForm ? "New to Netflix?" :"Already a user?"} <strong className=" cursor-pointer hover:underline text-white" onClick={()=>{setSignUpForm(!signUpForm)}}>{!signUpForm ?"Sign up now":"Sign In"}</strong></span>

      </div>

  </div>;
};

export default Login;
