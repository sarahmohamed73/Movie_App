import { axiosInstance } from "./config";

export const moviePage = (page) => {
  return axiosInstance.get(`/movie/popular?page=${page}`)
}