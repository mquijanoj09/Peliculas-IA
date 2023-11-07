"use client";
import { Button } from "@/components";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Half } from "@/components/login/Half/Half";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { db } from "@/utils/firebase";

const Login = () => {
  const [id, setId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("userId");
    if (user) router.push("/login");
  }, [router]);

  function writeUserData(userId: string) {
    const starCountRef = ref(db, "users/" + userId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) set(ref(db, "users/" + userId), userId);
    });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    writeUserData(id);
    localStorage.setItem("userId", id);
    id === "" ? alert("Ingresa un ID válido") : router.push("/");
    setId("");
  }

  return (
    <main className="grid lg:grid-cols-2 min-h-screen">
      <Half />
      <div className="bg-dark-grey flex items-center justify-center flex-col gap-8">
        <h2 className="text-white text-4xl font-bold">
          Log in into you account{" "}
        </h2>
        <form onSubmit={handleSubmit} className="flex items-center flex-col">
          <input
            className="block bg-lighter-grey text-white rounded-lg px-6 py-4 mb-8 shadow-md text-2xl"
            placeholder="Put your ID"
            type="text"
            onChange={handleChange}
            value={id}
          />
          <Button type="submit" className="px-6 py-4 text-3xl">
            Log in
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
