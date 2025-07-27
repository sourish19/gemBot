import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const ChatMessage = ({ userPrompt, apiResponse }) => {
  const inputMssg = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const el = inputMssg.current;
    if (el) {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);

      const maxHeight = lineHeight * 3;

      el.scrollHeight > maxHeight ? setIsOverflow(!isOverflow) : null;
    }
  }, [userPrompt]);

  return userPrompt ? (
    <div className="bg-[#282A2C] py-3 px-4 max-w-md rounded-tr rounded-3xl flex justify-center ">
      <span ref={inputMssg} className="overflow-hidden text-base line-clamp-3 ">
        {userPrompt}
      </span>
      {isOverflow ? (
        <div>
          <ChevronDown />
        </div>
      ) : null}
    </div>
  ) : (
    <div className="flex justify-center items-center h-full  ">
      <span className="text-[#4285F4] text-3xl font-semibold leading-2">
        Hello, Sourish
      </span>
    </div>
  );
};

const ChatWindow = ({ userPrompt, apiResponse }) => {
  return (
    <div className="flex-8">
      <div className="flex justify-center items-center h-full">
        <div className=" h-full w-6/12 p-5">
          <div
            className={`flex ${userPrompt ? "justify-end" : "justify-center items-center h-full"}`}
          >
            <ChatMessage userPrompt={userPrompt} apiResponse={apiResponse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
