import { Link, Form, redirect } from "react-router-dom"
import FormRow from "../components/FormRow.jsx"
import axios from "axios"
import { toast } from "react-toastify"

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const resp = await axios.post("/api/v1/auth/login", data)
    localStorage.setItem("token", resp.data.token)
    toast.success("Connexion réussie")
    if (resp.data.role === "admin") {
      return redirect("/admin")
    } else {
      return redirect("/user")
    }
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}
const Login = () => {
  return (
    <Form method="POST" className="form">
      <h4>Connexion</h4>
      <FormRow
        type="email"
        name="email"
        defaultValue="la-connerie-tue-admin@hotmail.fr"
      />
      <FormRow
        type="password"
        name="password"
        labelText="mot de passe"
        defaultValue="administrateur"
      />
      <button type="submit" className="btn btn-block">
        Se connecter
      </button>
      <p style={{ textAlign: "center", marginTop: "1em" }}>
        Vous n&apos;êtes pas membre ?{" "}
        <Link to="/register">S&apos;inscrire</Link>
      </p>
    </Form>
  )
}
export default Login