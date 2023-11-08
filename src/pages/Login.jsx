import { Form, redirect } from "react-router-dom"
import FormRow from "../components/FormRow.jsx"
import axios from "axios"
import { toast } from "react-toastify"
import { CardStyled, Card, LogButton, StyledLink } from "../Styles/Styles.jsx"
import spaceInvader from "../assets/spaceInvader.svg"
import { urlApi } from "../App.jsx"

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const resp = await axios.post(`${urlApi}/api/v1/auth/login`, data)
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
    <Card>
      <Form method="POST">
        <CardStyled>
          <div className="card-inner">
            <h2 data-atropos-offset="-3">Connection</h2>
            <FormRow
              type="email"
              name="email"
              labelText="Email"
              defaultValue="la-connerie-tue-admin@hotmail.fr"
              data-atropos-offset="-2"
            />
            <FormRow
              type="password"
              name="password"
              labelText="PassWord"
              defaultValue="administrateur"
              data-atropos-offset="-1"
            />
            <LogButton
              type="submit"
              className="btn btn-block"
              data-atropos-offset="0"
            >
              login
            </LogButton>
            <p data-atropos-offset="1">
              Not a Member?{" "}
              <StyledLink to="/register">Register Here</StyledLink>
            </p>
            <img src={spaceInvader} alt="" data-atropos-offset="-3" />
          </div>
        </CardStyled>
      </Form>
    </Card>
  )
}
export default Login
