import { useState } from "react";
import apiCall from "../api.js";

const ChatContainer = () => {
  const [sendInputBttn, setSendInputBttn] = useState(false);
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    if (e.target.value) setSendInputBttn(true);
    else if (e.target.value === "") setSendInputBttn(false);
    setUserInput(e.target.value);
  };

  const handleClick = () => {
    apiCall(userInput)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex-2 flex justify-center items-center mb-8">
      <div className="border-1 border-gray-600 w-6/12 p-5 rounded-3xl ">
        <input
          onChange={handleChange}
          className="w-full appearance-none focus:outline-none text-[#A2A9B0] placeholder:text-[#A2A9B0] placeholder:text-md placeholder:font-medium placeholder:leading-[20px"
          type="text"
          placeholder="Ask Gemini"
        />
        <div className="flex justify-between items-center pt-6 text-[#A2A9B0] text-sm font-medium">
          <div className="flex gap-6 ">
            <div>
              {" "}
              <i className="bi bi-plus-lg"></i>
            </div>
            <div>
              {" "}
              <i className="bi bi-globe"></i>
              <span className="pl-2">Deep Search</span>
            </div>
            <div>
              {" "}
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

// <i class="bi bi-caret-right-fill"></i>

export default ChatContainer;
