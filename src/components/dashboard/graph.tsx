import Image from 'next/image'
import React from 'react'
import Chart from '../../../public/images/full graph.jpg';
import { chartData } from '@/data/dashboard';

const Graph = () => {
  return (
    <div className='w-full flex h-[302px] sm:h-auto'>

      <div className='w-full sm:w-2/3 pr-4 h-full flex flex-col'>
        <div className='flex flex-col justify-between mb-4 p-[32px]'>
          <h3 className='text-[#252733] text-[19px] font-bold tracking-[0.4px] mb-2'>Today's trends</h3>

          <div className='w-full flex flex-col sm:flex-row items-center justify-between'>
            <p className='text-[12px] text-[#9FA2B4] tracking-[0.1px] self-start mb-6 sm:mb-0'>as of 25 May 2019, 09:41 PM</p>
            
            <div className='flex sm:flex items-center gap-6'>
              <div className='flex items-center gap-2'>
                <div className='w-[16px] border-[1px] rounded-full border-[#3751ff]'></div>
                <span className='text-[12px] text-[#9FA2B4] font-semibold tracking-[0.1px]'>Today</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-[16px] border-[1px] rounded-full border-slate-300'></div>
                <span className='text-[12px] text-[#9FA2B4] font-semibold tracking-[0.1px]'>Yesterday</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[198px] sm:h-[380px]">
          <Image 
            alt="Chart Image" 
            src={Chart} 
            fill={true} 
            className="object-contain"
          />
        </div>
      </div>

      <div className='w-1/3 hidden sm:flex flex-col border-l-[2px] border-[#F0F1F7] text-center'>
        {chartData.map((obj, index) => (
          <div key={index} className='p-[24px] border-b-[2px] last:border-b-0 border-[#F0F1F7] flex-1 flex flex-col justify-center items-center'>
            <p className='text-[#9FA2B4] leading-[22px] tracking-[0.3px] text-[16px] font-semibold'>{obj.title}</p>
            <p className='text-[#252733] tracking-[0.3px] text-[24px] font-bold'>{obj.value}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Graph