"use client";
import { EType, IFruit, IVegetable } from "@/interface";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomHeader from "./CustomHeader";
import CustomBox from "./CustomBox";

interface IProps {
  initialList: IFruit[] | IVegetable[];
}

const TodoList = ({ initialList }: IProps) => {
  const [mainList, setMainList] = useState(initialList);
  const [fruits, setFruits] = useState<IFruit[]>([]);
  const [vegetables, setVegetables] = useState<IVegetable[]>([]);

  const moveItem = (item: IFruit | IVegetable) => {
    if (item.type === EType.FRUIT) {
      setFruits((prev) => [...prev, item]);
    } else {
      setVegetables((prev) => [...prev, item]);
    }
    setMainList((prev) => prev.filter((i) => i.name !== item.name));

    setTimeout(() => {
      // Check if item already exists before adding it back
      setMainList((prev) => {
        if (!prev.some((i) => i.name === item.name)) {
          return [...prev, item];
        }
        return prev;
      });

      if (item.type === EType.FRUIT) {
        setFruits((prev) => prev.filter((i) => i.name !== item.name));
      } else {
        setVegetables((prev) => prev.filter((i) => i.name !== item.name));
      }
    }, 5000);
  };

  const moveBackToMainList = (item: IFruit | IVegetable) => {
    // Check if item already exists in mainList before adding it
    setMainList((prev) => {
      if (!prev.some((i) => i.name === item.name)) {
        return [...prev, item];
      }
      return prev;
    });

    if (item.type === EType.FRUIT) {
      setFruits((prev) => prev.filter((i) => i.name !== item.name));
    } else {
      setVegetables((prev) => prev.filter((i) => i.name !== item.name));
    }
  };

  return (
    <div className="grid grid-cols-3 gap-12">
      {/* Main List */}
      <div>
        {mainList.map((item) => (
          <CustomButton
            key={item.name}
            onClick={() => moveItem(item)} // Fixed the onClick handler
            item={item}
          >
            {item.name}
          </CustomButton>
        ))}
      </div>

      {/* Fruit Column */}
      <CustomBox>
        <CustomHeader>{EType.FRUIT}</CustomHeader>
        <>
          {fruits.map((item) => (
            <CustomButton
              key={item.name}
              onClick={() => moveBackToMainList(item)} // Fixed the onClick handler
              item={item}
            >
              {item.name}
            </CustomButton>
          ))}
        </>
      </CustomBox>

      {/* Vegetable Column */}
      <CustomBox>
        <CustomHeader>{EType.VEGETABLE}</CustomHeader>
        <>
          {vegetables.map((item) => (
            <CustomButton
              key={item.name}
              onClick={() => moveBackToMainList(item)} // Fixed the onClick handler
              item={item}
            >
              {item.name}
            </CustomButton>
          ))}
        </>
      </CustomBox>
    </div>
  );
};

export default TodoList;
