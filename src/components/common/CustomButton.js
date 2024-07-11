import React from 'react';

const CustomButton = ({
    type,
    rounded,
    border,
    bg,
    textColor,
    padding,
    textTransform,
    addclass,
    handleClick,
    icon,
    btntext
}) => {
    return (
        <button
            type={type ? type : "button"}
            className={`flex items-center justify-center ${rounded ? rounded : "rounded-full"} ${border ? border : "border-0"} ${bg ? bg : "bg-customBlue"} ${textColor ? textColor : "text-white"} ${padding ? padding : "p-2.5 px-5"}  ${textTransform ? textTransform : "capitalize"} ${addclass}`}
            onClick={handleClick}
        >
            {btntext}{icon}
        </button>
    );
}

export default CustomButton;
