import { useState, useRef, useEffect } from "react";
import ChatWindow from "./Chatwindow";
import apiCall from "../api.js";

const ChatInput = ({ handleClick, handleChange, sendInputBttn, value }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
    }
  }, [value]);

  return (
    <div className="flex-2 flex justify-center items-center mb-8">
      <div className="border border-gray-600 min-w-6/12  p-5 rounded-3xl overflow-y-hidden">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          placeholder="Ask Gemini"
          className="w-full resize-none overflow-y-auto max-h-[200px] appearance-none focus:outline-none text-[#A2A9B0] placeholder:text-[#A2A9B0] placeholder:text-md placeholder:font-medium placeholder:leading-[20px] rounded-xl p-2"
        />
        <div className="flex justify-between items-center pt-6 text-[#A2A9B0] text-sm font-medium">
          <div className="flex gap-6">
            <div>
              <i className="bi bi-plus-lg"></i>
            </div>
            <div>
              <i className="bi bi-globe"></i>
              <span className="pl-2">Deep Search</span>
            </div>
            <div>
              <i className="bi bi-back"></i>
              <span className="pl-2">Canvas</span>
            </div>
            <div>
              <i className="bi bi-file-image"></i>
              <span className="pl-2">Images</span>
            </div>
          </div>
          <div>
            {sendInputBttn ? (
              <button onClick={handleClick} className="cursor-pointer">
                <i className="bi bi-caret-right-fill"></i>
              </button>
            ) : (
              <button className="cursor-pointer">
                <i className="bi bi-mic-fill"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatContainer = () => {
  const [sendInputBttn, setSendInputBttn] = useState(false);
  const [userPrompt, setUserPrompt] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setSendInputBttn(newValue.trim() !== "");
  };

  const handleClick = () => {
    if (!value.trim()) return;

    apiCall(value)
      .then((data) => {
        console.log(data);
        setApiResponse(data);
      })
      .catch((err) => {
        console.error(err);
      });

    setUserPrompt(value);
    setValue("");
  };

  return (
    <>
      <ChatWindow userPrompt={userPrompt} apiResponse={apiResponse} />
      <ChatInput
        handleClick={handleClick}
        handleChange={handleChange}
        sendInputBttn={sendInputBttn}
        value={value}
      />
    </>
  );
};

export default ChatContainer;
