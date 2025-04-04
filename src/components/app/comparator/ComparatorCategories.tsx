"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/global/tabs";
import { cn } from "@/utils/utils";

interface ComparatorCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export function ComparatorCategories({
  selectedCategory,
  setSelectedCategory,
}: ComparatorCategoriesProps) {
  return (
    <div className="bg-darkBlueAxion mx-auto w-full overflow-x-scroll p-2 text-white lg:col-span-12 xl:w-11/12 xl:overflow-x-auto">
      <Tabs defaultValue="followers">
        <TabsList className="flex w-full items-center justify-between">
          <TabsTrigger
            value="followers"
            onClick={() => setSelectedCategory("followers")}
            className={cn(
              "cursor-pointer rounded-none border-b border-b-transparent hover:border-b-white",
              selectedCategory === "followers" &&
                "border-b border-b-white font-bold",
            )}
          >
            SEGUIDORES
          </TabsTrigger>
          <TabsTrigger
            value="posts"
            onClick={() => setSelectedCategory("posts")}
            className={cn(
              "cursor-pointer rounded-none border-b border-b-transparent hover:border-b-white",
              selectedCategory === "posts" &&
                "border-b border-b-white font-bold",
            )}
          >
            POSTAGENS
          </TabsTrigger>
          <TabsTrigger
            value="comments"
            onClick={() => setSelectedCategory("comments")}
            className={cn(
              "cursor-pointer rounded-none border-b border-b-transparent hover:border-b-white",
              selectedCategory === "comments" &&
                "border-b border-b-white font-bold",
            )}
          >
            COMENTÁRIOS
          </TabsTrigger>
          <TabsTrigger
            value="mentions"
            onClick={() => setSelectedCategory("mentions")}
            className={cn(
              "cursor-pointer rounded-none border-b border-b-transparent hover:border-b-white",
              selectedCategory === "mentions" &&
                "border-b border-b-white font-bold",
            )}
          >
            PÚBLICO & MENÇÕES
          </TabsTrigger>
          <TabsTrigger
            value="score"
            onClick={() => setSelectedCategory("score")}
            className={cn(
              "cursor-pointer rounded-none border-b border-b-transparent hover:border-b-white",
              selectedCategory === "score" &&
                "border-b border-b-white font-bold",
            )}
          >
            SCORE
          </TabsTrigger>
          <TabsTrigger
            value="social"
            onClick={() => setSelectedCategory("social")}
            className={cn(
              "cursor-pointer rounded-none border-b border-b-transparent hover:border-b-white",
              selectedCategory === "social" &&
                "border-b border-b-white font-bold",
            )}
          >
            REDES SOCIAIS
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
