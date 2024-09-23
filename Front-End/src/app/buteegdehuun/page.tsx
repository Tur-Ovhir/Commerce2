"use client";
import { Navbar } from "@/Components/navbar";
import { FaRegHeart } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { Checkbox } from "@/Components/ui/checkbox";

import Image from "next/image";
import { Footer } from "@/Components/footer";
import { useState } from "react";
import Link from "next/link";
import { title } from "process";

const Buteegdehuun = () => {
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

  const zurag = [
    {
      id: "1",
      title: "All Smiles Nalgene",
      price: "120'000₮",
      img: "/model.png",
    },
    {
      id: "2",
      title: "The Prompt Magazine",
      price: "120'000₮",
      img: "/prompt.png",
    },
    {
      id: "3",
      title: "Independent Corners Tee",
      price: "120'000₮",
      img: "/nogoon.png",
    },
    {
      id: "4",
      title: "The Prompt Magazine",
      price: "120'000₮",
      img: "/prompt.png",
    },
    {
      id: "5",
      title: "Chunky Glyph Tee",
      price: "120'000₮",
      img: "/jeans.png",
    },
    {
      id: "6",
      title: "All Smiles Nalgene",
      price: "120'000₮",
      img: "/sav.png",
    },
    {
      id: "7",
      title: "All Smiles Nalgene",
      price: "120'000₮",
      img: "/sav.png",
    },
    {
      id: "8",
      title: "The Prompt Magazine",
      price: "120'000₮",
      img: "/prompt.png",
    },
    {
      id: "9",
      title: "Independent Corners Tee",
      price: "120'000₮",
      img: "/nogoon.png",
    },
    {
      id: "10",
      title: "The Prompt Magazine",
      price: "120'000₮",
      img: "/prompt.png",
    },
    {
      id: "11",
      title: "Chunky Glyph Tee",
      price: "120'000₮",
      img: "/jeans.png",
    },
    {
      id: "12",
      title: "All Smiles Nalgene",
      price: "120'000₮",
      img: "/sav.png",
    },
    {
      id: "13",
      title: "All Smiles Nalgene",
      price: "120'000₮",
      img: "/sav.png",
    },
    {
      id: "14",
      title: "The Prompt Magazine",
      price: "120'000₮",
      img: "/prompt.png",
    },
    {
      id: "15",
      title: "Independent Corners Tee",
      price: "120'000₮",
      img: "/nogoon.png",
    },
  ];
  const angilal = [
    { title: "Малгай" },
    { title: "Усны сав" },
    { title: "T-shirt" },
    { title: "Hoodie" },
    { title: "Tee" },
    { title: "Цүнх" },
  ];
  const size = [
    { title: "Free" },
    { title: "S" },
    { title: "M" },
    { title: "L" },
    { title: "XL" },
    { title: "2XL" },
    { title: "3XL" },
  ];
  return (
    <div>
      <div className="w-full h-auto flex justify-center mt-10">
        <div className="max-w-5xl w-full flex flex-wrap md:flex-nowrap justify-between">
          <div className="w-full md:w-[245px] flex flex-col gap-2">
            <div className="flex flex-col gap-1 ">
              <h1 className="text-xl font-bold">Ангилал</h1>
              {angilal.map((item) => {
                return (
                  <div className="flex items-center gap-1">
                    <Checkbox />
                    <p className="hover:bg-gray-300 rounded-xl">{item.title}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h1 className="text-xl font-bold">Хэмжээ</h1>
              {size.map((item) => {
                return (
                  <div className="flex gap-1 items-center">
                    <Checkbox />
                    <p className="hover:bg-gray-300 rounded-xl">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full md:w-[774px] flex flex-wrap justify-between">
            {zurag.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[244px] h-[391px] overflow-hidden relative"
              >
                <div className="w-full h-[80%] relative overflow-hidden">
                  <Link href="delgerengui">
                    <Image
                      className="object-cover rounded-xl hover:scale-125 transition-transform duration-1000"
                      src={item.img}
                      alt={`Image of ${item.title}`}
                      layout="fill"
                    />
                  </Link>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buteegdehuun;
