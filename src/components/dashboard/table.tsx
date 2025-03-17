import React from "react";
import Image from "next/image";
import { TableProps } from "@/data/table-data";

const TableComponent: React.FC<TableProps> = ({ tableData }) => {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[1px] border-[#EAECF0]">
          <th className="py-[12px] px-[24px] text-left">
            <input type="checkbox" className="rounded-[6px] w-[20px] h-[20px] border-[1px] border-[#D0D5DD]" />
          </th>
          {tableData.headers.map((val, i) => (
            <th key={i} className="text-left text-[12px] leading-[18px] font-medium text-[#667085]">
              {val}
            </th>
          ))}
          <th className="py-4"></th>
        </tr>
      </thead>
      <tbody>
        {tableData.data.map((val, i) => (
          <tr key={i} className="border-b border-[1px] border-[#EAECF0]">
            <td className="pl-6 py-4">
              <input type="checkbox" className="rounded-[6px] w-[20px] h-[20px] border-[1px] border-[#D0D5DD]" />
            </td>
            <td className="py-4 w-[348px]">
              <div className="flex items-center gap-3">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F4EBFF] text-purple-600">
                  <Image src={val.iconPath} alt="Row Icon" width={20} height={20} />
                </div>
                <div>
                  <p className="text-[#101828] leading-[20px] text-[14px]">{val["File name"]}</p>
                  <p className="text-[#667085] leading-[20px] text-[14px]">{val["File size"]}</p>
                </div>
              </div>
            </td>
            <td className="w-[176px] text-[#667085] leading-[20px] text-[14px]">{val["File size"]}</td>
            <td className="w-[176px] text-[#667085] leading-[20px] text-[14px]">{val["Date uploaded"]}</td>
            <td className="w-[176px] text-[#667085] leading-[20px] text-[14px]">{val["Last updated"]}</td>
            <td className="w-[176px] text-[#667085] leading-[20px] text-[14px]">{val["Uploaded by"]}</td>
            <td className="w-[68px] pr-6 text-right">
              <button className="text-gray-400 hover:text-gray-600">
                <Image src="./dropdown.svg" alt="Three dots" height={20} width={20} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;