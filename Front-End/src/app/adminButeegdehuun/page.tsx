import { MdWindow } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
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
import { Input } from "@/Components/ui/input";
import { FaDollarSign } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const adminButeegdehuun = () => {
  return (
    <div className="w-1218px h-1000px flex flex-row justify-center mt-5">
      <div className="w-[222px] h-[976px] border border-black">
        <div className="w-[222px] h-[264px] border flex flex-col justify-between mt-5">
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
      <div className="w-[1218px] h-[900px] border border-black bg-[#f7f7f8]">
        <div className="w-[1218px] h-[56px] border border-black flex gap-3">
          <h1 className="font-bold text-[#3f4245] hover:text-black ml-5">
            Бүтээгдэхүүн
          </h1>
          <h1 className="font-bold text-[#3f4245] hover:text-black">Ангилал</h1>
        </div>
        <div className="mt-5">
          <button className="w-[280px] h-[48px] bg-black text-white font-bold rounded-xl">
            + Бүтээгдэхүүн нэмэх
          </button>
        </div>
        <div className="w-[1170px] h-[40px]  mt-5 flex flex-row justify-between">
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ангилал" />
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
            <Select>
              <SelectTrigger className="w-[180px]">
                <FaDollarSign className="w-[20px] h-[20px]" />
                <SelectValue placeholder="Үнэ" />
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
            <Select>
              <SelectTrigger className="w-[180px]">
                <FaCalendarAlt className="w-[20px] h-[20px]" />
                <SelectValue placeholder="Сараар" />
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
          <div className="flex">
            <FaSearch className="w-[24px] h-[24px] mt-2" />
            <Input
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
              className="w-[419px] h-[40px]"
            />
          </div>
        </div>
        <div className="w-[1170px] h-[692px] border border-black"></div>
      </div>
    </div>
  );
};
export default adminButeegdehuun;
