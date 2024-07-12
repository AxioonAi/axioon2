import { Header } from "@/components/global/Header";
import { Sidebar } from "@/components/global/Sidebar";
import { SideBarCloser } from "@/components/global/SideBarCloser";
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
          <div className="ml-auto flex min-h-screen w-full flex-col self-end md:w-[calc(100%-16rem)]">
            <Header />
            <SideBarCloser />
            <div className="flex h-full flex-col bg-zinc-100 p-4 md:p-8">
              {children}
            </div>
          </div>
        </SidebarContextProvider>
      </OffsetContextProvider>
    </div>
  );
}
