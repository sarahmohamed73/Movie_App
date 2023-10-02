import { axiosInstance } from "./config";

export const movieList = () => {
  return axiosInstance.get('/movie/popular?api_key=1e8cfdde8d627e45358cc8ee3259c637')
}