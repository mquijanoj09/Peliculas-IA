import { ButtonLink } from "@/components";

interface Props {
  className?: string;
}

export function Recomendations({ className }: Props) {
  return (
    <ButtonLink
      href="/recomendations"
      className={`justify-self-end ${className}`}
    >
      AI Recomendations 🤖
    </ButtonLink>
  );
}
