import Link from "next/link";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

const Tuuh = () => {
  const hurgelt = [
    {
      img: "chunkly.png",
      title: "chunkly glyph tee",
      price: "120'000₮",
      icon: "",
    },
    {
      img: "chunkly.png",
      title: "chunkly glyph tee",
      price: "120'000₮",
      icon: "<IoChevronDown />",
    },
    {
      img: "chunkly.png",
      title: "chunkly glyph tee",
      price: "120'000₮",
      icon: "<IoChevronDown />",
    },
    {
      img: "chunkly.png",
      title: "chunkly glyph tee",
      price: "120'000₮",
      icon: "<IoChevronDown />",
    },
  ];

  return (
    <div className="w-full h-[800px] flex items-center justify-center bg-[#f7f7f8]">
      <div className="w-[884px] h-[713px] flex justify-between  ">
        <div className="flex flex-col gap-3">
          <Link href="/sagslah">
            <button className="w-[244px] h-[36px] bg-white hover:bg-gray-300  flex justify-center items-center rounded-2xl">
              Хэрэглэгчийн хэсэг
            </button>
          </Link>
          <button className="w-[244px] h-[36px] bg-white hover:bg-gray-300 flex justify-center items-center rounded-2xl">
            Захиалгын түүх
          </button>
        </div>
        <div className="w-[620px] h-[713px] flex flex-col  justify-between">
          <h1 className="text-xl font-bold">Захиалгын түүх</h1>
          <div className="w-[620px] h-[1px] border border-dashed mt-5"></div>
          <div className="w-[620px] h-[340px] bg-white rounded-xl flex flex-col justify-between">
            <div className="flex gap-2">
              <h1 className="text-xl font-bold">2024-09-03 15:34</h1>
              <button className="w-[132px] h-[20px] bg-blue-600 hover:bg-blue-800 text-white text-sm justify-center items-center rounded-3xl">
                хүргэлтэнд гарсан
              </button>
            </div>
            {hurgelt.map((item, index) => (
              <div
                key={index}
                className="w-[572px] h-[40px] flex items-center px-2"
              >
                <div className="w-[36px] h-[36px]">
                  <Image
                    src={`/${item.img}`}
                    alt={item.title}
                    width={36}
                    height={36}
                  />
                </div>
                <div className="flex justify-between w-full px-2">
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xl font-bold">{item.price}</p>
                </div>
              </div>
            ))}
            <div className="w-[572px] h-[1px] border border-dashed"></div>
            <div className="flex text-xl font-bold justify-between w-[572px] h-[40px] ">
              <h1>Үнийн дүн:</h1>
              <h1>480’000₮</h1>
            </div>
          </div>
          <div className="w-[620px] h-[132px] bg-white rounded-xl mt-4  flex flex-col">
            <div className="flex gap-2 mt-5">
              <h1 className="text-xl font-bold">2024-08-23 15:34</h1>
              <button className="w-[70px] h-[20px] border border-blue bg-[#e9effd] hover:bg-blue-400 text-blue-800 text-sm rounded-2xl">
                Дууссан
              </button>
            </div>
            <div className=" w-[572px] h-[30px] flex justify-between text-2xl mt-5">
              <h1 className="text-xl font-bold">Үнийн дүн:</h1>
              <h1 className="text-xl font-bold">120'000₮</h1>
            </div>
          </div>
          <div className="w-[620px] h-[132px] bg-white rounded-xl mt-4  flex flex-col">
            <div className="flex gap-2 mt-5">
              <h1 className="text-xl font-bold">2024-08-23 15:34</h1>
              <button className="w-[70px] h-[20px] border border-blue bg-[#e9effd] hover:bg-blue-400 text-blue-500 text-sm rounded-2xl">
                Дууссан
              </button>
            </div>
            <div className=" w-[572px] h-[30px] flex justify-between text-2xl mt-5">
              <h1 className="text-xl font-bold">Үнийн дүн:</h1>
              <h1 className="text-xl font-bold">120'000₮</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tuuh;
