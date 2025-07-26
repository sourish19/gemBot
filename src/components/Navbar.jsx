import GeminiIcon from "../assets/google-gemini-icon.svg";
import UserPng from "../assets/user.png"

const Navbar = () => {
  return (
    <div className="flex justify-between w-full h-20 px-4 py-3">
      <div className="h-full">
        <div className="text-[#A2A9B0] font-medium leading-[28px] text-xl">
          Gemini
        </div>
        <div>2.5 Flash</div>
      </div>
      <div className="flex justify-between w-50">
        <button className="flex justify-center items-center gap-2 bg-[#3D3F42] px-5 h-10 rounded-lg text-sm">
          <img  className="w-3 h-3" src={GeminiIcon} alt="" />
          <span className="text-sm font-medium leading-5">Upgrade</span>
        </button>
        <div className="pr-6 pb-4 flex items-center"><img className="h-9 w-9" src={UserPng} alt="" /></div>
      </div>
    </div>
  );
};

export default Navbar;
