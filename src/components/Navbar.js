import Icon from "../assets/icon_search.png"
import Calendar from "../assets/calendar.svg"
import Clock from "../assets/clock.svg"
import Notification from "../assets/notification.svg"


const Navbar = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-20 px-8 flex justify-between items-center'>
        <div className="flex w-[300px] h-[60px] items-center px-[10px] bg-[#F0F2FA] rounded-lg">
          <img src={Icon} alt="search icon" className="w-6 h-6"/>
          <input type="text" name="" value="" placeholder="Searh" className="border-0 outline-none w-full bg-[#F0F2FA]" />
        </div>
        <div className="flex gap-[14px]">
          <img src={Calendar} alt="calendar" className="w-4 h-4"/>
          <p></p>
        </div>
        <div className="flex gap-[14px]">
          <img src={Clock} alt="calendar" className="w-4 h-4"/>
        </div>
        <div className="flex gap-[14px]">
          <img src={Notification} alt="calendar" className="w-4 h-4"/>
        </div>
      </div>
    </div>)
}

export default Navbar