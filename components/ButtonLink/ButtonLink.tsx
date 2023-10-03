import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ButtonLink = ({ href, children }: Props) => {
  return (
    <Link
      className="bg-dark-purple px-4 py-2 rounded-lg text-white inline-block shadow-md  hover:bg-light-purple"
      href={href}
    >
      {children}
    </Link>
  );
};
