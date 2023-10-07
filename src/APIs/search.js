import { axiosInstance } from "./config";

export const search = (name) => {
  return axiosInstance.get(`/search/movie?query=${name}`)
}

export const searchPages = (name, pageNumber) => {
  return axiosInstance.get(`/search/movie?query=${name}&page=${pageNumber}`)
}