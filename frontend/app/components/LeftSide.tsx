import {Dispatch,SetStateAction } from "react";

export default function LeftSide({ setShelfName }: {setShelfName: Dispatch<SetStateAction<string>>}) {
  return (
    <div className="flex flex-col items-center mt-16">
      <div 
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[10px]"
        onClick={() => setShelfName("Computer Science")}
      >
        <img className="flex items-center justify-center h-[30px] w-[30px]" src="/compsciwhite.png" alt="Computer Science" />
        <p className="ml-[10px] text-2xl">Computer Science</p>
      </div>
      <div 
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[10px]"
        onClick={() => setShelfName("English")}
      >
        <img className="flex items-center justify-center h-[30px] w-[30px]" src="/englishwhite.png" alt="English" />
        <p className="ml-[10px] text-2xl">English</p>
      </div>
      <div 
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[10px]"
        onClick={() => setShelfName("Physics")}
      >
        <img className="flex items-center justify-center h-[30px] w-[30px]" src="/physicswhite.png" alt="Physics" />
        <p className="ml-[10px] text-2xl">Physics</p>
      </div>
      <div 
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[10px]"
        onClick={() => setShelfName("Biology")}
      >
        <img className="flex items-center justify-center h-[30px] w-[30px]" src="/biologywhite.png" alt="Biology" />
        <p className="ml-[10px] text-2xl">Biology</p>
      </div>
      <div 
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[12px]"
        onClick={() => setShelfName("Your Books")}
      >
        <img className="flex items-center justify-center h-[30px] w-[30px]" src="/yourbookswhite.png" alt="Your Books" />
        <p className="ml-[10px] text-2xl">Your Books</p>
      </div>
    </div>
  );
}