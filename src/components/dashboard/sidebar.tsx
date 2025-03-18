"use client";

import React, { useState } from "react";
import { sidebarContents, sidebarIcons } from "@/data/dashboard";
import SidebarItem from "./sidebar-item";
import SidebarLogo from "./sidebar-logo";

/**
* @returns Sidebar with responsive behavior and animations
*/
const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const topMenuItems = sidebarContents.slice(0, sidebarContents.length - 2);
  const bottomMenuItems = sidebarContents.slice(sidebarContents.length - 2);

  return (
    <aside className="w-full sm:w-[76px] lg:w-[255px] sm:min-h-full bg-[#363740] sm:pt-[37px] transition-all duration-300">
      <SidebarLogo />

      <nav className="hidden sm:inline">
        <ul className="space-y-0 pt-[60px]">
          {topMenuItems.map((item, index) => (
            <SidebarItem
              key={item.hash}
              item={item}
              index={index}
              selectedIndex={selectedIndex}
              iconMap={sidebarIcons}
              onSelect={setSelectedIndex}
              animationDelay={0.2 + index * 0.1}
            />
          ))}
        </ul>
        <div className="w-full border-[#3e3f48] border-[1px]"></div>
        <ul>
          {bottomMenuItems.map((item, index) => (
            <SidebarItem
              key={item.hash}
              item={item}
              index={index + topMenuItems.length}
              selectedIndex={selectedIndex}
              iconMap={sidebarIcons}
              onSelect={setSelectedIndex}
              animationDelay={0.2 + (topMenuItems.length + index) * 0.1}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;