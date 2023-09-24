"use client"

import { useState } from "react";
import LeftSide from "./LeftSide";
import Shelf from "./Shelf";

export default function Body() {
  const [shelfName, setShelfName] = useState("");

  return (
    <div className="flex">
      <div className="w-[20%] min-h-page border-e-2">
        <LeftSide setShelfName={setShelfName} />
      </div>
      <div>
        <Shelf shelf_name={shelfName} />
      </div>
    </div>
  );
}