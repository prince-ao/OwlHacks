"use client";

import Image from "next/image";
import { Rowdies } from "next/font/google";
import React from "react";
import logo from "@/public/bookstack.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const rowdies = Rowdies({ weight: "400", subsets: ["latin"] });

export default function Header() {
  const { setTheme } = useTheme();
  return (
    <nav className="flex items-center justify-center h-[100px] border-b-2">
      <div className="flex items-center justify-between w-[90%]">
        <div className="flex items-center">
          <Image src={logo} alt="logo" width={70} height={70} />
          <h1 className={rowdies.className + " text-5xl ms-3"}>Bookstack.ai</h1>
        </div>
        <div className="rounded-full w-[60px] h-[60px] bg-gray-800"></div>
      </div>
      <div className="ms-24">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
