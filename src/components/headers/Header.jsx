import { NavLink, Link, useNavigate } from "react-router-dom"
import { logo } from "../../assets"
import { toast } from "react-toastify"
import DarkModeToggle from "react-dark-mode-toggle"
import { useState } from "react"

// styles
import styled from "styled-components"

const Header = styled.header`
  display: flex;
  height: 78px;
  margin: 0 auto;
  padding: 10.383px 1.901px 10.157px 2.5px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #171918;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const Img = styled.img`
  width: 4rem;
`
const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69px;
  height: 28px;

  border-radius: 20px;
  border: 2px solid var(--main-green, #27ae60);
  background: #3a3b3b;
  box-shadow: 0px 5px 15px 0px rgba(37, 44, 97, 0.15),
    0px 2px 4px 0px rgba(136, 144, 194, 0.2);
  color: var(--main-green, #27ae60);
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  font-family: "Montserrat";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
`
const Button = styled.button`
  display: flex;
`

const HeaderComponent = ({ user }) => {
  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(() => false)
  const logout = () => {
    localStorage.removeItem("token")
    toast.success("Déconnexion...")
    navigate("/")
  }

  return (
    <Header>
      <NavLink to="/">
        <Img src={logo} alt="" />
      </NavLink>

      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />

      {user && (
        <div className="nav-user-info">
          <span className="username">{user.name}</span>
          <button type="button" className="btn" onClick={logout}>
            déconnexion
          </button>
        </div>
      )}
      {!user && (
        <Links>
          <StyledLink to="/register">Sign Up</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </Links>
      )}
    </Header>
  )
}
export default HeaderComponent
