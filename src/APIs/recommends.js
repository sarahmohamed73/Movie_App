import { axiosInstance } from "./config";

export const recommends = (id) => {
  return axiosInstance.get(`/movie/${id}/recommendations?api_key=1e8cfdde8d627e45358cc8ee3259c637`)
}