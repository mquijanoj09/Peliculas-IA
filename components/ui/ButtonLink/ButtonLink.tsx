import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ButtonLink = ({ href, children, className }: Props) => {
  return (
    <Link
      className={`text-2xl text-white hover:underline cursor-pointer ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
};
