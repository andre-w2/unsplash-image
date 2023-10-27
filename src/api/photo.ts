import axios from './axios'

const photos = (q: string) => {
  return axios.get(`/photos/random?${q}`)
}

const photo = (id: string) => {
  return axios.get(`/photos/${id}`)
}

export default {
  photos,
  photo
}