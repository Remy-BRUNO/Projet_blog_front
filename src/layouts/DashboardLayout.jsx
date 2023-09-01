import axios from "axios"
import { redirect, useLoaderData } from "react-router-dom"
import Article from "../components/contents/Article"

export const loader = async () => {
  const token = localStorage.getItem("token")

  try {
    const { data } = await axios("/api/v1/article", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return { data }
  } catch (error) {
    console.log(error?.response?.data?.msg)
    return redirect("/")
  }
}

const DashboardLayout = () => {
  const {
    data: { articles },
  } = useLoaderData()

  return (
    <section>
      {articles.map((article) => {
        return <Article key={article.article_id} article={article} />
      })}
    </section>
  )
}
export default DashboardLayout
