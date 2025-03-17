"use client"

import Image from "next/image";
import React, { useState } from "react";
import { sidebarContents, sidebarIcons } from "@/data/dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getItemClassName, getIconClassName } from "@/utils/sidebar-styles";

const Sidebar = () => {
  const [ selectedIndex, setSelectedIndex ] = useState<number>(0);

  const topMenuItems = sidebarContents.slice(0, sidebarContents.length - 2);
  const bottomMenuItems = sidebarContents.slice(sidebarContents.length - 2);

  return (
    <aside className="w-[255px] min-h-full bg-[#363740] pt-[37px]">
      <div className="flex justify-center items-center gap-[12px]">
        <Image width={32} height={32} alt="Logo Image" src={"/logologo.svg"} />
        <span className="text-center text-[#A4A6B3] tracking-[0.4px] font-bold">
          Dashboard Kit
        </span>
      </div>

      <nav>
        <ul className="space-y-0 pt-[60px]">
          {topMenuItems.map((val, index) => (
            <li
              key={val.hash}
              className={getItemClassName(index, selectedIndex)}
              onClick={() => setSelectedIndex(index)}
            >
              <FontAwesomeIcon
                icon={sidebarIcons[val.hash]}
                className={getIconClassName(index, selectedIndex)}
              />
              {val.name}
            </li>
          ))}
        </ul>
        <div className="w-full border-[#3e3f48] border-[1px]"></div>
        <ul>
          {bottomMenuItems.map((val, index) => (
            <li
              key={val.hash}
              className={getItemClassName(index + topMenuItems.length, selectedIndex)}
              onClick={() => setSelectedIndex(index + topMenuItems.length)}
            >
              <FontAwesomeIcon
                icon={sidebarIcons[val.hash]}
                className={getIconClassName(index + topMenuItems.length, selectedIndex)}
              />
              {val.name}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;