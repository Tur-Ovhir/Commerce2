"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/batalgaajuulah");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="w-full h-[1000px] flex items-center justify-center">
      <div className="border-gray-300 h-[70px] w-[70px] border-8 animate-spin rounded-full border-t-gray-600"></div>
    </div>
  );
};
export default Loading;
