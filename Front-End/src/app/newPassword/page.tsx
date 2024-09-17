"use client";
import { useState } from "react";
import { Input } from "@/Components/ui/input";
import Link from "next/link";
const NewPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [uppercaseValid, setUppercaseValid] = useState(false);

  // Handle input change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);

    // Check if the password contains at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(value);
    setUppercaseValid(hasUppercase);
  };

  return (
    <div className="w-full h-[600px] flex mt-40 flex-col items-center ">
      <h1 className="font-bold text-3xl">Нууц үг сэргээх</h1>
      <div className="w-[334px] h-[268px] mt-10 justify-between flex flex-col">
        <Input
          className="w-[334px] h-[36px] rounded-2xl border"
          placeholder="Шинэ нууц үг"
          value={newPassword}
          onChange={handlePasswordChange}
        />
        <Input
          type="password"
          className="w-[334px] h-[36px] rounded-2xl border"
          placeholder="Шинэ нууц үг давтах"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="flex flex-col gap-2 ml-3">
          <h1 className={uppercaseValid ? "text-green-500" : "text-red-500"}>
            Том үсэг орсон байх
          </h1>
          <h1
            className={
              /[a-z]/.test(newPassword) ? "text-green-500" : "text-red-500"
            }
          >
            Жижиг үсэг орсон байх
          </h1>
          <h1
            className={
              /\d/.test(newPassword) ? "text-green-500" : "text-red-500"
            }
          >
            Тоо орсон байх
          </h1>
          <h1
            className={
              /[!@#$%^&*()_+{}\[\]:;"'<>,.?/\\|`~]/.test(newPassword)
                ? "text-green-500"
                : "text-red-500"
            }
          >
            Тэмдэгт орсон байх
          </h1>
        </div>
        <Link href="nevtreh">
          <button className="w-[334px] h-[36px] bg-blue-600 hover:bg-blue-800 text-white border rounded-2xl">
            Үүсгэх
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewPassword;
