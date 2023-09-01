import { Outlet, redirect, useLoaderData } from "react-router-dom"
import HeaderComponent from "../../components/headers/Header"
import axios from "axios"
import NavbarMobile from "../../components/footers/NavbarMobile"

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
    return {
      user,
      data,
      searchTerm,
    }
  } catch (error) {
    console.log(error?.response?.data?.msg)
    return redirect("/")
  }
}
const DashboardUsers = () => {
  const { user, data, searchTerm } = useLoaderData()

  return (
    <div>
      <HeaderComponent user={user} />

      <Outlet context={[user, data]} />
      <NavbarMobile user={user} searchTerm={searchTerm} />
    </div>
  )
}
export default DashboardUsers
