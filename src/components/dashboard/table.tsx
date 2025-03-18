"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { TableProps } from "@/types/table-data-type";
import { motion, useInView } from "@/utils/motion"

/**
 * @param tableData - data to render
 * @returns Responsive table with animation effects
 */
const TableComponent: React.FC<TableProps> = ({ tableData }) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const isInView = useInView(tableRef, { once: true });
  
  return (
    <div className="w-full overflow-x-auto">
      <table ref={tableRef} className="min-w-[1120px] lg:w-full">
        <motion.thead
          initial={{ opacity: 0 }}
          animate={ isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <tr className="border-b border-[1px] border-[#EAECF0]">
            <th className="py-3 px-6 text-left">
              <input type="checkbox" className="rounded-[6px] w-5 h-5 border-[1px] border-[#D0D5DD] cursor-pointer" />
            </th>
            {tableData.headers.map((val, i) => (
              <th key={i} className="text-left text-[12px] leading-[18px] font-medium text-[#667085]">
                {val}
              </th>
            ))}
            <th className="py-4"></th>
          </tr>
        </motion.thead>
        <tbody>
          {tableData.data.map((val, i) => (
            /* staggered animation */
            <motion.tr 
              key={i} 
              className="border-b border-[1px] border-[#EAECF0]"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
            >
              <td className="pl-6 py-4">
                <input type="checkbox" className="rounded-[6px] w-5 h-5 border-[1px] border-[#D0D5DD] cursor-pointer" />
              </td>
              <td className="py-4 w-[348px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F4EBFF] text-[#7f56d9]">
                    <Image src={val.iconPath} alt="Row Icon" width={20} height={20} />
                  </div>
                  <div>
                    <p className="text-[#101828] leading-5 text-[14px] cursor-pointer">{val["File name"]}</p>
                    <p className="text-[#667085] leading-5 text-[14px]">{val["File size"]}</p>
                  </div>
                </div>
              </td>
              <td className="w-[176px] text-[#667085] leading-5 text-[14px]">{val["File size"]}</td>
              <td className="w-[176px] text-[#667085] leading-5 text-[14px]">{val["Date uploaded"]}</td>
              <td className="w-[176px] text-[#667085] leading-5 text-[14px]">{val["Last updated"]}</td>
              <td className="w-[176px] text-[#667085] leading-5 text-[14px]">{val["Uploaded by"]}</td>
              <td className="w-[68px] pr-6 text-right">
                <button className="text-gray-400 hover:text-gray-600">
                  <Image src="./dropdown.svg" alt="Three dots" height={20} width={20} className="cursor-pointer" />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;