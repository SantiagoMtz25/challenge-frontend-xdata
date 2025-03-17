import React from "react";
import TableBtn from "./table-btn";
import { tableData } from "@/data/table-data";
import TableComponent from "./table";

const DashboardTable = () => {
  return (
    <div className="w-full shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1)]">
      <div className="flex justify-between items-center px-[24px] py-[20px]">
        <h3 className="font-medium text-[18px] leading-[28px] text-[#101828]">File uploaded</h3>
        <div className="flex items-center gap-[12px]">
          <TableBtn title="Download all" />
          <TableBtn title="Upload" />
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <TableComponent tableData={tableData} />
      </div>
    </div>
  );
};

export default DashboardTable;
