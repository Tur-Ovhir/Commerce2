import { MdWindow } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import * as React from "react";
import { Checkbox } from "@/Components/ui/checkbox";
import Image from "next/image";
import { FaShoppingBag } from "react-icons/fa";
import { SlPencil } from "react-icons/sl";
import { FaLightbulb } from "react-icons/fa";
import { GiDropEarrings } from "react-icons/gi";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { Input } from "@/Components/ui/input";
import { FaDollarSign } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdOutlineHotelClass } from "react-icons/md";
import { LuTrash } from "react-icons/lu";
import Link from "next/link";
const adminButeegdehuun = () => {
  const product = [
    {
      checkbox: "checkbox",
      img: " <FaShoppingBag/>",
      title: "Эмэгтэй цүнх",
      price: "19'000₮",
      number1: "76",
      number2: "30",
      day: "2024-01-10",
      icon1: "<LuTrash/>",
      icon2: " <SlPencil />",
    },
    {
      checkbox: "checkbox",
      img: " <FaLightbulb />",
      title: "Гэрэл",
      price: "29'000₮",
      number1: "90",
      number2: "28",
      day: "2024-01-10",
      icon1: "<LuTrash/>",
      icon2: " <SlPencil />",
    },
    {
      checkbox: "checkbox",
      icon: " <FaShoppingBag/>",
      title: "Эмэгтэй цүнх",
      price: "19'000₮",
      number1: "56",
      number2: "30",
      day: "2024-01-10",
      icon1: "<LuTrash/>",
      icon2: " <SlPencil />",
    },
    {
      checkbox: "checkbox",
      icon: " <GiDropEarrings />",
      title: "Ээмэг",
      price: "10'000₮",
      number1: "16",
      number2: "6",
      day: "2024-01-10",
      icon1: "<LuTrash/>",
      icon2: " <SlPencil />",
    },
    {
      checkbox: "checkbox",
      icon: " <FaShoppingBag/>",
      title: "Эмэгтэй цүнх",
      price: "19'000₮",
      number1: "36",
      number2: "35",
      day: "2024-01-10",
      icon1: "<LuTrash/>",
      icon2: " <SlPencil />",
    },
    {
      checkbox: "checkbox",
      icon: " <FaShoppingBag/>",
      title: "Эмэгтэй цүнх",
      price: "19'000₮",
      number1: "95",
      number2: "73",
      day: "2024-01-10",
      icon1: "<LuTrash/>",
      icon2: " <SlPencil />",
    },
    {
      checkbox: "checkbox",
      icon: " <FaShoppingBag/>",
      title: "Эмэгтэй цүнх",
      price: "19'000₮",
      number1: "206",
      number2: "80",
      day: "2024-01-10",
      icon1: "<LuTrash/>",
      icon2: " <SlPencil />",
    },
  ];
  return (
    <div className="w-1218px h-1000px flex flex-row justify-center mt-5">
      <div className="w-[222px] h-[976px] border bg-white">
        <div className="w-[222px] h-[264px]  flex flex-col justify-between mt-5">
          <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
            <MdWindow className="w-[24px] h-[24px]" />
            <Link href="/hynaltiinSambar">
              <h1 className="font-bold">Хяналтын самбар</h1>
            </Link>
          </div>
          <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
            <TbNotes className="w-[24px] h-[24px]" />
            <h1 className="font-bold">Захиалга</h1>
          </div>
          <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
            <GrMoney className="w-[24px] h-[24px]" />
            <h1 className="font-bold">Орлого</h1>
          </div>
          <div className="flex gap-3 h-[30px] bg-white hover:bg-[#ededed]">
            <MdProductionQuantityLimits className="w-[24px] h-[24px]" />
            <h1 className="font-bold">Бүтээгдэхүүн</h1>
          </div>
          <div className="flex gap-3 h-[30px] bg-white hover:bg-[#ededed]">
            <IoMdSettings className="w-[24px] h-[24px]" />
            <h1 className="font-bold">Тохиргоо</h1>
          </div>
        </div>
      </div>
      <div className="w-[1218px] h-[900px]  bg-[#f7f7f8]">
        <div className="w-[1218px] h-[56px] border flex gap-3">
          <h1 className="font-bold text-[#3f4245] hover:text-black ml-5">
            Бүтээгдэхүүн
          </h1>
          <h1 className="font-bold text-[#3f4245] hover:text-black">Ангилал</h1>
        </div>
        <div className="mt-5">
          <Link href="/productPlus">
            <button className="w-[280px] h-[48px] bg-black text-white font-bold rounded-xl">
              + Бүтээгдэхүүн нэмэх
            </button>
          </Link>
        </div>
        <div className="w-[1170px] h-[40px]  mt-5 flex flex-row justify-between">
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-[180px]">
                <MdOutlineHotelClass className="w-[20px] h-[20px]" />
                <SelectValue placeholder="Ангилал" />
              </SelectTrigger>
              <SelectContent className="font-bold">
                <SelectGroup>
                  <SelectLabel>Class:</SelectLabel>
                  <SelectItem value="apple">цүнх</SelectItem>
                  <SelectItem value="banana">Гэрэл</SelectItem>
                  <SelectItem value="blueberry">Гутал</SelectItem>
                  <SelectItem value="grapes">Цаг</SelectItem>
                  <SelectItem value="pineapple">Пүүз</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <FaDollarSign className="w-[20px] h-[20px]" />
                <SelectValue placeholder="Үнэ" />
              </SelectTrigger>
              <SelectContent className="font-bold">
                <SelectGroup>
                  <SelectLabel>Price:</SelectLabel>
                  <SelectItem value="apple">10'000₮</SelectItem>
                  <SelectItem value="banana">20'000₮</SelectItem>
                  <SelectItem value="blueberry">30'000₮</SelectItem>
                  <SelectItem value="grapes">40'000₮</SelectItem>
                  <SelectItem value="pineapple">50'000₮</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <FaCalendarAlt className="w-[20px] h-[20px]" />
                <SelectValue placeholder="Сараар" />
              </SelectTrigger>
              <SelectContent className="font-bold">
                <SelectGroup>
                  <SelectLabel>Day:</SelectLabel>
                  <SelectItem value="apple">1-2сар</SelectItem>
                  <SelectItem value="banana">3-4сар</SelectItem>
                  <SelectItem value="blueberry">5-6сар</SelectItem>
                  <SelectItem value="grapes">7-8сар</SelectItem>
                  <SelectItem value="pineapple">9-12сар</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex">
            <FaSearch className="w-[24px] h-[24px] mt-2" />
            <Input
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
              className="w-[419px] h-[40px]"
            />
          </div>
        </div>
        <div className="w-[1170px] h-[692px] mt-5 border-black ">
          <div className="w-[1170px] h-[40px] ml-10 gap-20 flex font-bold">
            <h1>Бүтээгдэхүүн</h1>
            <h1>Ангилал</h1>
            <h1>Үнэ</h1>
            <h1>Үлдэгдэл</h1>
            <h1>Зарагдсан</h1>
            <h1>Нэмсэн огноо</h1>
          </div>
          {product.map((index, item) => {
            return (
              <div className="w-[1170px] h-[90px] border flex  flex-row  items-center ml-5 gap-20 ">
                <Checkbox className="w-[20px] h-[20px]  border-black" />

                <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
                <h1 className="font-bold">цүнх</h1>
                <h1 className="font-bold">49'000₮</h1>
                <h1 className="font-bold">70</h1>
                <h1 className="ml-16 font-bold">49</h1>
                <h1 className="ml-16 font-bold">2024-01-10</h1>
                <LuTrash className="ml-10 text-red-500 hover:text-red-900 w-[20px] h-[20px]" />
                <SlPencil className="text-green-400 w-[20px] h-[20px]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default adminButeegdehuun;
