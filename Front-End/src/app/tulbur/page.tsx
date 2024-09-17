"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use 'next/navigation' if using Next.js
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const Tulbur = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/amjilttai");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full flex justify-center items-center flex-col bg-[#f7f7f8]">
      <div className="mt-10">
        <div className="w-full h-[32px] flex justify-center">
          <div className="w-[256px] h-[32px] flex items-center">
            <div className="w-[32px] h-[32px] border border-black flex rounded-full bg-blue-500 text-white justify-center items-center text-xl">
              <FaCheck />
            </div>
            <div className="w-[80px] h-[1px] bg-black"></div>
            <div className="w-[32px] h-[32px] border border-black flex rounded-full bg-blue-500 text-white justify-center items-center text-xl">
              <FaCheck />
            </div>
            <div className="w-[80px] h-[1px] bg-black"></div>
            <div className="w-[32px] h-[32px] border border-black flex rounded-full justify-center  text-xl bg-blue-500 text-white">
              3
            </div>
          </div>
        </div>
      </div>
      <div className="w-[687px] h-[657px]  flex flex-col mt-10 border rounded-2xl bg-white">
        <div className="ml-5 mt-5">
          <h1 className="text-xl font-bold">3.Төлбөр төлөлт</h1>
        </div>
        <div>
          <Image
            className="ml-7"
            src="/qr.png"
            alt="qr"
            width={623}
            height={513}
          />
        </div>
        <div className="ml-5">
          <button className="w-[114px] h-[36px] border rounded-3xl bg-white hover:bg-gray-300">
            Буцах
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tulbur;
