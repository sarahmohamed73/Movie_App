import { axiosInstance } from "./config";

export const movieList = () => {
  return axiosInstance.get('/movie/popular')
}