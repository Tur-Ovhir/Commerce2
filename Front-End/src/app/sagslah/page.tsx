import { Navbar } from "@/Components/navbar";
import { Input } from "@/Components/ui/input";
import { Footer } from "@/Components/footer";
import Link from "next/link";
const Sagslah = () => {
  return (
    <div>
      <div className="w-full h-[700px]   flex items-center justify-center">
        <div className="w-[884px] h-[589px] flex justify-between">
          <div className=" flex flex-col gap-3">
            <button className="w-[244px] h-[36px] bg-white hover:bg-gray-300 border flex justify-center items-center rounded-2xl">
              Хэрэглэгчийн хэсэг
            </button>
            <Link href="tuuh">
              <button className="w-[244px] h-[36px] bg-white hover:bg-gray-300 border flex justify-center items-center rounded-2xl">
                Захиалгын түүх
              </button>
            </Link>
          </div>
          <div className="w-[620px] h-[589px]  flex flex-col justify-between">
            <div>
              <h1 className="text-xl">Хэрэглэгчийн хэсэг</h1>
              <div className="w-[620px] h-[1px] border border-dashed mt-5"></div>
            </div>
            <div>
              <h1>Овог:</h1>
              <Input type="text" className="w-[620px] h-[28px] border " />
            </div>
            <div className="mt-4">
              <h1>Нэр:</h1>
              <Input type="text" className="w-[620px] h-[28px] border " />
            </div>
            <div>
              <h1>Утасны дугаар:</h1>
              <Input type="text" className="w-[620px] h-[28px] border " />
            </div>
            <div>
              <h1>Имэйл хаяг:</h1>
              <Input type="text" className="w-[620px] h-[28px] border " />
            </div>
            <div>
              <h1> Хаяг:</h1>
              <Input type="text" className="w-[620px] h-[94px] border " />
            </div>
            <div className="flex justify-between">
              <h1>.</h1>
              <button className="w-[172px] h-[36px] bg-blue-600 hover:bg-blue-800 text-white glrx justify-center items-center rounded-2xl">
                Мэдээлэл шинэчлэх
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sagslah;
