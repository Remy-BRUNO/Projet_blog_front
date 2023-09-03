import { Outlet } from "react-router-dom"
import NavbarMobile from "../components/footers/NavbarMobile"
import HeaderComponent from "../components/headers/Header"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyles } from "../Styles/Theme"
const Home = ({ themeToggle, theme }) => {
  return (
    <div>
      <HeaderComponent themeToggle={themeToggle} />
      <Outlet />
    </div>
  )
}
export default Home
