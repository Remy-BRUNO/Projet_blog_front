// import axios from "axios"
// import { redirect, useLoaderData } from "react-router-dom"
// import Article from "../components/contents/Article"

// export const loader = async ({ request }) => {
//   const token = localStorage.getItem("token")
//   const url = new URL(request.url)
//   const searchTerm = url.searchParams.get("search") || ""

//   try {
//     const { data } = await axios(`/api/v1/article?search=${searchTerm}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     return {
//       data,
//       searchTerm,
//     }
//   } catch (error) {
//     console.log(error?.response?.data?.msg)
//     return redirect("/")
//   }
// }

// const DashboardLayout = () => {
//   const {
//     data: { articles },
//   } = useLoaderData()

//   return (
//     <>
//       {articles.map((article) => {
//         return <Article key={article.article_id} article={article} />
//       })}
//     </>
//   )
// }
// export default DashboardLayout
