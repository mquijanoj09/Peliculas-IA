"use client";
import { AiForm, NavBar, Recomendations } from "@/components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AiRecomendations() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (!user) router.push("/login");
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    router.push("/login");
  };

  return (
    <>
      <NavBar className="grid-cols-2">
        <Recomendations className="underline" handleLogout={handleLogout} />
      </NavBar>
      <AiForm />
    </>
  );
}
