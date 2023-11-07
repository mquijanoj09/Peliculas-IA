"use client";
import { AiForm, NavBar, Recomendations } from "@/components";
import { Movie } from "@/interfaces/Movie";
import { useRouter } from "next/navigation";

export default function AiRecomendations() {
  const userId = localStorage.getItem("userId");
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    router.push("/login");
  };

  if (!userId) router.push("/login");
  return (
    <>
      <NavBar className="grid-cols-2">
        <Recomendations className="underline" handleLogout={handleLogout} />
      </NavBar>
      <AiForm />
    </>
  );
}
