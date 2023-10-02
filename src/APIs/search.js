import { axiosInstance } from "./config";

export const search = (name) => {
  return axiosInstance.get(`/search/movie?api_key=1e8cfdde8d627e45358cc8ee3259c637&query=${name}`)
}