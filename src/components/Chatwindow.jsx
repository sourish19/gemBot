import { useEffect, useRef, useState } from "react";

const ChatMessage = () => {
  const inputMssg = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const el = inputMssg.current;
    if (el) {
      const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
      console.log(getComputedStyle(el).lineHeight);

      const maxHeight = lineHeight * 3; // for 3 lines
      if (el.scrollHeight > maxHeight) {
        console.log(el.scrollHeight, maxHeight);
      }
    }
  }, []);

  return (
    <div className="bg-[#282A2C] py-3 px-4 max-w-md rounded-tr rounded-3xl">
      <span ref={inputMssg} className="overflow-hidden text-base ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eius
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam
        dolore praesentium illum aliquid maiores molestias non, quasi, ipsum
        quia animi laboriosam voluptatibus nemo. Laborum ipsa ipsam neque ea
        atque culpa incidunt iste debitis facere, consequuntur accusamus
        recusandae, tempora dignissimos.
      </span>
    </div>
  );
};

const ChatWindow = () => {
  return (
    <div className="flex-8">
      <div className="flex justify-center items-center h-full">
        <div className=" h-full w-8/12 p-5">
          <div className="flex justify-end">
            <ChatMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

//  <div className="flex justify-center items-center h-full  ">
// <span className="text-[#4285F4] text-3xl font-semibold leading-2">Hello, Sourish</span>
// </div>

export default ChatWindow;
