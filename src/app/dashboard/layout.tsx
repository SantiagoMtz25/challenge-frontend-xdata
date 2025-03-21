import Sidebar from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col sm:flex-row w-full h-screen">
      <Sidebar />
      <main className="flex-1 h-full overflow-auto">{children}</main>
    </div>
  );
}
