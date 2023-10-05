import { axiosInstance } from "./config";

export const search = (name) => {
  return axiosInstance.get(`/search/movie?query=${name}`)
}