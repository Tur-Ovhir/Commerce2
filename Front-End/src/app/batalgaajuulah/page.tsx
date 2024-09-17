"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/Components/ui/input";
import { useState, useEffect } from "react";

const Batalgaajuulah = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/loading2");
    }, 10000);
    return () => clearTimeout(timer);
  }, [router]);

  const [seconds, setSeconds] = useState(30);
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [seconds]);
  return (
    <div className="w-full h-[1000px] flex justify-center items-center bg-[#f7f7f8]">
      <div className="w-[1040px] h-[344px]  flex flex-col items-center gap-6">
        <Image
          src="/ilgeeh.png"
          alt="Verification Image"
          width={96}
          height={96}
        />

        <h1 className="font-bold">Баталгаажуулах</h1>

        <h1>
          “mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу
        </h1>
        <Input className="w-[221px] h-[56px] text-xl " />
        <div>
          <p className="text-[#71717a] hover:text-gray-700">
            Дахин илгээх ({seconds})
          </p>
          <div className="w-[126px] border border-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Batalgaajuulah;
