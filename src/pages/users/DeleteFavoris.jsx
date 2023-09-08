import axios from "axios"
import { customFetch } from "../../utils/customFetch"
import { redirect } from "react-router-dom"
import { toast } from "react-toastify"

export const action = async ({ params }) => {
  const { id } = params

  try {
    await axios.delete(
      `https://blog-api-wzi4.onrender.com/api/v1/favoris/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    toast.success("Favoris supprimé")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }

  return redirect("/user/favoris")
}
