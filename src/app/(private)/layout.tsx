import { Header } from "@/components/global/Header";
import { Sidebar } from "@/components/global/Sidebar";
import { SelectedPoliticianContextProvider } from "@/context/SelectedPolitician";
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
        <SelectedPoliticianContextProvider>
          <SidebarContextProvider>
            <Sidebar />
            <div className="ml-auto flex min-h-screen w-full flex-col self-end lg:w-[calc(100%-16rem)]">
              <Header />
              <div className="flex h-full flex-col bg-zinc-100 p-4 md:p-8 lg:p-4 xl:p-8">
                {children}
              </div>
            </div>
          </SidebarContextProvider>
        </SelectedPoliticianContextProvider>
      </OffsetContextProvider>
    </div>
  );
}
