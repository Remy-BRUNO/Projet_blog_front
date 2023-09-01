import { NavLink, Link, useNavigate, Form } from "react-router-dom"

const Article = ({ article, role }) => {
  const { image, title, description, article_id } = article

  return (
    <aside>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description} </p>
      {role == "admin" && (
        <div>
          <button className="btn">
            <Link to={`/admin/edit/${article_id}`} className="btn">
              Modifier
            </Link>
          </button>

          <Form method="POST" action={`/admin/delete/${article_id}`}>
            <button type="submit" className="btn remove-btn">
              Supprimer
            </button>
          </Form>
        </div>
      )}
      {role == "user" && (
        <div>
          <Form method="POST" action={`/user/addfavoris/${article_id}`}>
            <button type="submit" className="btn ">
              Add favoris
            </button>
          </Form>
          <Form method="DELETE" action={`/user/deletefavoris/${article_id}`}>
            <button type="submit" className="btn ">
              delete favoris
            </button>
          </Form>
        </div>
      )}
    </aside>
  )
}
export default Article
