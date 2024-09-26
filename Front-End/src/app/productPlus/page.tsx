"use client";
import { MdWindow } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { Input } from "@/Components/ui/input";
import { PiImage } from "react-icons/pi";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import Link from "next/link";
const productPlus = () => {
  return (
    <div className="w-full h-[1000px] flex justify-center">
      <div className="w-[222px] h-[976px] border bg-white">
        <div className="w-[222px] h-[264px]  flex flex-col justify-between mt-5">
          <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
            <MdWindow className="w-[24px] h-[24px]" />
            <h1 className="font-bold">Хяналтын самбар</h1>
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
      <div className="w-[1218px] h-[1000px]  bg-[#f7f7f8]">
        <div className="w-[1218px] h-[56px] border flex items-center">
          <Link href="/adminButeegdehuun">
            <IoIosArrowBack className="w-[25px] h-[25px] ml-5 text-gray-400 hover:text-black" />
          </Link>
          <h1 className="font-bold text-[#3f4245]  hover:text-black ml-5">
            Бүтээгдэхүүн нэмэх
          </h1>
        </div>
        <div className="flex justify-between">
          <div className=" gap-7 flex flex-col mt-16">
            <div className="w-[563px] h-[312px] bg-white rounded-2xl ml-5">
              <div className="ml-5 mt-5 flex flex-col gap-2">
                <h1 className="font-bold">Бүтээгдэхүүн нэр</h1>
                <Input
                  placeholder="Нэр"
                  className="bg-[#f7f7f8] w-[515px] h-[44px]"
                />
                <h1 className="font-bold">Нэмэлт мэдээлэл</h1>
                <Input
                  placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                  className="w-[515px] h-[72px] bg-[#f7f7f8]"
                />
                <h1 className="font-bold">Барааны код</h1>
                <Input
                  placeholder="#12345678"
                  className="w-[515px] h-[44px] bg-[#f7f7f8]"
                />
              </div>
            </div>
            <div className="w-[563px] h-[213px]  bg-white rounded-2xl ml-5">
              <h1 className="font-bold ml-5 mt-5">Бүтээгдэхүүний зураг</h1>
              <div className="flex flex-row gap-3 ml-5 mt-5">
                <button className="w-[125px] h-[125px] border border-black border-dashed rounded-2xl flex justify-center items-center text-3xl">
                  <PiImage />
                </button>
                <button className="w-[125px] h-[125px] border border-black border-dashed rounded-2xl flex justify-center items-center text-3xl">
                  <PiImage />
                </button>
                <button className="w-[125px] h-[125px] border border-black border-dashed rounded-2xl flex justify-center items-center text-3xl">
                  <PiImage />
                </button>
                <button className="w-[125px] h-[125px] border border-black border-dashed rounded-2xl flex justify-center items-center">
                  <div className="w-[32px] h-[32px] bg-[#ecedf0] rounded-full text-xl">
                    +
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[563px] h-[132px] bg-white rounded-2xl ml-5 flex flex-row justify-center items-center gap-3">
              <div className="flex flex-col ml-5 ">
                <h1 className="font-bold">Үндсэн үнэ</h1>
                <Input
                  placeholder="Үндсэн үнэ"
                  className="w-[250px] h-[50px] bg-[#f7f7f8] mt-2"
                />
              </div>
              <div className="">
                <h1 className="font-bold">Үлдэгдэл тоо ширхэг</h1>
                <Input
                  placeholder="Үлдэгдэл тоо ширхэг"
                  className="w-[250px] h-[50px] bg-[#f7f7f8] mt-2"
                />
              </div>
            </div>
          </div>
          <div className="w-[575px] h-[773px] mt-16 flex flex-col justify-between  m-5">
            <div className="w-[575px] h-[232px] rounded-2xl bg-white ">
              <div className="m-5 flex flex-col gap-3">
                <h1 className="font-bold">Ерөнхий аигилал</h1>
                <Select>
                  <SelectTrigger className="w-[505px] h-[56px] bg-[#f7f7f8]">
                    <SelectValue placeholder="Сонгох" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <h1 className="font-bold">Дэд ангилал</h1>
                <Select>
                  <SelectTrigger className="w-[505px] h-[56px] bg-[#f7f7f8] ">
                    <SelectValue placeholder="Сонгох" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-[575px] h-[228px]  rounded-2xl bg-white ">
              <div className="flex flex-col gap-4 m-5">
                <h1 className="font-bold ">Төрөл</h1>
                <div className="w-[109px] h-[72px]  flex flex-col justify-between">
                  <div className="flex gap-2">
                    <h1 className="mt-1">Өнгө</h1>
                    <button className="w-[32px] h-[32px] rounded-full bg-[#f7f7f8] text-xl ">
                      +
                    </button>
                  </div>
                  <div className="flex gap-1">
                    <h1 className="mt-1">Хэмжээ</h1>
                    <button className="w-[32px] h-[32px] rounded-full bg-[#f7f7f8] text-xl ">
                      +
                    </button>
                  </div>
                </div>
                <button className="w-[118px] h-[36px] border border-gray-400 rounded-xl font-bold">
                  Төрөл нэмэх
                </button>
              </div>
            </div>
            <div className="w-[575px] h-[195px]  rounded-2xl bg-white">
              <div className="flex flex-col m-5 gap-2">
                <h1 className="font-bold">Таг</h1>
                <Input
                  placeholder="Таг нэмэх..."
                  className="w-[507px] h-[58px] bg-[#f7f7f8] mt-2"
                />
                <h1 className="text-gray-400">
                  Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
                </h1>
              </div>
            </div>
            <div className="flex flex-row mt-3 gap-2 ml-80">
              <button className="w-[113px] h-[56px] border border-gray-400 bg-white rounded-xl font-bold">
                Ноорог
              </button>
              <button className="w-[113px] h-[56px] border border-gray-400 bg-black text-white rounded-xl font-bold">
                Нийтлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default productPlus;
