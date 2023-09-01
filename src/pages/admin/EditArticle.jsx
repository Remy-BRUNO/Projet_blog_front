import {
  Link,
  Form,
  redirect,
  useNavigation,
  useLoaderData,
} from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import FormRow from "../../components/FormRow"
import { useState } from "react"

let imageValue
export const loader = async ({ params }) => {
  const { id } = params
  const token = localStorage.getItem("token")

  try {
    const { data } = await axios(`/api/v1/article/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    imageValue = data.article.image
    return { data }
  } catch (error) {
    console.log(error?.response?.data?.msg)
    return redirect("/admin")
  }
}

export const action = async ({ params, request }) => {
  const { id } = params
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const token = localStorage.getItem("token")

  data.image = imageValue
  try {
    await axios.put(`/api/v1/article/admin/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    toast.success("Article Modifié")
    return redirect("/admin")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const EditArticle = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  //state pour laisser le temps de upload avant de submit
  const [uploading, setUploading] = useState(false)

  const {
    data: { article },
  } = useLoaderData()

  const handleChange = async (e) => {
    const token = localStorage.getItem("token")
    const imageFile = e.target.files[0]
    const formData = new FormData()
    formData.append("image", imageFile)

    setUploading(true)

    try {
      const {
        data: {
          image: { src },
        },
      } = await axios.post(`/api/v1/article/uploads`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })

      setTimeout(setUploading(false), 5000)
      imageValue = src
    } catch (error) {
      imageValue = null
      console.log(error)
    }
  }

  return (
    <Form method="POST" className="form">
      <FormRow
        type="text"
        name="title"
        labelText="Titre"
        defaultValue={article.title}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows="5"
        cols="33"
        defaultValue={article.description}
        required
      ></textarea>
      <label htmlFor="image">Choisir une image</label>

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn"
        disabled={isSubmitting || uploading}
      >
        {isSubmitting ? "Ajout..." : "Ajouter"}
      </button>
    </Form>
  )
}
export default EditArticle