// import { useMediaQuery } from "react-responsive"
import SideBar from "./SideBar"
// import { useState } from "react"
import Navbar from "./Navbar"
import Footer from "./footer"

const Layout = ({children}) => {
  // const [open, setOpen] = useState(false)

  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })
  // const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })


// console.log(email)

  // const openSidebar = () =>{
  //   open === false ? setOpen(true) : setOpen(false)
  //   console.log("Clicked")
  // }
  return (
<div className="bg-[#F0F2FA]">
  <div className="grid grid-cols-auto text-left">
     <SideBar/>
<div>
<Navbar />
{children}
</div>
  </div>
  <Footer />
    </div>  )
}

export default Layout