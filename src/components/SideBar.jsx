import {  useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive"
import Control from "../assets/control.png"
import Chat from "../assets/Chat.png"
import Chart from "../assets/Chart.png"
import Calendar from "../assets/Calendar.png"
import User from "../assets/User.png"
import Setting from "../assets/Setting.png"
import Folder from "../assets/Folder.png"
import Search from "../assets/Search.png"
import Logo from "../assets/logo.png"

const SideBar = () => {
  const [open, setOpen] = useState(true);


  const location = useLocation().pathname;
  console.log(location);

  // isTabletOrMobile ? setOpen(false) : setOpen(true)

  const Menus = [
    { title: "Overview", src: Chart },
    { title: "Health Record", src: Chat },
    { title: "Data Sharing", src: User },
    { title: "Health Provider ", src: Calendar },
    { title: "Profile", src: Chart },
    { title: "Notification", src: Search },
    { title: "Setting", src: Setting, gap: true  },
    { title: "Help $ FAQ ", src: Folder},
    { title: "Log Out", src: Folder , gap: true   },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#8842F0] h-fit p-5 pt-[14px] relative duration-300`}
      >
        <img alt=""
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img alt=""
            src={Logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-[#000] origin-left font-bold text-2xl duration-200 tracking-[0.1px] ${
              !open && "scale-0"
            }`}
          >
            LOGO
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-white hover:text-[#8842F0] text-[#C3C5CE] text-xl font-[600] items-center gap-x-4 
              ${Menu.gap ? "mb-[105px]" : "mb-9"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt=""/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default SideBar;
