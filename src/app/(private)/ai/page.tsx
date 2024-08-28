"use client";
import { SendHorizonal, Sun, TriangleAlert, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import OpenAI from "openai";
import Image from "next/image";
import { CardWithTitleAndButton } from "@/components/app/parameters/CardWithTitleAndButton";
import { authGetAPI, AuthPostAPI, token as Token } from "@/lib/axios";
import { Spinner } from "@/components/global/Spinner";
import { Modal } from "@/components/global/Modal";

interface Message {
  content: string;
  role: "user" | "assistant";
}

interface UserChatsProps {
  createdAt: string;
  id: string;
  name: string;
  messages: {
    content: string;
    role: "user" | "assistant";
  }[];
}

export default function AxioonAi() {
  const cookies = useCookies();
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  const [hasMessages, setHasMessages] = useState(false);
  const [userMessages, setUserMessages] = useState<Message[]>([]);
  const [userChats, setUserChats] = useState<UserChatsProps[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatId, setChatId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

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

  async function handleSendGptMessage(messageContent: string) {
    const client = new OpenAI({
      dangerouslyAllowBrowser: true,
      apiKey: "",
    });
    const message = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [...userMessages, { role: "user", content: messageContent }],
    });

    return message.choices[0].message.content;
  }

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== "") {
      setIsMessageLoading(true);
      const token = cookies.get(Token);
      let newChatId: string = "";
      if (!chatId) {
        const createChat = await AuthPostAPI(
          "/user/chat",
          {
            message: inputMessage,
            name: inputMessage,
          },
          token,
        );

        if (createChat.status === 200) {
          setChatId(createChat.body.chat.id);
          newChatId = createChat.body.chat.id;
        }
      } else {
        const sendMessage = await AuthPostAPI(
          `/user/chat/message`,
          {
            message: inputMessage,
            type: "USER",
            chatId,
          },
          token,
        );
        console.log("sendMessage", sendMessage);
      }
      const aiMessage = await handleSendGptMessage(inputMessage);
      setUserMessages((prev) => [
        ...prev,
        { content: inputMessage, role: "user" },
        { content: aiMessage || "Error", role: "assistant" },
      ]);

      await AuthPostAPI(
        `/user/chat/message`,
        {
          message: aiMessage || "Error",
          type: "AI",
          chatId: chatId || newChatId,
        },
        token,
      );

      setHasMessages(true);
      setIsMessageLoading(false);
      setInputMessage("");
    }
  };

  const handleButtonClick = (message: string) => {
    setUserMessages([...userMessages, { content: message, role: "user" }]);
    setHasMessages(true);
  };

  useEffect(() => {
    async function handleGetChats() {
      const token = cookies.get(Token);

      const connect = await authGetAPI(`/user/chat`, token);
      if (connect.status === 200) {
        setUserChats(
          connect.body.chatList.map(
            (item: {
              id: string;
              name: string;
              createdAt: Date;
              messages: { message: string; type: "USER" | "AI" }[];
            }) => {
              return {
                id: item.id,
                name: item.name,
                createdAt: item.createdAt,
                messages: item.messages.map((item) => {
                  return {
                    content: item.message,
                    role: item.type === "USER" ? "user" : "assistant",
                  };
                }),
              };
            },
          ),
        );
      }
    }

    handleGetChats();
  }, [chatId]);

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col">
      <CardWithTitleAndButton
        title="Axioon AI"
        buttonText="Histórico de Chats"
        firstButtonOnClick={() => setShowModal(true)}
      />
      <div className="flex h-full flex-1 flex-col">
        <h1 className="mt-20 text-4xl font-bold text-zinc-900">Axioon AI</h1>
        {!hasMessages ? (
          <div className="mx-auto mb-10 mt-10 grid w-[80%] grid-cols-12 flex-col items-center justify-center gap-x-6 gap-y-2">
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
          <div className="flex min-h-[calc(100vh-24rem)] w-full flex-col gap-4 overflow-y-scroll px-2 py-4">
            {userMessages.map((message, index) =>
              message.role === "user" ? (
                <div
                  key={index}
                  className="ml-auto flex w-max max-w-[calc(100%-50px)] flex-col items-start justify-center rounded-lg rounded-tr-sm bg-white px-8 py-2"
                >
                  <h3 className="text-sm font-medium text-zinc-900 xl:text-lg">
                    {message.content}
                  </h3>
                </div>
              ) : (
                <div
                  key={index}
                  className="flex w-max max-w-[calc(100%-50px)] flex-col items-start justify-center rounded-lg rounded-tl-sm bg-sky-900/80 px-8 py-2"
                >
                  <h3 className="text-sm font-medium text-white xl:text-lg">
                    {message.content}
                  </h3>
                </div>
              ),
            )}
          </div>
        )}
        <div className="mx-auto flex h-10 w-[90%] flex-row rounded-sm border border-zinc-300 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Digite sua mensagem..."
            className="h-full w-[95%] p-2 text-zinc-900 focus:outline-none disabled:opacity-50"
            value={inputMessage}
            onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
            disabled={isMessageLoading}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            className="flex h-full w-[5%] items-center justify-center"
            onClick={handleSendMessage}
          >
            {isMessageLoading ? (
              <Spinner />
            ) : (
              <SendHorizonal size={20} className="text-[#8E8E9E]" />
            )}
          </button>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        className="max-w-[560px]"
      >
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <span className="text-lg font-semibold">Histórico De Chats</span>
            <button
              onClick={() => setShowModal(false)}
              className="flex h-8 w-8 items-center justify-center"
            >
              <X />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 p-2">
            {userChats.length !== 0 &&
              userChats.map((chat, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 rounded-md border border-zinc-300 bg-white p-2 shadow-sm lg:w-60"
                >
                  <div className="flex items-center gap-1">
                    <Image
                      src="/Icons/aiBlack.svg"
                      alt=""
                      width={50}
                      height={50}
                      className="h-5 w-5"
                    />
                    <div className="flex w-full items-center justify-between">
                      <span className="text-sm font-medium text-zinc-900">
                        {chat.name}
                      </span>
                      <span className="text-xs text-zinc-700">
                        {new Date(chat.createdAt).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                  </div>
                  <span className="ml-5 truncate text-xs italic text-zinc-500">
                    {chat.messages[chat.messages.length - 1].content}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
