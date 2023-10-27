<template>
  <header class="w-full h-full">
    <div class="bg-black flex justify-between items-center px-6 md:px-16">
      <router-link :to="{ name: 'home' }">
        <img
          src="../assets/logo.svg"
          class="md:w-28 md:h-28 w-24 h-24"
          alt="Логотип сайта"
        />
      </router-link>

      <div class="flex space-x-9">
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center space-x-3 group"
        >
          <img
            src="../assets/icons/search_white.svg"
            class="text-red-600"
            alt="Иконка избранное"
          />
          <span
            class="text-white group-hover:opacity-80 duration-500 hidden md:block"
            >Поиск</span
          >
        </router-link>

        <router-link
          :to="{ name: 'favorites' }"
          class="flex items-center space-x-3 group"
        >
          <img
            src="../assets/icons/favorite_white.svg"
            class="text-red-600"
            alt="Иконка избранное"
          />
          <span
            class="text-white group-hover:opacity-80 duration-500 hidden md:block"
            >Избранное</span
          >
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { getItem } from "../utils/storage";
import { usePhotoStore, KEY_FAVORITES } from "../stores/photo";
import { onMounted } from "vue";

const items = getItem(KEY_FAVORITES);
const store = usePhotoStore();

onMounted(() => {
  store.setPhotos(items);
});
</script>
