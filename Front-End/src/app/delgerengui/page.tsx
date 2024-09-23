"use client";
import Link from "next/link";
import Image from "next/image";

import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Footer } from "@/Components/footer";
import { useState } from "react";
const Delgerengui = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleFavoriteClick = (title: string) => {
    setFavorites((prev: Set<string>) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(title)) {
        newFavorites.delete(title);
      } else {
        newFavorites.add(title);
      }
      return newFavorites;
    });
  };
  const size = [
    { title: "S" },
    { title: "M" },
    { title: "L" },
    { title: "XL" },
    { title: "2XL" },
  ];
  const image = [
    {
      img: "/orange.png",
      title: "All Smiles Nalgene",
      price: "120'000₮",
    },
    {
      img: "/saaral.png",
      title: "All Smiles Nalgene",
      price: "120'000₮",
    },
    {
      img: "/malgai.png",
      title: "All Smiles Nalgene",
      price: "120'000₮",
    },
    {
      img: "/huren.png",
      title: "All Smiles Nalgene",
      price: "120'000₮",
    },
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

  const data = ["/ar1.png", "/hajuu.png", "/urd.png", "/ar2.png"];
  const [currentImage, setCurrentImage] = useState(data[0]);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="w-full  flex justify-center">
        <div className="w-[1040px] mt-10 flex flex-col gap-14">
          <div className="w-[1040px] h-[521px] flex items-center flex-row justify-between mt-10">
            <div className="w-[67px] h-[300px] justify-between items-center flex flex-col">
              {data.map((item, index) => (
                <div key={index}>
                  <Image
                    onClick={() => setCurrentImage(item)}
                    src={item}
                    alt="ff"
                    width={67}
                    height={67}
                  />
                </div>
              ))}
            </div>
            <div className="w-[422px] h-[521px] relative">
              <Image className="rounded-xl" src={currentImage} alt="" fill />
            </div>
            <div className="w-[500px] h-[520px]  flex items-center flex-col justify-center">
              <div className="w-[418px] gap-4 flex flex-col justify-between">
                <button className="w-[52px] h-[20px] border border-blue-600  rounded-xl text-sm font-bold">
                  ШИНЭ
                </button>
                <h1 className="text-2xl font-bold">Wildflower Hoodie</h1>
                <h1>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</h1>
                <h1>Хэмжээний заавар</h1>
                <div className="flex gap-2 text-sm ">
                  {size.map((item, title) => {
                    return (
                      <div className="w-[32px] h-[32px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white ">
                        {item.title}
                      </div>
                    );
                  })}
                </div>
                <div className="flex gap-3 mt-3">
                  <div className="w-[32px] h-[32px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white">
                    -
                  </div>
                  <h1 className="text-xl">1</h1>
                  <div className="w-[32px] h-[32px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white">
                    +
                  </div>
                </div>
                <h1 className="mt-5 text-xl font-bold">120'000₮</h1>
                <button className="w-[175px] h-[36px] bg-blue-600 hover:bg-blue-800 rounded-3xl flex justify-center items-center text-white">
                  Сагсанд нэмэх
                </button>
                <div className="flex flex-col">
                  <div className="mt-10 flex gap-4 flex-col">
                    <div className="flex flex-row gap-2">
                      <h1 className="">Үнэлгээ</h1>
                      <div className="flex flex-col">
                        <Link href="setgegdel">
                          <h1 className="text-blue-500 hover:text-blue-800 font-bold">
                            бүгдийг харах
                          </h1>
                        </Link>
                        <div className="w-[115px] h-[1px] bg-blue-500 hover:text-blue-800"></div>
                      </div>
                    </div>
                    <div className="flex gap-1 items-center ">
                      <FaStar className="text-yellow-200" />
                      <FaStar className="text-yellow-200" />
                      <FaStar className="text-yellow-200" />
                      <FaStar className="text-yellow-200" />
                      <FaStarHalfStroke className="text-yellow-200" />
                      <h1 className="font-bold">4.6</h1>
                      <h1 className="text-gray-400">(24)</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1040px] h-[890px] ">
            <div>
              <h1 className="text-4xl font-bold">Холбоотой бараа</h1>
            </div>
            <div className="flex flex-wrap justify-between mt-8">
              {image.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[244px] h-[391px] overflow-hidden relative  "
                  >
                    <div className="w-full h-[80%] relative overflow-hidden">
                      <Image
                        className="object-cover rounded-xl hover:scale-125 duration-1000"
                        src={item.img}
                        alt={item.title}
                        layout="fill"
                      />
                      {favorites.has(item.title) ? (
                        <IoIosHeart
                          onClick={() => handleFavoriteClick(item.title)}
                          className="absolute top-4 right-4 w-[24px] h-[24px] text-black"
                        />
                      ) : (
                        <FaRegHeart
                          onClick={() => handleFavoriteClick(item.title)}
                          className="absolute top-4 right-4 w-[20px] h-[20px]"
                        />
                      )}
                    </div>
                    <h1 className="text-xl">{item.title}</h1>
                    <h1 className="font-bold text-xl">{item.price}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Delgerengui;
