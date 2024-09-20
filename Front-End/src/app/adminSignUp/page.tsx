import Image from "next/image";

const AdminSignUp = () => {
  return (
    <div>
      <div>
        <Image
          className=""
          src="/Group.png" // Ensure this path is correct
          alt="img"
          width={194}
          height={32}
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[440px] h-[756px] border border-black"></div>
      </div>
    </div>
  );
};

export default AdminSignUp;
