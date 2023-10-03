"use client";
import { Button, Slider } from "@/components";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import Img_Pel from "@/assets/grid-peliculas.jpeg";
import { useRouter } from "next/navigation";
import { slides } from "./data";

const Login = () => {
  const [id, setId] = useState("");
  const router = useRouter();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(id);
    setId("");
    router.push("/");
  }

  return (
    <main className="grid lg:grid-cols-2 min-h-screen">
      <div className="bg-light-grey lg:flex items-center justify-center flex-col gap-y-5 px-32 py-16 hidden">
        <h1 className="text-white text-4xl font-bold self-start">
          🎥 Peliculas IA
        </h1>
        <Image src={Img_Pel} alt="Peliculas IA" />
        <Slider slides={slides} />
      </div>

      <div className="bg-dark-grey flex items-center justify-center flex-col ">
        <h2 className="text-white text-3xl font-bold mb-6">
          Inicia sesión en tu cuenta
        </h2>
        <form onSubmit={handleSubmit} className="flex items-center flex-col">
          <input
            className="block bg-lighter-grey text-white rounded-lg px-4 py-2 mb-6 shadow-md"
            placeholder="Ingresa tu ID"
            type="text"
            onChange={handleChange}
            value={id}
          />
          <Button type="submit">Iniciar sesión</Button>
        </form>
      </div>
    </main>
  );
};

export default Login;
