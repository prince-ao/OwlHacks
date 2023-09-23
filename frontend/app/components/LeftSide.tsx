import React from "react";


export default function LeftSide() {
  return (
    <div className="flex flex-col items-center mt-16">
      
  
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
            <img className= "flex items-center justify-center h-[30px] w-[30px]" src="/compsciwhite.png" alt="Computer Science" />
        <p className="text-3xl">Computer Science</p>
      </div>
     
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
        <img className= "flex items-center justify-center h-[30px] w-[30px]" src="/englishwhite.png" alt="English" />
        <p className="text-3xl">English</p>
      </div>
      
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
       <img className="flex items-center justify-center h-[30px] w-[30px]" src="/physicswhite.png" alt="Physics" />
        <p className="text-3xl">Physics</p>
      </div>
      
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
      <img className="flex items-center justify-center h-[30px] w-[30px]" src="/biologywhite.png" alt="Biology" />
        <p className="text-3xl">Biology</p>
      </div>
      
      <div className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-center">
      <img className = "flex items-center justify-center h-[30px] w-[30px]" src="/yourbookswhite.png" alt="Your Books" />
        <p className="text-3xl">Your Books</p>
      </div>
    </div>
  );
}
