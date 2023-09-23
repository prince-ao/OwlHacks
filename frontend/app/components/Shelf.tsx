import React from "react";

export default function Shelf({ shelf_name }: { shelf_name: string }) {
  return (
    <div>
      <h1>{shelf_name}</h1>
    </div>
  );
}
