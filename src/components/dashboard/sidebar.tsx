"use client";

import Image from "next/image";
import React, { useState } from "react";
import { sidebarContents, sidebarIcons } from "@/data/dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getItemClassName, getIconClassName } from "@/utils/sidebar-styles";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const topMenuItems = sidebarContents.slice(0, sidebarContents.length - 2);
  const bottomMenuItems = sidebarContents.slice(sidebarContents.length - 2);

  return (
    <aside className="w-full sm:w-[76px] lg:w-[255px] sm:min-h-full bg-[#363740] sm:pt-[37px] transition-all duration-300">
      <div className="flex justify-between sm:justify-center items-center gap-[12px] px-[9px] py-[13px] sm:px-0 sm:py-0">
        <Image width={32} height={32} alt="Logo Image" src={`/logologo.svg`} />
        <span className="text-center text-[#A4A6B3] tracking-[0.4px] font-bold hidden lg:inline">
          Dashboard Kit
        </span>
        <Image width={20} height={20} alt="Notification Icon" src={"/new.svg"} className="sm:hidden" />
      </div>

      <nav className="hidden sm:inline">
        <ul className="space-y-0 pt-[60px]">
          {topMenuItems.map((val, index) => (
            <li
              key={val.hash}
              className={`${getItemClassName(index, selectedIndex)} sm:justify-center lg:justify-start`}
              onClick={() => setSelectedIndex(index)}
            >
              <FontAwesomeIcon
                icon={sidebarIcons[val.hash]}
                className={getIconClassName(index, selectedIndex)}
              />
              <span className="sm:hidden lg:inline">{val.name}</span>
            </li>
          ))}
        </ul>
        <div className="w-full border-[#3e3f48] border-[1px]"></div>
        <ul>
          {bottomMenuItems.map((val, index) => (
            <li
              key={val.hash}
              className={`${getItemClassName(index + topMenuItems.length, selectedIndex)} sm:justify-center lg:justify-start`}
              onClick={() => setSelectedIndex(index + topMenuItems.length)}
            >
              <FontAwesomeIcon
                icon={sidebarIcons[val.hash]}
                className={getIconClassName(index + topMenuItems.length, selectedIndex)}
              />
              <span className="sm:hidden lg:inline">{val.name}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;