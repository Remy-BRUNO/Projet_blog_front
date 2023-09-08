import { Outlet, redirect, useLoaderData } from "react-router-dom"
import HeaderComponent from "../../components/headers/Header"
import NavbarMobile from "../../components/footers/NavbarMobile"
import { customFetch } from "../../utils/customFetch"

//styles
import { Main } from "../../Styles/Styles"
import Sidebar from "../../components/headers/Sidebar"

export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get("search") || ""

  try {
    const {
      data: { user },
    } = await customFetch("users/current-user")
    const { data } = await customFetch(`article?search=${searchTerm}`)
    const { data: favoris } = await customFetch(`favoris`)

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
