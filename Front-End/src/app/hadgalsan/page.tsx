"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Hadgalsan = () => {
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  const hadgalsan = [
    {
      img: "/chunkly.png",
      title: "Chunky Glyph Tee",
      price: "120'000₮",
      id: 1,
    },
    {
      img: "/shargal.png",
      title: "Chunky Glyph Tee",
      price: "120'000₮",
      id: 2,
    },
    {
      img: "/huren.png",
      title: "Chunky Glyph Tee",
      price: "120'000₮",
      id: 3,
    },
  ];

  const toggleFavorite = (id: number) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <div className="w-full h-[1000px] bg-[#f7f7f8] flex justify-center">
      <div className="w-[622px] h-[472px] flex flex-col justify-between mt-40">
        <div className="flex gap-1">
          <h1 className="text-xl font-bold">Хадгалсан бараа</h1>
          <h1 className="text-gray-400 text-xl">(3)</h1>
        </div>
        {hadgalsan.map((item) => (
          <div
            key={item.id}
            className="w-[622px] h-[132px] bg-white rounded-2xl flex flex-row mb-2"
          >
            <div className="flex items-center">
              <Image
                className="rounded-2xl ml-3"
                src={item.img}
                alt={item.title}
                width={100}
                height={100}
              />
            </div>
            <div className="ml-5 mt-5 flex flex-col justify-center gap-2">
              <div className="flex gap-60 items-center">
                <h1 className="text-xl">{item.title}</h1>
                <button onClick={() => toggleFavorite(item.id)}>
                  {favorites[item.id] ? (
                    <FaHeart className="w-[24px] h-[24px] text-black" />
                  ) : (
                    <FaRegHeart className="w-[24px] h-[24px] text-gray-400" />
                  )}
                </button>
              </div>
              <h1 className="font-bold mt-1">{item.price}</h1>
              <button className="w-[81px] h-[28px] bg-blue-600 hover:bg-blue-800 flex justify-center items-center text-white rounded-3xl mt-2">
                Сагслах
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hadgalsan;
