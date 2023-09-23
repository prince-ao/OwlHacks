import React from "react";

export default function LeftSide() {
  return (
    <div className="flex flex-col items-center mt-16">
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
        <p className="text-3xl">Computer Science</p>
      </div>
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
        <p className="text-3xl">English</p>
      </div>
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
        <p className="text-3xl">Physics</p>
      </div>
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
        <p className="text-3xl">Biology</p>
      </div>
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
        <p className="text-3xl">Your Books</p>
      </div>
    </div>
  );
}
