import axios from "axios"

const token = localStorage.getItem("token")

export const customFetch = axios.create({
  baseURL: "/api/v1/",
  headers: { Authorization: `Bearer ${token}` },
})
