import { Link, Form, redirect, useNavigation } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import FormRow from "../../components/FormRow"
import { useState } from "react"

let imageValue

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  const token = localStorage.getItem("token")
  data.image = imageValue

  try {
    await axios.post("/api/v1/article/admin", data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    toast.success("Article ajouté")
    return redirect("/admin")
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const CreateArticle = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"
  //state pour laisser le temps de upload avant de submit
  const [uploading, setUploading] = useState(false)

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
      <FormRow type="text" name="title" labelText="Titre" />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        rows="5"
        cols="33"
        required
      ></textarea>
      <label htmlFor="image">Choisir une image</label>

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        required
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
export default CreateArticle
