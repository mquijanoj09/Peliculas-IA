import { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export function Main({ children }: Props) {
  return (
    <main className="mt-10 flex gap-10 justify-center h-[calc(95vh-7.2rem-3*2.4rem)]">
      {children}
    </main>
  );
}
