import { axiosInstance } from "./config";

export const movieDetails = (id) => {
  return axiosInstance.get(`/movie/${id}`)
}