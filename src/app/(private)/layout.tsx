import { Header } from "@/components/global/Header";
import { Sidebar } from "@/components/global/Sidebar";
import { AdsDataContextProvider } from "@/context/AdsData";
import { ComparatorDataContextProvider } from "@/context/ComparatorData";
import { LegalDataContextProvider } from "@/context/LegalData";
import { MentionsDataContextProvider } from "@/context/MentionsData";
import { SelectedDateContextProvider } from "@/context/SelectedDate";
import { SelectedPoliticianContextProvider } from "@/context/SelectedPolitician";
import { SidebarContextProvider } from "@/context/sidebarStatus";
import { SocialMediaDataContextProvider } from "@/context/SocialMediaData";
import { OffsetContextProvider } from "@/context/test";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <SelectedDateContextProvider>
        <OffsetContextProvider>
          <SelectedPoliticianContextProvider>
            <SidebarContextProvider>
              <SocialMediaDataContextProvider>
                <MentionsDataContextProvider>
                  <LegalDataContextProvider>
                    <ComparatorDataContextProvider>
                      <AdsDataContextProvider>
                        <Sidebar />
                        <div className="ml-auto flex min-h-screen w-full flex-col self-end bg-zinc-100">
                          <Header />
                          <div className="flex h-full flex-col p-4 md:p-8 lg:p-4 xl:p-8">
                            {children}
                          </div>
                        </div>
                      </AdsDataContextProvider>
                    </ComparatorDataContextProvider>
                  </LegalDataContextProvider>
                </MentionsDataContextProvider>
              </SocialMediaDataContextProvider>
            </SidebarContextProvider>
          </SelectedPoliticianContextProvider>
        </OffsetContextProvider>
      </SelectedDateContextProvider>
    </div>
  );
}
