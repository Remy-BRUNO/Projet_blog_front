import { cube, heart, search, add, eye } from "../../assets"
import { NavLink, Form, useSubmit } from "react-router-dom"
import { useRef } from "react"

const NavbarMobile = ({ user, searchTerm }) => {
  const submit = useSubmit()
  const inputRef = useRef(null)
  const role = user?.role
  return (
    <nav>
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
        <img src={search} alt="Search" />
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
    </nav>
  )
}
export default NavbarMobile
