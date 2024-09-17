"use client";
import { Input } from "@/Components/ui/input";
import Link from "next/link";
const Nevtreh = () => {
  return (
    <div className="w-full h-[500px] flex justify-center flex-col items-center">
      <h1 className="font-bold text-2xl">Нэвтрэх</h1>
      <div className="w-[334px] h-[260px] justify-between flex flex-col mt-10 ">
        <Input
          placeholder="Имэйл хаяг"
          className="rounded-2xl border border-gray-400 "
        />
        <Input
          type="password"
          placeholder="Нууц үг"
          className="rounded-2xl border border-gray-400"
        />
        <Link href="/delgerengui">
          <button className=" w-[334px] h-[36px] border flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white rounded-2xl">
            Нэвтрэх
          </button>
        </Link>
        <div className="flex justify-center flex-col items-center text-[#71717a] hover:text-gray-700">
          <Link href="/sergeeh">
            <h1>Нууц үг мартсан</h1>
          </Link>
          <div className="w-[114px] h-[1px] border"></div>
        </div>
        <button className=" w-[334px] h-[36px] border flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white rounded-2xl">
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
};
export default Nevtreh;
