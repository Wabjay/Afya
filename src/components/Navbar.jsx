import Icon from "../assets/icon_search.png"
import Calendar from "../assets/calendar.svg"
import Clock from "../assets/clock.svg"
import Notification from "../assets/notification.svg"
import { useEffect, useState } from "react"


const Navbar = () => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const option = { hour: '2-digit', minute: '2-digit', hour12: true };
  const formattedTime = currentTime.toLocaleTimeString(undefined, option);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString(undefined, options);
  return (
    <div className='w-full bg-white'>
      <div className='w-full h-20 px-8 flex justify-between items-center'>
        <div className="flex w-[300px] h-[60px] items-center px-[10px] bg-[#F0F2FA] rounded-lg">
          <img src={Icon} alt="search icon" className="w-6 h-6"/>
          <input type="text" name="" value={search} placeholder="Search" className="pl-4 font-medium text-[#9B9FAE] border-0 outline-none w-full bg-[#F0F2FA]"
          onChange={(e)=>setSearch(e.target.value)} />
        </div>
        <div className="flex gap-[14px]">
          <img src={Calendar} alt="calendar" className="w-5 h-5"/>
          <p className="text-[#9B9FAE] text-[16px]">{formattedDate}</p>
        </div>
        <div className="flex gap-[14px]">
          <img src={Clock} alt="calendar" className="w-5 h-5"/>
          <p className="text-[#9B9FAE] text-[16px]">{formattedTime}</p>
        </div>
        <div className="flex gap-[14px]">
          <img src={Notification} alt="calendar" className="w-5 h-5"/>
        </div>
      </div>
    </div>)
}

export default Navbar