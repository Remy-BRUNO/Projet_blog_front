import axios from "axios"
import { redirect } from "react-router-dom"
import { toast } from "react-toastify"

export const action = async ({ params }) => {
  const { id } = params
  const token = localStorage.getItem("token")

  try {
    await axios.post(`/api/v1/favoris/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    toast.success("Favoris ajouté")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }

  return redirect("/user")
}
