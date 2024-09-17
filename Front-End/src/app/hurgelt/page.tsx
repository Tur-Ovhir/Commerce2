import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { Input } from "@/Components/ui/input";
import Link from "next/link";

const Hurgelt = () => {
  const hur = [
    { img: "/chunkly.png", title: "Chunky Glyph Tee", price: "1 x 120’000₮" },
    { img: "/shargal.png", title: "Chunky Glyph Tee", price: "1 x 120’000₮" },
    { img: "/orange.png", title: "Chunky Glyph Tee", price: "1 x 120’000₮" },
  ];

  return (
    <div className="w-full h-[1050px] flex  flex-col gap-3 items-center bg-[#f7f7f8]">
      <div className="mt-10">
        <div className="w-full h-[32px] flex justify-center">
          <div className="w-[256px] h-[32px] flex items-center">
            <div className="w-[32px] h-[32px] border border-black flex rounded-full bg-blue-500 text-white justify-center items-center text-xl">
              <FaCheck />
            </div>
            <div className="w-[80px] h-[1px] bg-black"></div>
            <div className="w-[32px] h-[32px] border border-black flex rounded-full justify-center text-xl bg-blue-500 text-white">
              2
            </div>
            <div className="w-[80px] h-[1px] bg-black"></div>
            <div className="w-[32px] h-[32px] border border-black flex rounded-full justify-center text-xl">
              3
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1040px] h-[678px] flex justify-between mt-7">
        <div className="w-[333px] h-[448px] bg-[#ffffff] rounded-xl flex flex-col justify-center items-center">
          {/* <div className="flex">
            <h1 className="font-bold">Сагс</h1>
            <p className="text-gray-400">(4)</p>
          </div> */}
          <div className="w-[285px] h-[296px] flex flex-col justify-between ">
            {hur.map((item) => {
              return (
                <div key={item.img} className="w-[285px] h-[80px] gap-4 flex">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                    <h1 className="text-xl font-bold">120’000₮</h1>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[285px] h-[1px] border border-dashed mt-3"></div>
          <div className="flex gap-10 mt-3 text-xl">
            <h1 className="font-bold">Нийт төлөх дүн:</h1>
            <h1 className="font-bold">120’000₮</h1>
          </div>
        </div>
        <div className="w-[687px] h-[707px] bg-[#ffffff] rounded-xl flex justify-center items-center">
          <div className="w-[623px] h-[643px]  font-bold  ">
            <div>
              <h1 className="font-bold text-xl">
                2.Хүргэлтийн мэдээлэл оруулах
              </h1>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <h1>Овог:</h1>
              <Input className="w-[623px] h-[30px] rounded-xl" />
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <h1>Нэр:</h1>
              <Input className="w-[623px] h-[30px] rounded-xl" />
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <h1>Утасны дугаар:</h1>
              <Input className="w-[623px] h-[30px] rounded-xl" />
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <h1>Хаяг:</h1>
              <Input className="w-[623px] h-[94px] rounded-xl" />
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <h1>Нэмэлт мэдээлэл:</h1>
              <Input className="w-[623px] h-[66px] rounded-xl" />
              <p className="text-[#71717a]">
                Хүргэлттэй холбоотой нэмэлт мэдээлэл үлдээгээрэй
              </p>
            </div>
            <div className="flex justify-between mt-10">
              <button className="w-[114px] h-[36px] rounded-3xl border flex justify-center items-center">
                Буцах
              </button>
              <Link href="/tulbur">
                <button className="w-[166px] h-[36px] rounded-3xl border flex justify-center items-center bg-blue-600 hover:bg-blue-900 text-white">
                  Төлбөр төлөх
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hurgelt;
