import { Input } from "@/Components/ui/input";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
const AdminSignUp = () => {
  return (
    <div>
      <div>
        <Image
          className=""
          src="/Group.png" // Ensure this path is correct
          alt="img"
          width={194}
          height={32}
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[440px] h-[756px] border border-gray-200 rounded-2xl flex flex-col">
          <div className="flex justify-center mt-5">
            <h1 className="text-3xl font-bold">Бүртгүүлэх</h1>
          </div>
          <div>
            <h1 className="ml-10 mt-10">Таны имэйл</h1>
            <div className="flex justify-center mt-2">
              <Input
                placeholder="имэйл"
                className="w-[360px] h-[56px] bg-[#f7f7f8]"
              />
            </div>
            <h1 className="ml-10 mt-5">Таны нэр</h1>
            <div className="flex justify-center mt-2">
              <Input
                placeholder="Таны нэр"
                className="w-[360px] h-[56px] bg-[#f7f7f8]"
              />
            </div>
            <div className="flex justify-center mt-5">
              <Link href="/adminButeegdehuun">
                <button className="w-[360px] h-[56px] border bg-black rounded-2xl text-white">
                  Дараах
                </button>
              </Link>
            </div>
            <div className="w-[360px] h-[1px] border bg-[#f7f7f8] mt-5 flex ml-9"></div>
            <div className=" w-full h-[200px] flex justify-center ">
              <div className=" flex flex-col justify-center mt-5">
                <button className="w-[348px] h-[56px] bg-[#f7f7f8] rounded-2xl font-bold flex justify-center items-center gap-2">
                  <FaGoogle className="w-[24px] h-[24px] " /> Google -ээр
                  нэвтрэх
                </button>
                <button className="w-[348px] h-[56px] bg-[#f7f7f8] rounded-2xl mt-5 font-bold flex justify-center items-center gap-2">
                  <TfiMicrosoftAlt className="w-[24px] h-[24px]" />{" "}
                  Microsoft-оор нэвтрэх
                </button>
                <button className="w-[348px] h-[56px] bg-[#f7f7f8] rounded-2xl mt-5 font-bold flex justify-center items-center gap-2">
                  <FaApple className="w-[24px] h-[24px]" /> Apple-аар нэвтрэх
                </button>
              </div>
            </div>
            <div className="w-[360px] h-[1px] border bg-[#f7f7f8] mt-5 flex ml-9"></div>
            <div className="w-full flex flex-row justify-center mt-7 gap-2">
              <h1>Бүртгэлтэй юу?</h1>
              <h1>Нэвтрэх</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSignUp;
