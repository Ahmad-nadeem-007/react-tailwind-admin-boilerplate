import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/common/CustomButton";

const AddUser = () => {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <div
        className="w-8 h-8 bg-customBlue rounded-full text-customWhite flex justify-center items-center cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <FaAngleLeft />
      </div>
      <div className="w-3/4 mx-auto bg-customLightGray p-6 rounded-lg">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label  className="font-medium text-sm">
              Name
            </label>
            <input
              type="text"
              className="bg-customWhite text-sm p-2.5 rounded-full border-0 focus:outline-none w-full"
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <label  className="font-medium text-sm">
              Email
            </label>
            <input
              type="email"
              className="bg-customWhite text-sm p-2.5 rounded-full border-0 focus:outline-none w-full"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <label  className="font-medium text-sm">
              Address
            </label>
            <input
              type="text"
              className="bg-customWhite text-sm p-2.5 rounded-full border-0 focus:outline-none w-full"
              placeholder="Enter your Address"
            />
          </div>
          <div>
            <label  className="font-medium text-sm">
              Phone Number
            </label>
            <input
              type="text"
              className="bg-customWhite text-sm p-2.5 rounded-full border-0 focus:outline-none w-full"
              placeholder="Enter your Phone Number"
            />
          </div>
        </div>
        <div>
        <CustomButton btntext="Save"  addclass="mt-3"/>

        </div>
      </div>
    </Sidebar>
  );
};

export default AddUser;
