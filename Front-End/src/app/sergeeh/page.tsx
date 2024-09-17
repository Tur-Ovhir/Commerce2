"use client"; // Ensure the component is treated as a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import
import { Input } from "@/Components/ui/input";
import Link from "next/link";
const Sergeeh = () => {
  return (
    <div className="w-full h-[500px] flex justify-center flex-col items-center">
      <h1 className="font-bold text-2xl">Нууц үг сэргээх</h1>
      <div className="w-[334px] h-[88px] flex flex-col justify-between mt-10">
        <Input placeholder="Имэйл хаяг оруулах" className="rounded-2xl" />
        <Link href="loading">
          <button className="w-[334px] h-[36px] bg-blue-600 hover:bg-blue-800 rounded-2xl text-white">
            Илгээх
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sergeeh;
