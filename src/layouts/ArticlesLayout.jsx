import Article from "../components/contents/Article"

import { useOutletContext } from "react-router-dom"

const ArticlesLayout = ({ articlesFav }) => {
  const [user, data] = useOutletContext()
  const articles = data.articles

  return (
    <div>
      {articlesFav && (
        <div>
          {articlesFav.map((article, index) => {
            return <Article key={index} article={article} role={user.role} />
          })}
        </div>
      )}
      {!articlesFav && (
        <div>
          {articles.map((article) => {
            return (
              <Article
                key={article.article_id}
                article={article}
                role={user.role}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
export default ArticlesLayout
