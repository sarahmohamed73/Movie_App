import { axiosInstance } from "./config";

export const movieDetails = (id) => {
  return axiosInstance.get(`/movie/${id}?api_key=1e8cfdde8d627e45358cc8ee3259c637`)
}