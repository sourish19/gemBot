import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/Chatwindow";
import ChatContainer from "./components/Chatcontainer";

const Layout = () => {
  return (
    <div className="flex bg-[#1B1C1D] text-white font-[Google Sans] font-light">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <ChatWindow />
        <ChatContainer />
      </div>
    </div>
  );
};

export default Layout;