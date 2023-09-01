import { Outlet } from "react-router-dom"
import NavbarMobile from "../components/footers/NavbarMobile"
import HeaderComponent from "../components/headers/Header"

const Home = () => {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
      <NavbarMobile />
    </div>
  )
}
export default Home
