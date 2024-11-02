import { IFruit, IVegetable } from "@/interface";
import React from "react";

interface IProps {
  onClick: (item: IFruit | IVegetable) => void;
  item: IFruit | IVegetable;
  children?: React.ReactNode;
}

const CustomButton = ({ onClick, item, children, ...rest }: IProps) => {
  return (
    <button
      onClick={() => onClick(item)}
      className="w-[220px] block m-1 ml-5 border-2 border-gray-300 p-2 rounded w-52 hover:bg-gray-200 transition-colors duration-200"
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
