"use client";
import { SendHorizonal, Sun, TriangleAlert, Zap } from "lucide-react";
import { useState } from "react";
import { CardWithTitleAndButton } from "@/components/app/parameters/CardWithTitleAndButton";

export default function AxioonAi() {
  const [hasMessages, setHasMessages] = useState(false);
  const [userMessages, setUserMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const itemsToShow = [
    { id: 1, prompt: "Explain quantum computing in simple terms" },
    { id: 2, prompt: "Remembers what user said earlier in the conversation" },
    { id: 3, prompt: "May occasionally generate incorrect information" },
    {
      id: 4,
      prompt: "“Got any creative ideas for a 10 year old’s birthday?” →",
    },
    { id: 5, prompt: "Allows user to provide follow-up corrections" },
    {
      id: 6,
      prompt: "May occasionally produce harmful instructions or biased content",
    },
    { id: 7, prompt: "“How do I make an HTTP request in Javascript?” →" },
    { id: 8, prompt: "Trained to decline inappropriate requests" },
    { id: 9, prompt: "Limited knowledge of world and events after 2021" },
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setUserMessages([...userMessages, inputMessage]);
      setHasMessages(true);
      setInputMessage("");
    }
  };

  const handleButtonClick = (message: string) => {
    setUserMessages([...userMessages, message]);
    setHasMessages(true);
  };

  return (
    <div className="flex h-full flex-col">
      <CardWithTitleAndButton
        title="Axioon AI"
        buttonText="Histórico de Chats"
      />
      <div className="flex h-screen flex-1 flex-col items-center justify-center">
        <h1 className="mt-20 text-4xl font-bold text-zinc-900">Axioon AI</h1>
        {!hasMessages ? (
          <div className="mb-10 mt-10 grid w-[80%] grid-cols-12 flex-col items-center justify-center gap-x-6 gap-y-2">
            <div className="col-span-4 row-span-2 hidden flex-col items-center justify-center gap-4 md:flex">
              <Sun size={32} className="text-zinc-900" />
              <h2 className="text-2xl text-zinc-900">Examples</h2>
            </div>
            <div className="col-span-4 row-span-2 hidden flex-col items-center justify-center gap-4 md:flex">
              <Zap size={32} className="text-zinc-900" />
              <h2 className="text-2xl text-zinc-900">Capabilities</h2>
            </div>
            <div className="col-span-4 row-span-2 hidden flex-col items-center justify-center gap-4 md:flex">
              <TriangleAlert size={32} className="text-zinc-900" />
              <h2 className="text-2xl text-zinc-900">Limitations</h2>
            </div>
            <div className="col-span-12 grid grid-cols-12 flex-col items-center justify-center gap-x-6 gap-y-2">
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[0].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[0].prompt}
                </h3>
              </button>
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[1].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[1].prompt}
                </h3>
              </button>
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[2].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[2].prompt}
                </h3>
              </button>
            </div>
            <div className="col-span-12 hidden grid-cols-12 flex-col items-center justify-center gap-x-6 gap-y-2 md:grid">
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[3].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[3].prompt}
                </h3>
              </button>
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[4].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[4].prompt}
                </h3>
              </button>
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[5].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[5].prompt}
                </h3>
              </button>
            </div>
            <div className="col-span-12 hidden grid-cols-12 flex-col items-center justify-center gap-x-6 gap-y-2 xl:grid">
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[6].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[6].prompt}
                </h3>
              </button>
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[7].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[7].prompt}
                </h3>
              </button>
              <button
                className="col-span-12 row-span-2 flex flex-col items-center justify-center gap-4 rounded-md bg-white shadow-md md:col-span-4"
                onClick={() => handleButtonClick(itemsToShow[8].prompt)}
              >
                <h3 className="p-5 text-sm font-medium text-zinc-900 xl:text-lg">
                  {itemsToShow[8].prompt}
                </h3>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-[400px] w-full flex-col items-end justify-end gap-4 overflow-y-scroll py-4">
            {userMessages.map((message, index) => (
              <div
                key={index}
                className="ml-auto flex flex-col items-start justify-center rounded-lg rounded-tr-sm bg-white px-8 py-2"
              >
                <h3 className="text-sm font-medium text-zinc-900 xl:text-lg">
                  {message}
                </h3>
              </div>
            ))}
          </div>
        )}
        <div className="flex h-10 w-[90%] flex-row rounded-sm border border-zinc-300 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="h-full w-[95%] p-2 text-zinc-900 focus:outline-none"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            className="flex h-full w-[5%] items-center justify-center"
            onClick={handleSendMessage}
          >
            <SendHorizonal size={20} className="text-[#8E8E9E]" />
          </button>
        </div>
      </div>
    </div>
  );
}
