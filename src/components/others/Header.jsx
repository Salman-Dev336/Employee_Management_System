import React, { useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {

  // const [username, setusername] = useState('')

  // if(!data){
  //   setusername("admin")
  // }
  // else{
  //   setusername(data.firstName)
  // }
  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')    
    // window.location.reload()
  }


  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-purple-900 to-indigo-900 backdrop-blur-lg border border-white/20 rounded-3xl px-8 py-3 shadow-xl">
      {/* Left Side */}
      <div>
        <h2 className="text-gray-300 text-lg font-medium">Welcome Back,</h2>

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent mt-1">
         salman
        </h1>

        <p className="text-gray-400 text-sm mt-1 tracking-wide">
          Hope you’re having a productive day ✨
        </p>
      </div>

      {/* Right Side */}
      <button onClick={logOutUser} className="bg-gradient-to-r from-red-500 to-pink-600 px-7 py-3 rounded-2xl text-white font-bold shadow-lg hover:scale-105 hover:shadow-red-500/40 transition-all duration-300 active:scale-95 cursor-pointer">
        Logout
      </button>
    </div>
  );
};

export default Header;
