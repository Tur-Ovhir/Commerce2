"use client";

import { MdWindow } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import { Input } from "@/Components/ui/input";
import { FaSearch } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
const Zahialga = () => {
  const product = [
    {
      id: "#12345678",
      name: "tur@gmail.com",
      day: "2023-11-09",
      time: "10:50",
      price: "12'000₮",
      title: "Хүргэгдсэн",
      icon: "FaChevronRight",
    },
    {
      id: "#12345678",
      name: "Zoloo@gmail.com",
      day: "2023-02-09",
      time: "10:53",
      price: "12'000₮",
      title: "Шинэ захиалга",
      icon: "FaChevronRight",
    },
    {
      id: "#12345678",
      name: "soko@gmail.com",
      day: "2023-04-09",
      time: "11:58",
      price: "32'000₮",
      title: "Хүргэгдсэн",
      icon: "FaChevronRight",
    },
    {
      id: "#12345678",
      name: "Mosoko@gmail.com",
      day: "2023-11-09",
      time: "11:58",
      price: "19'000₮",
      title: "Хүргэгдсэн",
      icon: "FaChevronRight",
    },
    {
      id: "#12345678",
      name: "Moko@gmail.com",
      day: "2023-10-09",
      time: "10:18",
      price: "10'000₮",
      title: "Хүргэлтэнд гарсан",
      icon: "FaChevronRight",
    },
    {
      id: "#12345678",
      name: "Tedy@gmail.com",
      day: "2023-01-29",
      time: "01:54",
      price: "32'000₮",
      title: "Бэлтгэгдэж байна",
      icon: "FaChevronRight",
    },
    {
      id: "#12345678",
      name: "Maral@gmail.com",
      day: "2023-01-19",
      time: "10:58",
      price: "42'000₮",
      title: "Хүргэгдсэн",
      icon: "FaChevronRight",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] h-[1000px] border border-black flex justify-between">
        <div className="w-[222px] h-[976px] bg-white mt-5">
          <div className="w-[222px] h-[264px]  flex flex-col justify-between ">
            <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
              <MdWindow className="w-[24px] h-[24px]" />
              <h1 className="font-bold">Хяналтын самбар</h1>
            </div>
            <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
              <TbNotes className="w-[24px] h-[24px]" />
              <Link href="zahialga">
                <h1 className="font-bold">Захиалга</h1>
              </Link>
            </div>
            <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
              <GrMoney className="w-[24px] h-[24px]" />
              <h1 className="font-bold">Орлого</h1>
            </div>
            <div className="flex gap-3 h-[30px] bg-white hover:bg-[#ededed]">
              <MdProductionQuantityLimits className="w-[24px] h-[24px]" />
              <Link href="/adminButeegdehuun">
                <h1 className="font-bold">Бүтээгдэхүүн</h1>
              </Link>
            </div>
            <div className="flex gap-3 h-[30px] bg-white hover:bg-[#ededed]">
              <IoMdSettings className="w-[24px] h-[24px]" />
              <h1 className="font-bold">Тохиргоо</h1>
            </div>
          </div>
        </div>
        <div className="w-[1200px] h-[1000px] border bg-[#f7f7f8] flex flex-col">
          <div className="w-[1180px] h-[56px]  flex   m-3 gap-5  items-center">
            <h1>Бүгд</h1>
            <h1>Шинэ захиалага</h1>
            <h1>Бэлтгэгдэж байна</h1>
            <h1>Хүргэлтэнд гарсан</h1>
            <h1>Хүргэгдсэн</h1>
            <h1>Цуцлагдсан</h1>
          </div>
          <div className=" w-[1170px] h-[36px] flex flex-row m-5 mt-5 justify-between ">
            <div className="flex gap-3">
              <button className="w-[94px] h-[36px] border border-black rounded-xl bg-green-500 text-white font-bold">
                Өнөөдөр
              </button>
              <button className="w-[94px] h-[36px] border border-black rounded-xl font-bold ">
                7 хоног
              </button>
              <Select>
                <SelectTrigger className="w-[110px] border border-black">
                  <CiCalendar className="w-[15px] h-[15px]" />
                  <SelectValue placeholder="Сараар" className="rounded-2xl" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-1">
              <FaSearch className="w-[30px] h-[30px]" />
              <Input
                placeholder="  Дугаар,Имэйл"
                className="w-[302px] h-[36px] border border-black rounded-xl"
              />
            </div>
          </div>
          <div className="w-[1170px] h-[616px]  m-3 bg-white flex flex-col gap-3">
            <div>
              <h1 className="font-bold text-3xl">Захиалга</h1>
            </div>
            <div className="w-[1170px] h-[36px] mt-5 flex justify-between bg-[#f7f7f8] border">
              <h1>Захиалгын ID Дугаар</h1>
              <h1>Үйлчлүүлэгч</h1>
              <h1>Огноо</h1>
              <h1>Цаг</h1>
              <h1>Төлбөр</h1>
              <h1>Статус</h1>
              <h1>Дэлгэрэнгүй</h1>
            </div>
            {product.map((item, index) => {
              return (
                <div className="w-[1170px] h-[68px] flex gap-24 items-center border">
                  <h1 className="font-bold">{item.id}</h1>
                  <h1 className="font-bold">{item.name}</h1>
                  <h1>{item.day}</h1>
                  <h1>{item.time}</h1>
                  <h1>{item.price}</h1>
                  <button className="w-[95px] h-[40px] border rounded-2xl bg-green-200 text-sm">
                    {item.title}
                  </button>
                  <h1>
                    <FaChevronRight />
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Zahialga;
