"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getItemClassName, getIconClassName } from "@/utils/sidebar-styles";
import { motion } from "@/utils/motion"

interface SidebarItemProps {
  item: { hash: string; name: string };
  index: number;
  selectedIndex: number;
  iconMap: any;
  onSelect: (index: number) => void;
  animationDelay: number;
};

// sidebar item with responsiveness, gets styles from sidebar-styles functions
const SidebarItem: React.FC<SidebarItemProps> = ({ item, index, selectedIndex, iconMap, onSelect, animationDelay }) => (
  <motion.li  
    className={`${getItemClassName(index, selectedIndex)} sm:justify-center lg:justify-start`}
    onClick={() => onSelect(index)}
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: animationDelay }}
  >
    <FontAwesomeIcon
      icon={iconMap[item.hash]}
      className={getIconClassName(index, selectedIndex)}
    />
    <span className="sm:hidden lg:inline">{item.name}</span>
  </motion.li>
);

export default SidebarItem;