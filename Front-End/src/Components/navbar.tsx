"use client";
import Image from "next/image";
import { Input } from "@/Components/ui/input";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";

import Link from "next/link";
export const Navbar = () => {
  return (
    <div className="w-full h-[68px] bg-black flex justify-center items-center">
      <div className="w-[1992px] h-[36px] bg-black flex justify-between">
        <div className="flex gap-3 items-center">
          <img src="Pinecone.png" />
          <Link href="buteegdehuun">
            <h1 className="text-[#bfbfbf] text-xl">Бүтээгдэхүүн</h1>
          </Link>
        </div>
        <div className="flex">
          <CiSearch className="text-[white] w-[34px] h-[34px]" />
          <Input
            placeholder="Бүтээгдэхүүн хайх"
            className="w-[300px] h-[40px] bg-[#18181b] text-[#bfbfbf] overflow-none "
          />
        </div>
        <div className="flex gap-3 items-center">
          <Link href="/hadgalsan">
            <FaRegHeart className="text-white w-[24px] h-[24px] hover:text-gray-400" />
          </Link>
          <Link href="shopping">
            <TiShoppingCart className="text-white w-[24px] h-[24px] hover:text-gray-400" />
          </Link>
          <Link href="register">
            <button className="w-[100px] h-[36px] bg-black text-white border border-blue-600">
              Бүртгүүлэх
            </button>
          </Link>
          <Link href="/nevtreh">
            <button className="w-[100px] h-[36px] bg-blue-500 hover:bg-blue-600 text-white">
              Нэвтрэх
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
