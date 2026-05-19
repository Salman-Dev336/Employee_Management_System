import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-2xl font-normal">
        hello,
        <br />
        <span className="text-3xl font-bold">Salman Khan👋</span>
      </h1>
      <button className="bg-red-600 px-6 py-2 rounded cursor-pointer active:scale-95 text-normal font-semibold">Log Out</button>
    </div>
  );
};

export default Header;
