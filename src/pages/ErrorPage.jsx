import { Link, useRouteError } from "react-router-dom"
import notFound from "../assets/not-found.png"
const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <main className="error-page full-page">
      <div className="flow">
        <img src={notFound} alt="Page Introuvable" className="error-img" />
        <h1>Oups !</h1>
        <p>Nous ne parvenons pas à trouver la page que vous cherchez</p>
        <Link to="/">Retourner à l&apos;accueil</Link>
      </div>
    </main>
  )
}
export default ErrorPage
