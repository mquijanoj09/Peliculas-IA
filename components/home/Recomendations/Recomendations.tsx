import { ButtonLink } from "@/components";

interface Props {
  className?: string;
  handleLogout?: () => void;
}

export function Recomendations({ className, handleLogout }: Props) {
  return (
    <div className="flex gap-8 justify-self-end">
      <ButtonLink href="/recomendations" className={className}>
        AI Recomendations 🤖
      </ButtonLink>
      <button
        className="text-2xl text-white hover:underline cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
