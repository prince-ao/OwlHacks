import React from "react";

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <nav>
      <h1>Something</h1>
      {children}
    </nav>
  );
}
