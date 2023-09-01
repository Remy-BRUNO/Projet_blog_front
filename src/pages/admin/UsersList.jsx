import axios from "axios"
import { redirect, useLoaderData } from "react-router-dom"

export const loader = async () => {
  const token = localStorage.getItem("token")

  try {
    const { data } = await axios("/api/v1/users/current-user/admin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return { data }
  } catch (error) {
    console.log(error?.response?.data?.msg)
    return redirect("/admin")
  }
}

const UsersList = () => {
  const {
    data: { users },
  } = useLoaderData()

  return (
    <section>
      <ol>
        {users.map((user, index) => (
          <li key={index}>
            <p>Name: {user.name}</p> <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
export default UsersList
