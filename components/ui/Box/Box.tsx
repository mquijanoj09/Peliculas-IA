import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Box({ children, className }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={twMerge(
        `w-42rem max-w-42rem bg-dark-grey rounded-2xl overflow-scroll relative`,
        className
      )}
    >
      {/* <button
        className="absolute top-3 right-3 h-10 aspect-square rounded-full border-none bg-slate-950 text-white text-2xl font-bold cursor-pointer	z-10"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children} */}
      {children}
    </div>
  );
}
