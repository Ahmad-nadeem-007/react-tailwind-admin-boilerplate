import React, { useState } from "react";
import { FaEnvelope, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/common/CustomButton";
import bg from "../images/login-bg.jpg";
const Login = () => {
  const navigate = useNavigate();

  const [isPassword, setIsPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    localStorage.setItem("access-token", "54%jkd90$jfhjkd");
  };

  return (
    <div
      className="bg-cover	bg-center	bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="lg:w-1/2 md:w-1/2 sm:w-1/2 w-11/12 mx-auto h-screen flex justify-center items-center 	">
        <form
          className=" p-4 shadow border w-full rounded-xl bg-white"
          onSubmit={handleSubmit}
        >
          <div>
            <h4 className="text-2xl font-bold  text-customBlue">Log In</h4>
          </div>
          <div className="flex gap-2 items-center border px-2 my-3 rounded-lg ">
            <span className="input-group-text border-0 ">
              <FaEnvelope size={20} className="text-customBlue" />
            </span>
            <input
              type="email"
              required
              className="focus:outline-none border-0 p-3  ps-0 rounded-lg w-full "
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex gap-2 items-center border px-2 my-3 rounded-lg ">
            <span className="input-group-text border-0 ">
              <MdLock size={20} className="text-customBlue" />
            </span>
            <input
              type={isPassword ? "text" : "password"}
              required
              className="focus:outline-none border-0 p-3  ps-0 rounded-lg w-full "
              placeholder="Password"
            />
            <span
              className="input-group-text border-0 ps-3"
              onClick={() => setIsPassword(!isPassword)}
            >
              {isPassword ? (
                <FaRegEye size={20} className="text-customBlue" />
              ) : (
                <FaRegEyeSlash size={20} className="text-customBlue" />
              )}
            </span>
          </div>
          <CustomButton
            btntext="Continue"
            bg="bg-customBlue"
            rounded="rounded-lg"
            addclass="w-full" type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
