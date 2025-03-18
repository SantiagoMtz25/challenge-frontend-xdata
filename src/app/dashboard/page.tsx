import MainCard from "@/components/dashboard/main-card"
import DashboardTable from "@/components/dashboard/dasboard-table"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardGraph from "@/components/dashboard/dashboard-graph"
import { mainCardsData } from "@/data/dashboard"

// includes all elements to render the main dashboard page
const Dashboard = () => {
  return (
    <div className="bg-[#F7F8FC] p-0 sm:py-[15px] sm:pr-[10px] sm:pl-[30px] lg:p-[30px]">
      <DashboardHeader />
      
      <section className="w-full grid grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-[2px] sm:gap-y-[14px] sm:gap-x-[30px]
      lg:gap-[30px] sm:mt-[17px] lg:mt-[54px]">
        {mainCardsData.map((card, index) => (
          <MainCard
            key={index} 
            title={card.title}
            num={card.value}
            animationDelay={0.2 + index * 0.15}
          />
        ))}
      </section>
 
      <DashboardGraph />

      <DashboardTable />
    </div>
  )
}

export default Dashboard