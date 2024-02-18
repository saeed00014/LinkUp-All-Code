import React from "react";
import Link from "next/link";
import { notFound } from "@/assets/data/data";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen mb-[4rem]">
      <span className="text-3xl">404</span>
      <h2>{notFound.notFound}</h2>
      <Link href="/" className="underline">
        {notFound.goHome}
      </Link>
    </div>
  );
}
