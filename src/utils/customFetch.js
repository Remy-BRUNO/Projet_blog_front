import axios from "axios"

export const customFetch = axios.create({
  baseURL: "/api/v1/",
})
customFetch.interceptors.request.use(
  (config) => {
    if (config.authorization !== false) {
      const token = localStorage.getItem("token")
      if (token) {
        config.headers.Authorization = "Bearer " + token
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
