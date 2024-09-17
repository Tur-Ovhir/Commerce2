"use client";
import Link from "next/link";
import Image from "next/image";

import { IoIosHeart } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { Input } from "@/Components/ui/input";

const Setgegdel = () => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [totalPrice, setTotalPrice] = useState(120000); // State for total price

  const pricePerItem = 120000; // Fixed price per item

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

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => {
      const newQuantity = Math.max(1, prev + change); // Ensure quantity is at least 1
      setTotalPrice(newQuantity * pricePerItem); // Update total price
      return newQuantity;
    });
  };

  const image = [
    { img: "/orange.png", title: "All Smiles Nalgene", price: "120'000₮" },
    { img: "/saaral.png", title: "All Smiles Nalgene", price: "120'000₮" },
    { img: "/malgai.png", title: "All Smiles Nalgene", price: "120'000₮" },
    { img: "/huren.png", title: "All Smiles Nalgene", price: "120'000₮" },
    { title: "The Prompt Magazine", price: "120'000₮", img: "/prompt.png" },
    { title: "Chunky Glyph Tee", price: "120'000₮", img: "/jeans.png" },
    { title: "All Smiles Nalgene", price: "120'000₮", img: "/sav.png" },
    { title: "Wildflower Hoodie", price: "108'000₮", img: "/har.png" },
  ];

  const size = [
    { title: "S" },
    { title: "M" },
    { title: "L" },
    { title: "XL" },
    { title: "2XL" },
  ];

  const data = ["/ar1.png", "/hajuu.png", "/urd.png", "/ar2.png"];
  const [currentImage, setCurrentImage] = useState(data[0]);
  const [hidden, setHidden] = useState(false);

  return (
    <div className="w-full flex flex-col justify-between">
      <div className="w-full flex justify-center">
        <div className="w-[1040px] flex flex-col">
          <div className="w-[1040px] h-[521px] flex items-center flex-row justify-between mt-10">
            <div className="w-[67px] h-[300px] justify-between items-center flex flex-col">
              {data.map((item, index) => (
                <div key={index}>
                  <Image
                    onClick={() => setCurrentImage(item)}
                    src={item}
                    alt="thumbnail"
                    width={67}
                    height={67}
                  />
                </div>
              ))}
            </div>
            <div className="w-[422px] h-[521px] relative">
              <Image className="rounded-xl" src={currentImage} alt="" fill />
            </div>
            <div className="w-[500px] h-[520px] flex items-center flex-col justify-center">
              <div className="w-[418px] gap-4 flex flex-col justify-between">
                <button className="w-[52px] h-[20px] border border-blue-600 rounded-xl text-sm font-bold">
                  ШИНЭ
                </button>
                <h1 className="text-2xl font-bold">Wildflower Hoodie</h1>
                <h1>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</h1>
                <h1>Хэмжээний заавар</h1>
                <div className="flex gap-2 text-sm">
                  {size.map((item, index) => (
                    <div
                      key={index}
                      className="w-[32px] h-[32px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white"
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-[32px] h-[32px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white"
                  >
                    -
                  </button>
                  <h1 className="text-xl">{quantity}</h1>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-[32px] h-[32px] border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white"
                  >
                    +
                  </button>
                </div>
                <h1 className="mt-5 text-xl font-bold">
                  {totalPrice.toLocaleString()}₮
                </h1>
                <Link href="/sagslah">
                  <button className="w-[175px] h-[36px] bg-blue-600 hover:bg-blue-800 rounded-3xl flex justify-center items-center text-white">
                    Сагсанд нэмэх
                  </button>
                </Link>
                <div className="flex flex-col">
                  <div className="mt-10 flex gap-4 flex-col">
                    <div className="flex flex-row gap-2">
                      <h1 className="">Үнэлгээ</h1>
                      <div className="flex flex-col">
                        <Link href="setgegdel">
                          <h1
                            className={`text-blue-500 hover:text-blue-800 font-bold`}
                            onClick={() => setHidden(!hidden)}
                          >
                            бүгдийг харах
                          </h1>
                        </Link>
                        <div className="w-[115px] h-[1px] bg-blue-500 hover:text-blue-800"></div>
                      </div>
                    </div>
                    <div className="flex gap-1 items-center">
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
          <div className="flex justify-between">
            <div>.</div>
            <div
              className={`w-[511px] h-[700px] bg-[#f4f4f5] rounded-2xl flex flex-col justify-between ${
                hidden ? "block" : "hidden"
              }`}
            >
              <div className="w-[511px] h-[294px] flex gap-4 flex-col">
                <h1>Одоор үнэлэх:</h1>
                <div className="flex gap-1 items-center">
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStarHalfStroke className="text-yellow-200" />
                </div>
                <h1>Сэтгэгдэл үлдээх:</h1>
                <Input
                  type="text"
                  placeholder="Энд бичнэ үү"
                  className="w-[463px] h-[94px] bg-white"
                />
                <button className="w-[121px] h-[36px] bg-blue-500 hover:bg-blue-800 rounded-3xl text-white">
                  үнэлэх
                </button>
              </div>
              <div className="w-[511px] h-[388px] bg-white flex flex-col gap-3">
                <div className="flex flex-row">
                  <h1 className="text-xl">Saraa</h1>
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                </div>
                <div>
                  <p className="text-[#71717a]">
                    Ваав материал ёстой гоё байна 😍
                  </p>
                </div>
                <div className="w-[511px] h-[1px] border border-dashed mt-2"></div>
                <div className="flex flex-row gap-1">
                  <h1 className="text-xl">Saraa</h1>
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                </div>
                <div>
                  <p className="text-[#71717a]">
                    Ваав материал ёстой гоё байна 😍
                  </p>
                </div>
                <div className="w-[511px] h-[1px] border border-dashed mt-2"></div>
                <div className="flex flex-row gap-1">
                  <h1 className="text-xl">Saraa</h1>
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                </div>
                <div>
                  <p className="text-[#71717a]">
                    Ваав материал ёстой гоё байна 😍
                  </p>
                </div>
                <div className="w-[511px] h-[1px] border border-dashed mt-2"></div>
              </div>
            </div>
          </div>
          <div className="w-[1040px] h-[890px] mt-10">
            <div>
              <h1 className="text-4xl font-bold">Холбоотой бараа</h1>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              {image.map((item, index) => (
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
    </div>
  );
};

export default Setgegdel;
