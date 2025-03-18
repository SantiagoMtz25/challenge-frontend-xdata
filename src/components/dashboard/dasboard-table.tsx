"use client"

import React, { useRef } from "react";
import TableBtn from "./table-btn";
import { tableData } from "@/data/table-data";
import TableComponent from "./table";
import { motion, useInView } from "@/utils/motion"

const DashboardTable = () => {
  const sectionRef = useRef<HTMLBodyElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section 
      ref={sectionRef} 
      className="w-full mt-[19px] sm:mt-5 lg:mt-[30px] border-[2px] border-[#F0F1F7] rounded-[8px] bg-white"
      initial={{ opacity: 0 }}
      animate={ isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-full shadow-[0px_4px_8px_-2px_rgba(16,24,40,0.1)]">
        <div className="flex justify-between items-center px-6 py-5">
          <h3 className="font-medium text-[18px] leading-7 text-[#101828]">File uploaded</h3>
          <div className="flex items-center gap-3">
            <TableBtn title="Download all" />
            <TableBtn title="Upload" />
          </div>
        </div>

        <div className="w-full overflow-x-auto">
          <TableComponent tableData={tableData} />
        </div>
      </div>
    </motion.section>
  );
};

export default DashboardTable;
