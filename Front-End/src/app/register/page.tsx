"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false); // State for confirm password visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full h-[800px]  flex justify-center items-center">
      <div className="w-[400px] h-[600px] bg-white border border-gray-300 rounded-lg p-5 flex  flex-col justify-between">
        <div className="w-full flex justify-center font-bold">
          <h2 className="text-xl font-semibold mb-4">Бүртгүүлэх</h2>
        </div>

        {/* <form onSubmit={handleSubmit}> */}
        <div className="mb-4">
          <input
            placeholder="Нэр"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-[334px] h-[36px] border border-gray-300 rounded-3xl p-2"
          />
          {/* {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )} */}
        </div>

        <div className="mb-4">
          <input
            placeholder="Имэйл"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[334px] h-[36px] border border-gray-300 rounded-3xl p-2"
          />
          {/* {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )} */}
        </div>

        <div className="mb-4 relative">
          <input
            placeholder="Нууц үг"
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-[334px] h-[36px] border border-gray-300 rounded-3xl p-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {passwordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
          {/* {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )} */}
        </div>

        <div className="mb-4 relative">
          <input
            placeholder="Нууц үг давтах"
            type={confirmPasswordVisible ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-[334px] h-[36px] border border-gray-300 rounded-3xl p-2 pr-10"
          />
          <button
            type="button"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 "
          >
            {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
          </button>
          {/* {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )} */}
        </div>

        <button
          type="submit"
          className="w-[334px] h-[36px] bg-blue-500 text-white rounded-3xl hover:bg-blue-600 "
        >
          Үүсгэх
        </button>
        <button
          type="submit"
          className="w-[334px] h-[36px] bg-blue-500 text-white rounded-3xl hover:bg-blue-600 mt-3"
        >
          Нэвтрэх
        </button>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Register;
