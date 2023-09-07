import { Outlet, redirect, useLoaderData } from "react-router-dom"
import axios from "axios"
import NavbarMobile from "../components/footers/NavbarMobile"
import HeaderComponent from "../components/headers/Header"

import { Main } from "../Styles/Styles"
import Sidebar from "../components/headers/Sidebar"

export const loader = async ({ request }) => {
  const token = localStorage.getItem("token")
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get("search") || ""

  try {
    const { data } = await axios(`/api/v1/article?search=${searchTerm}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return {
      data,
      searchTerm,
    }
  } catch (error) {
    console.log(error?.response?.data?.msg)
    return redirect("/")
  }
}
const Home = ({ themeToggle }) => {
  const { user, data, searchTerm } = useLoaderData()

  return (
    <Main>
      <Sidebar themeToggle={themeToggle} searchTerm={searchTerm} />
      <HeaderComponent themeToggle={themeToggle} />
      <Outlet context={[user, data]} />
      <NavbarMobile searchTerm={searchTerm} />
    </Main>
  )
}
export default Home
