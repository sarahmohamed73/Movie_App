import { axiosInstance } from "./config";

export const moviePage = (page) => {
  return axiosInstance.get(`/movie/popular?api_key=1e8cfdde8d627e45358cc8ee3259c637&page=${page}`)
}