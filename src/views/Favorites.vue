<template>
  <div class="mt-10">
    <h1 class="text-4xl font-bold text-center">Избранное</h1>
    <div v-if="store.favorites.length" class="md:grid grid-cols-3 px-5">
      <template v-for="imgs in store.favorites" :key="imgs.id">
        <the-items :imgs="imgs" />
      </template>
    </div>
    <h2 v-else class="text-2xl font-bold text-center mt-3">Пусто, добавьте изображение в избранное</h2>
  </div>
</template>

<script lang="ts" setup>
import TheItems from "../components/TheItems.vue";
import { usePhotoStore } from "../stores/photo";

const store = usePhotoStore()
</script>
