import { cube, heart, search, add, eye } from "../../assets"
import { NavLink, Form, useSubmit } from "react-router-dom"
import { useRef } from "react"

// styles
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  height: 78px;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  border-radius: 0 0 12px 12px;
  background: #171918;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: sticky;
  bottom: 0;
`

const NavbarMobile = ({ user, searchTerm }) => {
  const submit = useSubmit()
  const inputRef = useRef(null)
  const role = user?.role
  return (
    <Nav>
      {role === "user" && (
        <>
          <NavLink to={"/user/favoris"}>
            <img src={heart} alt="" />
          </NavLink>
          <div>|</div>
          <NavLink to={"/user"}>
            <img src={cube} alt="" />
          </NavLink>
        </>
      )}

      {role === "admin" && (
        <>
          <NavLink to={"/admin/addarticle"}>
            <img src={add} alt="add article" />
          </NavLink>

          <NavLink to={"/admin/userslist"}>
            <img src={eye} alt="view all users" />
          </NavLink>
          <NavLink to={"/admin"}>
            <img src={cube} alt="Dashboard Admin" />
          </NavLink>
        </>
      )}

      {!user && (
        <NavLink to={"/"}>
          <img src={cube} alt="" />
        </NavLink>
      )}

      <div>|</div>
      <Form>
        <button>
          <img src={search} alt="Search" />
        </button>
        <input
          type="search"
          name="search"
          id="search"
          ref={inputRef}
          defaultValue={searchTerm}
          onChange={(e) => {
            const isFirstSearch = searchTerm === null
            submit(e.currentTarget.form, { replace: !isFirstSearch })
          }}
        />
      </Form>
    </Nav>
  )
}
export default NavbarMobile
