"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const data = [
  {
    title: "The Prompt Magazine",
    price: "120'000₮",
    img: "/prompt.png",
  },
  {
    title: "Chunky Glyph Tee",
    price: "120'000₮",
    img: "/jeans.png",
  },
  {
    title: "All Smiles Nalgene",
    price: "120'000₮",
    img: "/sav.png",
  },
  {
    title: "Wildflower Hoodie",
    price: "108'000₮",
    img: "/har.png",
  },
];

const grid = [
  {
    img: "/orange.png",
    title: "Inkblot Tee",
    price: "120'000₮",
  },
  {
    img: "/saaral.png",
    title: "Gestures Longsleeve",
    price: "120'000₮",
  },
  {
    img: "/malgai.png",
    title: "Chunky Glyph Cap",
    price: "120'000₮",
  },
  {
    img: "/huren.png",
    title: "Local Styles Crewneck",
    price: "120'000₮",
  },
  {
    img: "/malgai.png",
    title: "Chunky Glyph Cap",
    price: "120'000₮",
  },
  {
    img: "/shargal.png",
    title: "All Smiles Nalgene",
    price: "120'000₮",
  },
];

export const Container = () => {
  // const [con.setCon]= useState<string>("");
  // useEffect = (() => {
  //   api.get("/").then((con)=> setCon(con.data.messsage))
  // },[]);
  return (
    <div className="flex justify-center flex-col items-center mt-10">
      <div className="w-[1040px] h-full  flex relative overflow-hidden ">
        <div className="mt-10 w-full h-[446px] relative">
          <Image
            className="object-cover hover:scale-125 duration-1000 rounded-xl"
            src="/hoodie.png"
            alt="hoodie"
            fill
          />
        </div>
        <div className="absolute mt-96 ml-5">
          <h1 className="text-2xl">Wildflower Hoodie</h1>
          <h1 className="text-xl font-bold">120’000₮</h1>
        </div>
      </div>

      <div className="w-full h-[391px] flex justify-center mt-7 ">
        <div className="w-[1040px] h-[391px] bg-white flex justify-between ">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[244px] h-[391px] overflow-hidden relative"
            >
              <div className="w-full h-[80%] relative overflow-hidden">
                <Image
                  className="object-cover rounded-xl hover:scale-125 duration-1000"
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                />
                <FaRegHeart className="absolute top-4 right-4 w-[24px] h-[24px]" />
              </div>
              <h1 className="text-xl">{item.title}</h1>
              <h1 className="font-bold text-xl">{item.price}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1350px] flex justify-center ">
        <div className="w-[1038px] h-[1191px]">
          <div className="grid grid-cols-4   gap-x-8 gap-y-16 [&>div:nth-child(3)]:col-span-2 [&>div:nth-child(3)]:row-span-2   [&>div:nth-child(4)]:col-span-2 [&>div:nth-child(4)]:row-span-2 ">
            {grid.map((item, index) => {
              const customHeight =
                index === 2
                  ? "h-[800px] w-full"
                  : index === 3
                  ? "h-[800px] w-full  "
                  : "h-[390px]";
              return (
                <div key={index} className={` ${customHeight}`}>
                  <div className="w-full h-full relative overflow-hidden ">
                    <Image
                      className="rounded-xl hover:scale-125 duration-1000"
                      src={item.img}
                      alt={item.title}
                      fill
                    />
                    <FaRegHeart className="absolute top-4 right-4 w-[24px] h-[24px]" />
                  </div>
                  <h1 className="text-xl">{item.title}</h1>
                  <h1 className="font-bold text-xl">{item.price}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-[391px] flex justify-center mt-7 ">
        <div className="w-[1040px] h-[391px] bg-white flex justify-between ">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[244px] h-[391px] overflow-hidden relative"
            >
              <div className="w-full h-[80%] relative overflow-hidden">
                <Image
                  className="object-cover rounded-xl hover:scale-125 duration-1000"
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                />
                <FaRegHeart className="absolute top-4 right-4 w-[24px] h-[24px]" />
              </div>
              <h1 className="text-xl">{item.title}</h1>
              <h1 className="font-bold text-xl">{item.price}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[391px] flex justify-center mt-7 ">
        <div className="w-[1040px] h-[391px] bg-white flex justify-between ">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[244px] h-[391px] overflow-hidden relative"
            >
              <div className="w-full h-[80%] relative overflow-hidden">
                <Image
                  className="object-cover rounded-xl hover:scale-125 duration-1000"
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                />
                <FaRegHeart className="absolute top-4 right-4 w-[24px] h-[24px]" />
              </div>
              <h1 className="text-xl">{item.title}</h1>
              <h1 className="font-bold text-xl">{item.price}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
