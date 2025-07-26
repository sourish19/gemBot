import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const Layout = () => {
  return (
    <div className="flex bg-[#1B1C1D] text-white font-[Google Sans] font-light">
      <Sidebar />
      <Navbar />
    </div>
  );
};

export default Layout;
