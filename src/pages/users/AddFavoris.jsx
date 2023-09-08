import { redirect } from "react-router-dom"
import { toast } from "react-toastify"
import { customFetch } from "../../utils/customFetch"
import axios from "axios"
export const action = async ({ params }) => {
  const { id } = params
  const token = localStorage.getItem("token")

  try {
    axios.interceptors.request.use(
      (config) => {
        if (config.authorization !== false) {
          if (token) {
            config.headers.Authorization = "Bearer " + token
          }
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    await axios.post(`https://blog-api-wzi4.onrender.com/api/v1/favoris/${id}`)
    toast.success("Favoris ajouté")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }

  return redirect("/user")
}
