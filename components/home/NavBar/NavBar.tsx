import { Logo } from "../Logo/Logo";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function NavBar({ children, className }: Props) {
  return (
    <nav
      className={twMerge(
        "grid grid-cols-3 items-center h-28 px-12 py-0 bg-dark-purple rounded-2xl m-10",
        className
      )}
    >
      <Logo />
      {children}
    </nav>
  );
}
