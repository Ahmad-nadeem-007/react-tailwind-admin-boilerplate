import { Drawer } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";

const Sidebar = ({ children }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(() => {
    const storedIsOpen = localStorage.getItem("isOpen");
    return storedIsOpen === "true";
  });
  useEffect(() => {
    localStorage.setItem("isOpen", isOpen);
  }, [isOpen]);
  const SidebarLinks = () => {
    return (
      <ul className="mt-8">
        <li className="mt-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg flex items-center gap-2 p-3 ${
                isOpen ? "justify-center" : ""
              } hover:bg-customWhite ease-in-out duration-300 hover:text-customBlue ${
                isActive
                  ? " bg-customWhite  text-customBlue"
                  : "   text-customWhite"
              }`
            }
          >
            <RiDashboardFill size={20} /> {!isOpen && "Dashboard"}
          </NavLink>
        </li>
        <li className="mt-3">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `rounded-lg flex items-center gap-2 p-3  ${
                isOpen ? "justify-center" : ""
              } hover:bg-customWhite ease-in-out duration-300 hover:text-customBlue ${
                isActive
                  ? " bg-customWhite  text-customBlue"
                  : "   text-customWhite"
              }`
            }
          >
            <FaUsers size={20} className="shrink-0" /> {!isOpen && "Users"}
          </NavLink>
        </li>
      </ul>
    );
  };
  //   === responsive drawer
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="w-full lg:flex">
      {/* =========== desktop sidebar */}
      <div
        className={`${
          isOpen ? "w-[80px]" : "w-[300px]"
        } ease-in-out duration-300  bg-customBlue  flex-col justify-between h-screen overflow-y-auto lg:flex hidden overflow-x-hidden`}
      >
        <div className="p-3">
          <div
            className={`flex justify-${
              !isOpen ? "between" : "center"
            } items-center`}
          >
            {!isOpen && (
              <h1 className="text-2xl font-bold text-white ms-3">Logo</h1>
            )}
            <IoMenu
              onClick={() => setIsOpen(!isOpen)}
              className="text-customWhite cursor-pointer"
              size={25}
            />
          </div>
          {SidebarLinks()}
        </div>
        <div className="p-3">
          <div
            className="font-medium text-customBlue inline-flex items-center p-2 rounded-lg bg-customWhite cursor-pointer"
            onClick={handleLogout}
          >
            <TbLogout2 size={20} className="me-2" /> {!isOpen && "Logout"}
          </div>
        </div>
      </div>
      {/* responsive sidebar === start  */}
      <div className="h-16">
        <div className=" justify-between items-center w-full lg:hidden  fixed z-10 top-0 left-0 flex h-16 px-3 bg-customBlue">
          <h1 className="text-2xl font-bold text-white ">Logo</h1>

          <IoMenu
            onClick={() => setDrawerOpen(true)}
            className="text-customWhite cursor-pointer"
            size={25}
          />
        </div>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <div className="bg-customBlue h-screen p-4 overflow-y-auto flex justify-between flex-col">
            <div>
              <h1 className="text-2xl font-bold text-white ">Logo</h1>

              {SidebarLinks()}
            </div>
            <div className="p-3">
              <div
                className="font-medium text-customBlue inline-flex items-center p-2 rounded-lg bg-customWhite cursor-pointer"
                onClick={handleLogout}
              >
                <TbLogout2 size={20} className="me-2" /> {!isOpen && "Logout"}
              </div>
            </div>
          </div>
        </Drawer>
      </div>
      {/* responsive sidebar == end */}

      <div className="flex-1 lg:h-screen lg:overflow-y-auto">
        <div className="p-3">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
