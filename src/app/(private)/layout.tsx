import { Header } from "@/components/global/Header";
import { Sidebar } from "@/components/global/Sidebar";
import { SidebarContextProvider } from "@/context/sidebarStatus";
import { OffsetContextProvider } from "@/context/test";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <OffsetContextProvider>
        <SidebarContextProvider>
          <Sidebar />
          <div className="ml-[16rem] flex min-h-screen w-full flex-col self-end lg:w-[calc(100%-16rem)]">
            <Header />
            <div className="flex h-full flex-col bg-zinc-100 p-8">
              {children}
            </div>
          </div>
        </SidebarContextProvider>
      </OffsetContextProvider>
    </div>
  );
}
