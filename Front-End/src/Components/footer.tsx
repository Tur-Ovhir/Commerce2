import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";
export const Footer = () => {
  return (
    <div className="w-[full] h-[282px] bg-black mt-12 justify-center items-center flex flex-col gap-20">
      <div className="w-[1040px] h-[48px]  flex items-center justify-between">
        <div>
          <Image
            className=""
            src="/Pinecone.png"
            alt=""
            width={41}
            height={35}
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[48px] h-[48px] border border-gray-600 rounded-full flex justify-center items-center">
            <FiPhone className="text-white" />
          </div>
          <h1 className="text-white text-xl">(976) 7007-1234</h1>
          <div className="w-[48px] h-[48px] border border-gray-600 rounded-full flex justify-center items-center">
            <CiMail className="text-white" />
          </div>
          <h1 className="text-white text-xl">contact@ecommerce.mn</h1>
        </div>
      </div>
      <div className="w-[1040px] h-[1px] bg-gray-500"></div>
      <div className="w-[1040px] h-[20px] flex items-center justify-between ">
        <h1 className="text-xl text-white font-bold">© 2024 Ecommerce MN</h1>
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/groups/814898001945119">
            <FaFacebook className="text-white w-[20px] h-[20px]" />
          </Link>
          <Link href="https://www.instagram.com/marketshop_ecommerce/">
            <LuInstagram className="text-white w-[20px] h-[20px]" />
          </Link>
          <Link href="https://x.com/ecommerce?lang=en">
            <FiTwitter className="text-white w-[20px] h-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
