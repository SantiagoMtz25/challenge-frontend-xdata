import Image from 'next/image'
import React from 'react'
import Chart from '../../../public/images/full graph.jpg';
import { chartData } from '@/data/dashboard';

const Graph = () => {
  return (
    <div className='w-full flex'>

      <div className='w-2/3 pr-4'>
        <div className='flex flex-col justify-between mb-4 p-[32px] gap-2'>
          <h3 className='text-lg font-bold'>Today's trends</h3>

          <div className='flex items-center justify-between'>
            <p className='text-[12px] text-[#9FA2B4] tracking-[0.1px]'>as of 25 May 2019, 09:41 PM</p>
            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <div className='w-[16px] border-[1px] border-[#3751ff]'></div>
                <span className='text-[12px] text-[#9FA2B4] font-semibold tracking-[0.1px]'>Today</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-[16px] border-[1px] border-slate-300'></div>
                <span className='text-[12px] text-[#9FA2B4] font-semibold tracking-[0.1px]'>Yesterday</span>
              </div>
            </div>
          </div>
        </div>
        <Image width={686} height={380} alt='Chart Image' src={Chart} className='w-full' />
      </div>

      <div className='w-1/3 flex flex-col'>
        {chartData.map((obj, index) => (
          <div key={index} className='p-[24px] border-b-[1px] border-[#F0F1F7] flex-1 flex flex-col justify-center items-center'>
            <p className='text-[#9FA2B4] leading-[22px] tracking-[0.3px] text-[16px] font-semibold'>{obj.title}</p>
            <p className='text-[#252733] tracking-[0.3px] text-[24px] font-bold'>{obj.value}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Graph