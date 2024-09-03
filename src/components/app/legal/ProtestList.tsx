"use client";
import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { BaseCard } from "../../global/BaseCard/BaseCard";
import { BaseCardFooter } from "../../global/BaseCard/BaseCardFooter";
import { BaseCardHeader } from "../../global/BaseCard/BaseCardHeader";
import { useLegalDataContext } from "@/context/LegalData";
import { Skeleton } from "@/components/global/Skeleton";

// interface ProtestListProps {
//   ProtestListData: {
//     title: string;
//     city: string;
//     address: string;
//     mobilePhone: string;
//     data: {
//       cpfCnpj: string;
//       date: Date;
//       protestDate: Date;
//       expiryDate: Date;
//       value: number;
//     }[];
//   }[];
// }

export function ProtestList() {
  const { isGettingData } = useLegalDataContext();
  // const [showMore, setShowMore] = useState<number | null>();
  const parent = useRef(null);

  // const reveal = (index: number) => {
  //   if (showMore === index) {
  //     setShowMore(null);
  //   } else {
  //     setShowMore(index);
  //   }
  // };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <BaseCard className="p-0">
      <BaseCardHeader title="Lista de Protestos" />
      <div className="flex h-[50vh] w-full flex-col justify-around gap-4 overflow-y-scroll p-4 pb-10 text-[10px] lg:h-full xl:text-xs 2xl:text-sm 3xl:text-base">
        {isGettingData ? (
          <Skeleton className="mx-auto mt-4 h-[21rem] w-11/12" />
        ) : (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            Não conseguimos encontrar esses dados.
          </span>
          // ProtestListData.map((item, index) => (
          //   <div
          //     ref={parent}
          //     key={index}
          //     className="flex w-[675px] gap-2 rounded-md bg-zinc-50 p-2 shadow-md md:w-full lg:p-12"
          //   >
          //     <Image
          //       src="/Icons/briefcase.svg"
          //       width={100}
          //       height={100}
          //       alt=""
          //       className="w-10 self-start"
          //     />
          //     <div className="flex w-full flex-col">
          //       <div className="flex w-full items-center justify-between">
          //         <span className="font-semibold">{item.title}</span>
          //       </div>
          //       <span>{item.city}</span>
          //       <div className="flex w-full items-center justify-between border-b border-b-zinc-200 pb-4 italic text-zinc-500">
          //         <div className="flex items-center gap-10">
          //           <span>{item.address}</span>
          //           <span>{item.mobilePhone}</span>
          //         </div>
          //         <button
          //           onClick={() => reveal(index)}
          //           className="flex w-max items-center gap-2 rounded-md bg-sky-500 px-2 py-1 text-white"
          //         >
          //           <Image
          //             src="/Icons/details.svg"
          //             alt=""
          //             width={100}
          //             height={100}
          //             className="w-6"
          //           />
          //           <span>Ver Detalhes</span>
          //         </button>
          //       </div>
          //       {showMore === index &&
          //         item.data.map((data, index) => (
          //           <div
          //             className="grid w-full grid-cols-10 gap-4 border-b border-b-zinc-200 p-2"
          //             key={index}
          //           >
          //             <div className="col-span-2 flex flex-col">
          //               <span className="text-zinc-500">CPF ou CNPJ</span>
          //               <span className="font-semibold">{data.cpfCnpj}</span>
          //             </div>
          //             <div className="col-span-2 flex flex-col">
          //               <span className="text-zinc-500">Data</span>
          //               <span className="font-semibold">
          //                 {new Date(data.date).toLocaleDateString("pt-BR")}
          //               </span>
          //             </div>
          //             <div className="col-span-2 flex flex-col">
          //               <span className="text-zinc-500">Data do Protesto</span>
          //               <span className="font-semibold">
          //                 {new Date(data.protestDate).toLocaleDateString(
          //                   "pt-BR",
          //                 )}
          //               </span>
          //             </div>
          //             <div className="col-span-2 flex flex-col">
          //               <span className="text-zinc-500">
          //                 Data de Vencimento
          //               </span>
          //               <span className="font-semibold">
          //                 {new Date(data.expiryDate).toLocaleDateString(
          //                   "pt-BR",
          //                 )}
          //               </span>
          //             </div>
          //             <div className="col-span-2 flex flex-col">
          //               <span className="text-zinc-500">Valor</span>
          //               <span className="font-semibold">
          //                 {data.value.toLocaleString("pt-BR", {
          //                   style: "currency",
          //                   currency: "BRL",
          //                 })}
          //               </span>
          //             </div>
          //           </div>
          //         ))}
          //     </div>
          //   </div>
          // ))
        )}
      </div>
      <BaseCardFooter text="Lista dos protestos vinculados ao perfil." />
    </BaseCard>
  );
}
