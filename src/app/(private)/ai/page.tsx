"use client";
import { SendHorizonal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCookies } from "next-client-cookies";
import OpenAI from "openai";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

  async function handleSendGptMessage(messageContent: string) {
    const client = new OpenAI({
      dangerouslyAllowBrowser: true,
      apiKey: process.env.OPENAI_API_KEY,
    });

    const message = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [...userMessages, { role: "user", content: messageContent }],
    });

    console.log("message: ", message);

    return message.choices[0].message.content;
  }

  async function GetChatDescription(messageContent: string) {
    const client = new OpenAI({
      dangerouslyAllowBrowser: true,
      apiKey: process.env.OPENAI_API_KEY,
    });

    const message = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Gere um resumo de 10 palavras sobre a seguinte mensagem:" +
            messageContent,
        },
      ],
    });
    console.log("descriptino: ", message.choices[0].message.content);

    return message.choices[0].message.content;
  }

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== "") {
      setIsMessageLoading(true);
      const token = cookies.get(Token);
      let newChatId: string = "";
      if (!chatId) {
        const description = await GetChatDescription(inputMessage);
        const createChat = await AuthPostAPI(
          "/user/chat",
          {
            message: inputMessage,
            name: description,
          },
          token,
        );

        console.log("createChat", createChat);

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
      <div className="rounded-md bg-white p-5 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex h-10 flex-row items-center gap-1">
            <div className="h-8 w-2 rounded-full bg-sky-900" />
            <Image
              src="/axionLogo.png"
              className="h-2/3 w-max object-contain lg:h-full"
              alt=""
              width={300}
              height={100}
            />
          </div>
          <div className="flex flex-col items-center gap-1 md:flex-row md:gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="whitespace-nowrap rounded-md bg-sky-600 px-2 py-1 text-[10px] text-white transition-transform hover:scale-105 hover:bg-sky-700 md:py-2 md:text-sm"
            >
              Histórico de chats
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-full flex-1 flex-col">
        <Image
          src="/A.png"
          alt=""
          width={200}
          height={200}
          className="mx-auto mt-4 h-20 w-20"
        />
        {!hasMessages ? (
          <div className="flex w-full flex-wrap items-center justify-center gap-2 p-2 lg:min-h-[calc(100vh-24rem)] lg:gap-4 lg:p-4">
            <button
              onClick={() => handleButtonClick("Gerar Insights Personalizados")}
              className="flex h-28 w-28 flex-col rounded-lg border border-gray-200 bg-white p-4 text-start text-xs text-gray-600 shadow lg:h-28 lg:w-40 lg:p-2 lg:text-sm 2xl:h-40 2xl:p-4 2xl:text-base"
            >
              <span>📊</span>
              Gerar Insights Personalizados
            </button>
            <button
              onClick={() =>
                handleButtonClick("Desenvolver Teses, Textos e Discursos")
              }
              className="flex h-28 w-28 flex-col rounded-lg border border-gray-200 bg-white p-4 text-start text-xs text-gray-600 shadow lg:h-28 lg:w-40 lg:p-2 lg:text-sm 2xl:h-40 2xl:p-4 2xl:text-base"
            >
              <span>📝</span>
              Desenvolver Teses, Textos e Discursos
            </button>
            <button
              onClick={() => handleButtonClick("Produzir Conteúdos")}
              className="flex h-28 w-28 flex-col rounded-lg border border-gray-200 bg-white p-4 text-start text-xs text-gray-600 shadow lg:h-28 lg:w-40 lg:p-2 lg:text-sm 2xl:h-40 2xl:p-4 2xl:text-base"
            >
              <span>🖋️</span>
              Produzir Conteúdos
            </button>
            <button
              onClick={() =>
                handleButtonClick("Criar Planilhas, Cálculos e Projeções")
              }
              className="flex h-28 w-28 flex-col rounded-lg border border-gray-200 bg-white p-4 text-start text-xs text-gray-600 shadow lg:h-28 lg:w-40 lg:p-2 lg:text-sm 2xl:h-40 2xl:p-4 2xl:text-base"
            >
              <span>📈</span>
              Criar Planilhas, Cálculos e Projeções
            </button>
          </div>
        ) : (
          <div className="flex min-h-[calc(100vh-24rem)] w-full flex-col gap-4 overflow-y-scroll px-2 py-4">
            {userMessages.map((message, index) =>
              message.role === "user" ? (
                <div
                  key={index}
                  className="ml-auto flex w-max max-w-[calc(100%-50px)] flex-col items-start justify-center rounded-2xl bg-white px-8 py-2"
                >
                  <h3 className="text-sm font-medium text-zinc-900 xl:text-lg">
                    {message.content}
                  </h3>
                </div>
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  key={index}
                  className="flex w-max max-w-[calc(100%-50px)] flex-col items-start justify-center rounded-lg rounded-tl-sm px-8 py-2 text-sm font-medium xl:text-lg"
                >
                  {message.content}
                </ReactMarkdown>
              ),
            )}
          </div>
        )}
        <div className="mx-auto flex h-10 w-[90%] flex-row justify-between rounded-sm border border-zinc-300 bg-white shadow-sm">
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
            className="mr-4 flex h-full items-center justify-center"
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
        className="overflow-y-scroll"
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <span className="text-lg font-semibold">Histórico De Chats</span>
            <button
              onClick={() => setShowModal(false)}
              className="flex h-8 w-8 items-center justify-center"
            >
              <X />
            </button>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-2 p-2">
            {userChats.length !== 0 &&
              userChats.map((chat, index) => (
                <button
                  onClick={() => {
                    setChatId(chat.id);
                    setHasMessages(true);
                    setUserMessages(chat.messages);
                    setShowModal(false);
                  }}
                  key={index}
                  className="flex flex-col gap-1 rounded-md border border-zinc-300 bg-white p-2 shadow-sm lg:w-96"
                >
                  <div className="flex items-center gap-1">
                    <Image
                      src="/Icons/aiBlack.svg"
                      alt=""
                      width={50}
                      height={50}
                      className="h-5 w-5"
                    />
                    <div className="flex w-full flex-col">
                      <span className="text-sm font-medium text-zinc-900">
                        {chat.name}
                      </span>
                      <span className="text-xs text-zinc-700">
                        {new Date(chat.createdAt).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                  </div>
                  <span className="ml-5 max-w-80 truncate text-xs italic text-zinc-500">
                    {chat.messages[chat.messages.length - 1].content}
                    {chat.messages[chat.messages.length - 1].content}
                    {chat.messages[chat.messages.length - 1].content}
                  </span>
                </button>
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
