import { axiosInstance } from "./config";

export const recommends = (id) => {
  return axiosInstance.get(`/movie/${id}/recommendations`)
}