import { MdWindow } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaNotesMedical } from "react-icons/fa";

const hynaltiinSambar = () => {
  return (
    <div className="flex justify-center bg-[#f7f7f8] ">
      <div className="w-[1418px] h-[1000px]  flex flex-row ">
        <div className="w-[222px] h-[976px] border bg-white">
          <div className="w-[222px] h-[264px]  flex flex-col justify-between mt-5">
            <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
              <MdWindow className="w-[24px] h-[24px]" />
              <h1 className="font-bold">Хяналтын самбар</h1>
            </div>
            <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
              <TbNotes className="w-[24px] h-[24px]" />
              <h1 className="font-bold">Захиалга</h1>
            </div>
            <div className="flex h-[30px] gap-3 bg-white hover:bg-[#ededed]">
              <GrMoney className="w-[24px] h-[24px]" />
              <h1 className="font-bold">Орлого</h1>
            </div>
            <div className="flex gap-3 h-[30px] bg-white hover:bg-[#ededed]">
              <MdProductionQuantityLimits className="w-[24px] h-[24px]" />
              <h1 className="font-bold">Бүтээгдэхүүн</h1>
            </div>
            <div className="flex gap-3 h-[30px] bg-white hover:bg-[#ededed]">
              <IoMdSettings className="w-[24px] h-[24px]" />
              <h1 className="font-bold">Тохиргоо</h1>
            </div>
          </div>
        </div>
        <div className="">
          <div className="w-[1170px] h-[136px]  flex  justify-between m-5 gap-3">
            <div className="w-[573px] h-[136px]  bg-white rounded-xl">
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
            {/* <div className="w-[506px] h-[701px] border border-black"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default hynaltiinSambar;
