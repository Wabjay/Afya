import {  useState } from "react"
import Control from "../assets/control.png"
import Chat from "../assets/Chat.png"
import Chart from "../assets/Chart.png"
import Calendar from "../assets/Calendar.png"
import User from "../assets/User.png"
import Setting from "../assets/Setting.png"
import Folder from "../assets/Folder.png"
import Search from "../assets/Search.png"
import Logo from "../assets/vite.png"
import { Link } from "react-router-dom"

const SideBar = () => {
  const [open, setOpen] = useState(true);



  // isTabletOrMobile ? setOpen(false) : setOpen(true)

  const Menus = [
    { title: "Overview", src: Chart, link: '/' },
    { title: "Health Record", src: Chat, page:[
      {
      title: "Create Record", src: Chat, link: '/createrecord' },
      {
        title: "Edit Record", src: Chat, link: '/editrecord' }
    ]},
    { title: "Data Sharing", src: User, link: '/datasharing' },
    { title: "Health Provider ", src: Calendar, link: '/healthprovider' },
    { title: "Profile", src: Chart, link: '/profile' },
    { title: "Notification", src: Search, link: '/notification' },
    { title: "Setting", src: Setting, gap: true, link: '/setting'  },
    { title: "Help $ FAQ ", src: Folder, link: '/faq' },
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
            className={`cursor-pointer duration-500  w-10 h-10${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-[#fff] origin-left font-bold text-2xl duration-200 tracking-[0.1px] ${
              !open && "scale-0"
            }`}
          >
            AFYA
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <>
             <Link to={Menu.link}  key={index}>
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-white hover:text-[#8842F0] text-white text-xl font-[600] items-center gap-x-4 
              ${Menu.gap ? "mb-[105px]" : Menu.page ? "mb-2" : "mb-9"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={Menu.src} alt=""/>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
            </Link>
            {Menu.page && 
            <div className="mb-6">
            {Menu.page.map((Menu, index) => (
              
               <Link to={Menu.link}  key={index}>
              <li
                className={`flex rounded-md p-2 ml-8 cursor-pointer hover:bg-white hover:text-[#8842F0] text-white text-xl font-[600] items-center gap-x-4 ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </li>
              </Link>))}
              </div>
            }
            </>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default SideBar;
