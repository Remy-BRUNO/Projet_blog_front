import { customFetch } from "../../utils/customFetch"
import { redirect } from "react-router-dom"
import { toast } from "react-toastify"

export const action = async ({ params }) => {
  const { id } = params

  try {
    await customFetch.delete(`favoris/${id}`)
    toast.success("Favoris supprimé")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }

  return redirect("/user/favoris")
}
