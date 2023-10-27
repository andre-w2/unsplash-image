import { defineStore } from 'pinia'
import { ref } from 'vue'
import axiosPhoto from '../api/photo'
import { RootObject } from '../types/photos'
import { IPhoto } from '../types/photo'
import { setItem } from '../utils/storage'

export const KEY_FAVORITES = 'favorites'

export const usePhotoStore = defineStore('photo', () => {
  const photos = ref<RootObject[]>([])
  const photo = ref({} as IPhoto)

  const favorites = ref<IPhoto[]>([])
  const isLoading = ref(false)
  const isLoadingDetails = ref(false)
  const error = ref(null)

  const getPhotos = (query: string) => {
    isLoading.value = false
    return new Promise(() => {
      axiosPhoto.photos(query)
        .then(res => {
          photos.value = res.data
        })
        .catch(err => {
          console.error(err)
          error.value = err.message
        })
        .finally(() => {
          isLoading.value = true
        })
    })
  }

  const getPhoto = (id: string) => {
    isLoadingDetails.value = false

    return new Promise(() => {
      axiosPhoto.photo(id)
        .then(res => {
          photo.value = res.data
        })
        .catch(err => {
          console.error(err)
          error.value = err.message
        })
        .finally(() => {
          isLoadingDetails.value = true
        })
    })
  }

  const favoritesAction = (item: IPhoto) => {
    if (favorites.value.find(i => i.id === item.id)) {
      favorites.value = favorites.value.filter(i => i.id !== item.id)
    } else {
      favorites.value.push(item)
    }

    setItem(KEY_FAVORITES, favorites.value)
  }

  const setPhotos = (items: IPhoto[]) => {
    favorites.value = items;
  }

  return { photos, photo, isLoadingDetails, isLoading, error, getPhotos, getPhoto, favoritesAction, setPhotos, favorites }
})