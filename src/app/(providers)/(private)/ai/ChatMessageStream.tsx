"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessageProps {
  message: string;
  index: number;
  isNewChat: boolean;
}

export function ChatMessageStream({ message, index, isNewChat }: MessageProps) {
  const [substringLength, setSubstringLength] = useState(0);

  useEffect(() => {
    setSubstringLength(0);
  }, [message]);

  useEffect(() => {
    if (message) {
      if (!isNewChat) {
        const intervalId = setInterval(() => {
          if (substringLength >= message.length) {
            clearInterval(intervalId); // skip the animation if the message is already fully typed out
            return;
          }
          setSubstringLength((prevLength) => {
            if (prevLength >= message.length) {
              clearInterval(intervalId); // clear the interval when reaching the end
              return prevLength;
            }
            return prevLength + 1;
          });

          // Autoscroll to the bottom of the container
          const container = document.getElementById("container");
          if (container) {
            container.scrollTop = container.scrollHeight;
          }
        }, 100);
      } else {
        setSubstringLength(message.length);
      }
    }
  }, [message, substringLength]);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      key={index}
      className="flex w-max max-w-[calc(100%-50px)] flex-col items-start justify-center rounded-lg rounded-tl-sm px-8 py-2 text-sm font-medium xl:text-lg"
    >
      {!isNewChat ? message.substring(0, substringLength) : message}
    </ReactMarkdown>
  );
}
