<template>
  <the-search />
  <div class="md:grid grid-cols-3 px-5 mb-5">
    <template v-if="store.isLoading">
      <template v-for="imgs in store.photos" :key="imgs.id">
        <the-items :imgs="imgs" />
      </template>
    </template>
    <template v-else-if="!store.error">
      <div
        v-for="i in 8"
        :key="i"
        class="w-[420px] h-[473px] mt-3 animate-pulse bg-gray-200"
      ></div>
    </template>
  </div>
  <the-error v-if="store.error" :error="store.error" class="mt-10" />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { usePhotoStore } from "../stores/photo";
import { useRoute } from "vue-router";

import TheError from "../components/TheError.vue";
import TheItems from "../components/TheItems.vue";
import TheSearch from "../components/TheSearch.vue";

const store = usePhotoStore();
const route = useRoute();

onMounted(() => {
  store.getPhotos(`count=9&query=${route.query.q}`);
});
</script>
