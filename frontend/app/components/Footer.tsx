import Image from "next/image";
import logo from "@/public/bookstack.png";

export default function Footer() {
  return (
    <div className="flex items-center border-t-2 h-[70px]">
      <Image src={logo} alt="logo" width={40} height={40} className="ms-4" />
      <h1 className="ms-2">&copy; 2023</h1>
    </div>
  );
}