"use client";
import { MdWindow } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaNotesMedical } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/Components/ui/chart";

const hynaltiinSambar = () => {
  const product = [
    {
      title: "WOMEN'S HORSEBIT MULE",
      img: "/gutal.png",
      number: "1",
      price: "12.000₮",
      sale: "200",
    },
    {
      title: "HOUNDSTOOTH CREWNECK TOP",
      img: "/t-shirt.png",
      number: "2",
      price: "12.000₮",
      sale: "90",
    },
    {
      title: "HOUNDSTOOTH CREWNECK TOP",
      img: "/ygaan.png",
      number: "3",
      price: "12.000₮",
      sale: "85",
    },
    {
      title: "HOUNDSTOOTH CREWNECK TOP",
      img: "/nogoon.png",
      number: "4",
      price: "12.000₮",
      sale: "73",
    },
    {
      title: "HOUNDSTOOTH CREWNECK TOP",
      img: "/borr.png",
      number: "5",
      price: "12.000₮",
      sale: "62",
    },
    {
      title: "HOUNDSTOOTH CREWNECK TOP",
      img: "/huh.png",
      number: "6",
      price: "12.000₮",
      sale: "58",
    },
    {
      title: "HOUNDSTOOTH CREWNECK TOP",
      img: "/sneakerblack.png",
      number: "7",
      price: "12.000₮",
      sale: "41",
    },
    {
      title: "HOUNDSTOOTH CREWNECK TOP",
      img: "/sneakerwhite.png",
      number: "8",
      price: "12.000₮",
      sale: "20",
    },
    {
      title: "HOUNDSTOOTH CREWNECK TOP",
      img: "/gutal.png",
      number: "9",
      price: "12.000₮",
      sale: "200",
    },
  ];
  const chartData = [
    { month: "Jan", desktop: 4000, mobile: 2400 },
    { month: "Feb", desktop: 3000, mobile: 1398 },
    { month: "Mar", desktop: 2000, mobile: 9800 },
    { month: "Apr", desktop: 2780, mobile: 3908 },
    { month: "May", desktop: 1890, mobile: 4800 },
    { month: "Jun", desktop: 2390, mobile: 3800 },
    { month: "Jul", desktop: 3490, mobile: 4300 },
  ];
  const chartConfig = {
    // Add your chart configuration settings here
    // e.g., title, colors, etc.
  };
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
        <div className="w-[1200px] h-[1000px] border border-black bg-[#f7f7f8] flex flex-col">
          <div className="w-[1170px] h-[136px]  flex  justify-between m-5 gap-3">
            <div className="w-[573px] h-[136px] border border-white bg-white rounded-xl">
              <div className="flex flex-col m-3 gap-3">
                <h1 className="font-bold text-xl"> $ Орлого</h1>
                <h1 className="text-4xl font-bold">235,000₮</h1>
                <p>Өнөөдөр</p>
              </div>
            </div>
            <div className="w-[573px] h-[136px] bg-white rounded-xl">
              <div className="flex  m-3 gap-3">
                <FaNotesMedical className="w-[20px] h-[20px]" />
                <h1 className="font-bold">Захиалга</h1>
              </div>
              <div className="m-3">
                <h1 className="font-bold text-3xl">58</h1>
              </div>
              <div className="m-3">
                <h1>Өнөөдөр</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row m-5 mt-5 justify-between">
            <div className="w-[581px] h-[706px] rounded-2xl bg-white ">
              <div className="flex justify-between m-5">
                <h1 className="text-xl font-bold">Шилдэг Бүтээгдэхүүн</h1>
                <FaChevronRight />
              </div>
              <div className="w-[563px] h-[60px] font-bold p-3 flex justify-between bg-[#ecedf0] ">
                <h1>
                  <AiOutlineFieldNumber className="w-[24px] h-[26px]" />
                </h1>
                <h1>Бүтээгдэхүүн</h1>
                <h1>Зарагдсан</h1>
                <h1>Үнэ</h1>
              </div>
              {product.map((item, index) => {
                return (
                  <div className="w-[563px] h-[60px] flex justify-between items-center p-5 ">
                    <h1>{item.number}</h1>
                    <div className="flex gap-1 font-bold">
                      <Image
                        className="rounded-full"
                        width={40}
                        src={item.img}
                        height={40}
                        alt={item.title}
                      />
                      <h1>{item.title}</h1>
                    </div>
                    <h1>{item.sale}</h1>
                    <h1>{item.price}</h1>
                  </div>
                );
              })}
            </div>
            <div className="w-[565px] h-[349px] rounded-2xl bg-white flex flex-col p-5 gap-3 justify-center">
              <div className="w-[517px] h-[40px]  mt-3 flex justify-between">
                <h1 className="font-bold text-xl">Борлуулалт</h1>
                <FaChevronRight />
              </div>
              <div className="w-[517px] h-[258px] ">
                <ChartContainer
                  config={chartConfig}
                  className="h-[200px] w-full"
                >
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <Bar
                      dataKey="desktop"
                      fill="var(--color-desktop)"
                      radius={4}
                    />
                    <Bar
                      dataKey="mobile"
                      fill="var(--color-mobile)"
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default hynaltiinSambar;
