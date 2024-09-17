"use client";
import Link from "next/link";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";

const shoppingItems = [
  {
    img: "/chunkly.png",
    title: "Chunky Glyph Tee",
    price: 120000,
  },
  {
    img: "/chunkly.png",
    title: "Chunky Glyph Tee",
    price: 120000,
  },
  {
    img: "/chunkly.png",
    title: "Chunky Glyph Tee",
    price: 120000,
  },
];

const Shopping = () => {
  const [quantities, setQuantities] = useState(shoppingItems.map(() => 1));

  const handleQuantityChange = (index: number, delta: number) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] = Math.max(1, newQuantities[index] + delta);
      return newQuantities;
    });
  };

  const totalPrice = shoppingItems.reduce(
    (acc, item, index) => acc + 120000 * quantities[index], // Assuming fixed price
    0
  );

  return (
    <div className="w-full h-[800px] flex justify-center bg-[#f7f7f8]">
      <div className="flex justify-center mt-5 flex-col">
        <div className="w-full h-[32px] flex justify-center">
          <div className="w-[256px] h-[32px] flex items-center">
            <div className="w-[32px] h-[32px] border border-black flex rounded-full bg-blue-500 text-white justify-center text-xl">
              1
            </div>
            <div className="w-[80px] h-[1px] bg-black"></div>
            <div className="w-[32px] h-[32px] border border-black flex rounded-full justify-center text-xl">
              2
            </div>
            <div className="w-[80px] h-[1px] bg-black"></div>
            <div className="w-[32px] h-[32px] border border-black flex rounded-full justify-center text-xl">
              3
            </div>
          </div>
        </div>
        <div className="w-[638px] h-[664px] rounded-xl bg-white flex flex-col gap-6">
          <div className="flex gap-1 ml-5">
            <h1 className="text-xl font-bold">1.Сагс </h1>
            <p className="text-xl text-gray-400">(4)</p>
          </div>
          {shoppingItems.map((item, index) => (
            <div
              key={index}
              className="w-[574px] h-[132px] border rounded-2xl flex items-center gap-2 ml-5"
            >
              <div className="flex items-center">
                <Image
                  className="rounded-2xl"
                  src={item.img}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              </div>
              <div className="w-full">
                <div className="flex flex-row w-full gap-72 items-center ">
                  {item.title}
                  <FaRegTrashAlt className="text-xl cursor-pointer" />
                </div>
                <div className="flex gap-3 mt-3">
                  <div
                    className="w-[32px] h-[32px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white cursor-pointer"
                    onClick={() => handleQuantityChange(index, -1)}
                  >
                    -
                  </div>
                  <h1 className="text-xl">{quantities[index]}</h1>
                  <div
                    className="w-[32px] h-[32px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white cursor-pointer"
                    onClick={() => handleQuantityChange(index, 1)}
                  >
                    +
                  </div>
                </div>
                <div className="font-bold text-xl">
                  {item.price * quantities[index]}
                </div>
              </div>
            </div>
          ))}
          <div className="flex ml-5 gap-72">
            <h1 className="text-xl">Нийт төлөх дүн:</h1>
            <h1 className="text-xl font-bold">
              {totalPrice.toLocaleString()}₮
            </h1>
          </div>
          <div className="ml-5 gap-96 flex">
            <h1>.</h1>
            <Link href="/hurgelt">
              <button className="w-[172px] h-[36px] bg-blue-500 rounded-3xl flex justify-center items-center text-white hover:bg-blue-800">
                Худалдан авах
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;
