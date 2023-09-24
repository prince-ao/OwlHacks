// Import the SearchBar component
import SearchBar from './SearchBar';
import { Dispatch, SetStateAction } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function LeftSide({
  setShelfName,
}: {
  setShelfName: Dispatch<SetStateAction<string>>;
}) {
  const { theme } = useTheme();

  // Handle search function
  const handleSearch = (searchTerm: string) => {
    // Handle the search here
  };

  return (
    <div className="flex flex-col items-center my-7 ">
        <SearchBar onSearch={handleSearch} />
      <div
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[10px]"
        onClick={() => setShelfName("Computer Science")}
      >
        <Image
          width={30}
          height={30}
          className="flex items-center justify-center h-[30px] w-[30px]"
          src={theme === "light" ? "/compSci.png" : "/CompSciWhite.png"}
          alt="Computer Science"
        />
        <p className="ml-[10px] text-2xl">Computer Science</p>
      </div>
      <div
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[10px]"
        onClick={() => setShelfName("English")}
      >
        <Image
          width={30}
          height={30}
          className="flex items-center justify-center h-[30px] w-[30px]"
          src={theme === "light" ? "/english.png" : "/englishwhite.png"}
          alt="English"
        />
        <p className="ml-[10px] text-2xl">English</p>
      </div>
      <div
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[10px]"
        onClick={() => setShelfName("Physics")}
      >
        <Image
          width={30}
          height={30}
          className="flex items-center justify-center h-[30px] w-[30px]"
          src={theme === "light" ? "/physics.png" : "/physicswhite.png"}
          alt="Physics"
        />
        <p className="ml-[10px] text-2xl">Physics</p>
      </div>
      <div
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[10px]"
        onClick={() => setShelfName("Biology")}
      >
        <Image
          width={30}
          height={30}
          className="flex items-center justify-center h-[35px] w-[35px]"
          src={theme === "light" ? "/biology.png" : "/biologywhite.png"}
          alt="Biology"
        />
        <p className="ml-[10px] text-2xl">Biology</p>
      </div>
      <div
        className="hover:bg-blue-600 hover:cursor-pointer h-[75px] items-center w-[100%] flex justify-left ml-[12px]"
        onClick={() => setShelfName("Your Books")}
      >
        <Image
          width={30}
          height={30}
          className="flex items-center justify-center h-[30px] w-[30px]"
          src={theme === "light" ? "/english.png" : "/englishwhite.png"}
          alt="English"
        />
        <p className="ml-[10px] text-2xl">Your Books</p>
      </div>
    </div>
  );
}
