import React from "react";
import { FiSearch } from "react-icons/fi";
import avtar from "../../images/avtar.png";
import { IoNotifications } from "react-icons/io5";
import { Menu, MenuItem } from "@mui/material";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex gap-3 flex-wrap justify-between items-center pb-3 border-b-[1.5px] border-dashed border-customGray mb-2">
      <div className="flex gap-2 items-center bg-customLightGray h-12 px-6 rounded-full">
        <input
          type="search"
          placeholder="Search here..."
          className="w-80 border-0 bg-customLightGray focus:outline-none"
        />
        <FiSearch />
      </div>
      <div className="flex gap-3  items-center">
        {/* <div className="p-2 border rounded-full">
          <IoNotifications size={25}/>
        </div> */}
        <div>
          <img
            onClick={handleClick}
            src={avtar}
            width={50}
            height={50}
            className="rounded-full"
            alt="w8"
          />
          <Menu
          className="mt-1"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
