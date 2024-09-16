import { CandidateBaseDataCard } from "@/components/app/previous-elections/CandidateBaseDataCard";
import { ExpensesDonutChart } from "@/components/app/previous-elections/ExpensesDonutChart";
import { ExpensesTable } from "@/components/app/previous-elections/ExpensesTable";
import { IncomeDonutChart } from "@/components/app/previous-elections/IncomeDonutChart";
import { IncomeTable } from "@/components/app/previous-elections/IncomeTable";
import { PreviousElectionsHeaderCard } from "@/components/app/previous-elections/PreviousElectionsHeaderCard";
import { PreviousElectionsLists } from "@/components/app/previous-elections/PreviousElectionsLists";
import { PreviousElectionsTypeList } from "@/components/app/previous-elections/PreviousElectionsTypeList";
import { RepresentativesTable } from "@/components/app/previous-elections/RepresentativesTable";
import {
  CandidateBaseDataCardData,
  ExpensesDonutChartData,
  ExpensesTableData,
  IncomeDonutChartData,
  IncomeTableData,
  PreviousElectionsListsData,
  PreviousElectionsTypeListsData,
  RepresentativesTableData,
} from "@/components/data/PreviousElectionData";

export default function PreviousElections() {
  return (
    <div className="flex flex-col gap-4 pb-20 lg:grid lg:grid-cols-12">
      <div className="lg:col-span-12">
        <PreviousElectionsHeaderCard title="Eleições Anteriores" />
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-12 lg:row-span-4">
          <CandidateBaseDataCard
            CandidateBaseDataCardData={CandidateBaseDataCardData}
          />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <IncomeDonutChart IncomeDonutChartData={IncomeDonutChartData} />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <ExpensesDonutChart ExpensesDonutChartData={ExpensesDonutChartData} />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <PreviousElectionsLists
            PreviousElectionListsData={PreviousElectionsListsData}
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <PreviousElectionsLists
            PreviousElectionListsData={PreviousElectionsListsData}
          />
        </div>
        <div className="lg:col-span-4 lg:row-span-4">
          <PreviousElectionsLists
            PreviousElectionListsData={PreviousElectionsListsData}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-12 lg:grid lg:h-[120vh] lg:grid-cols-12 lg:grid-rows-12">
        <div className="lg:col-span-6 lg:row-span-4">
          <RepresentativesTable
            RepresentativesTableData={RepresentativesTableData}
          />
        </div>
        <div className="lg:col-span-6 lg:row-span-4">
          <PreviousElectionsTypeList
            PreviousElectionTypeListsData={PreviousElectionsTypeListsData}
          />
        </div>
        <div className="lg:col-span-12 lg:row-span-4">
          <IncomeTable IncomeTableData={IncomeTableData} />
        </div>
        <div className="lg:col-span-12 lg:row-span-4">
          <ExpensesTable ExpensesTableData={ExpensesTableData} />
        </div>
      </div>
    </div>
  );
}
