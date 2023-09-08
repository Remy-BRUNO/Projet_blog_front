import { redirect } from "react-router-dom"
import { toast } from "react-toastify"
import { customFetch } from "../../utils/customFetch"
import axios from "axios"
export const action = async ({ params }) => {
  const { id } = params
  try {
    await axios.post(
      `https://blog-api-wzi4.onrender.com/api/v1/favoris/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    toast.success("Favoris ajouté")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }

  return redirect("/user")
}
