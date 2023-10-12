import { ButtonLink } from "@/components";

export function Logo() {
  return (
    <ButtonLink
      href="/"
      className="flex items-center gap-3 text-4xl font-bold hover:no-underline"
    >
      <span role="img">🎥</span>
      <h1>AI Movies</h1>
    </ButtonLink>
  );
}
