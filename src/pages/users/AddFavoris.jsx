import { redirect } from "react-router-dom"
import { toast } from "react-toastify"
import { customFetch } from "../../utils/customFetch"
export const action = async ({ params }) => {
  const { id } = params
  try {
    await customFetch.post(`favoris/${id}`)
    toast.success("Favoris ajouté")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }

  return redirect("/user")
}
