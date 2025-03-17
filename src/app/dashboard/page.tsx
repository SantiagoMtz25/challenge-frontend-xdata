import Graph from "@/components/dashboard/graph"
import Header from "@/components/dashboard/header"
import MainCard from "@/components/dashboard/main-card"
import DashboardTable from "@/components/dashboard/dasboard-table"

const Dashboard = () => {
  return (
    <div className="bg-[#F7F8FC] p-0 sm:py-[15px] sm:pr-[10px] sm:pl-[30px] lg:p-[30px]">
      <section className="hidden sm:inline">
        <Header />
      </section>
      
      <section className="w-full grid grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-[2px] sm:gap-y-[14px] sm:gap-x-[30px]
      lg:gap-[30px] sm:mt-[17px] lg:mt-[54px]">
        <MainCard title="Unresolved" num={60} />
        <MainCard title="Overdue" num={16} />
        <MainCard title="Open" num={43} />
        <MainCard title="On hold" num={64} />
      </section>

      <section className="w-full mt-[10px] sm:mt-[14px] lg:mt-[30px] border-[2px] border-[#F0F1F7] rounded-[8px] bg-white">
        <Graph />
      </section>

      <section className="w-full mt-[19px] sm:mt-[20px] lg:mt-[30px] border-[2px] border-[#F0F1F7] rounded-[8px] bg-white">
        <DashboardTable />
      </section>
    </div>
  )
}

export default Dashboard