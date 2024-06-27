import { Header } from "@/components/global/Header";
import { Sidebar } from "@/components/global/Sidebar";
import { SidebarContextProvider } from "@/context/sidebarStatus";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <SidebarContextProvider>
        <Sidebar />
        <div className="flex min-h-screen w-full flex-col">
          <Header />
          <div className="flex h-full flex-col bg-zinc-100 p-8">{children}</div>
        </div>
      </SidebarContextProvider>
    </div>
  );
}
