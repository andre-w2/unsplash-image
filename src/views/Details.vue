<template>
  <div class="relative" v-if="store.isLoadingDetails">
    <div
      :style="{ backgroundImage: `url(${store.photo.urls?.regular})` }"
      class="hidden md:block bg-cover bg-no-repeat bg-center blur-sm h-1/2 w-full grayscale absolute -z-10"
    ></div>
    <div class="px-5 md:px-28">
      <div class="flex justify-between items-center">
        <div class="mt-10 flex justify-center items-center">
          <img
            class="w-10 h-10 rounded-md"
            :src="store.photo.user.profile_image.small"
            :alt="store.photo.user.name"
          />
          <div class="flex flex-col ml-3">
            <span class="text-black md:text-white font-bold">{{
              store.photo.user.name
            }}</span>
            <span class="text-gray-400 md:text-white font-bold"
              >@{{ store.photo.user.username }}</span
            >
          </div>
        </div>

        <div class="mt-10 flex items-center justify-center space-x-4">
          <button
            @click="store.favoritesAction(store.photo)"
            class="rounded-md bg-white p-2 shadow-lg"
          >
            <img
              v-show="!isFavorite(store.photo.id)"
              src="../assets/icons/favorite.svg"
              class="text-black"
              alt="Добавить в избранное"
            />
            <img
              v-show="isFavorite(store.photo.id)"
              src="../assets/icons/check_favorite.svg"
              class="text-black"
              alt="Добавленно в избранное"
            />
          </button>
          <a
            :href="store.photo.links.download"
            target="_blank"
            class="rounded-md bg-[#FFF200] p-2 flex items-center justify-center shadow-lg"
          >
            <img
              src="../assets/icons/vector.svg"
              class="w-5 h-5"
              alt="Скачать изображение"
            />
            <span class="ml-3 hidden md:block">Downloand</span>
          </a>
        </div>
      </div>
      <img
        class="mt-5 rounded-md shadow-2xl mb-10"
        :src="store.photo.urls.raw"
        :alt="store.photo.alt_description"
      />
    </div>
  </div>
  <div
    v-else-if="!store.error"
    class="w-full h-screen mt-3 animate-pulse bg-gray-200"
  ></div>
  <the-error v-if="store.error" :error="store.error" class="mt-10" />
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { usePhotoStore } from "../stores/photo";
import { onMounted } from "vue";
import TheError from "../components/TheError.vue";

const router = useRoute();
const store = usePhotoStore();

onMounted(() => {
  const id: string = router.params.id.toString();

  store.getPhoto(id);
});

const isFavorite = (id: string) => store.favorites.find((i) => i.id === id);
</script>
