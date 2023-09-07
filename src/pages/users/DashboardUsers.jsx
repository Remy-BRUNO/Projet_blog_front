import { Outlet, redirect, useLoaderData } from "react-router-dom"
import HeaderComponent from "../../components/headers/Header"
import axios from "axios"
import NavbarMobile from "../../components/footers/NavbarMobile"

//styles
import { Main } from "../../Styles/Styles"
import Sidebar from "../../components/headers/Sidebar"

export const loader = async ({ request }) => {
  const token = localStorage.getItem("token")
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get("search") || ""

  try {
    const {
      data: { user },
    } = await axios("/api/v1/users/current-user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const { data } = await axios(`/api/v1/article?search=${searchTerm}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const { data: favoris } = await axios(`/api/v1/favoris`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return {
      user,
      data,
      searchTerm,
      favoris,
    }
  } catch (error) {
    console.log(error?.response?.data?.msg)
    return redirect("/")
  }
}
const DashboardUsers = ({ themeToggle }) => {
  const { user, data, searchTerm, favoris } = useLoaderData()

  return (
    <Main>
      <Sidebar themeToggle={themeToggle} searchTerm={searchTerm} user={user} />

      <HeaderComponent user={user} themeToggle={themeToggle} />

      <Outlet context={[user, data, favoris]} />
      <NavbarMobile user={user} searchTerm={searchTerm} />
    </Main>
  )
}
export default DashboardUsers
