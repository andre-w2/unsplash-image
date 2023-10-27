<template>
  <div
    class="bg-[url('/img/bg.svg')] bg-cover bg-no-repeat bg-center h-48 w-full flex justify-center items-center"
  >
    <div class="relative md:w-1/2 w-96">
      <the-input :onchange="onSearch" id="search" label="Поиск" />
      <img
        src="../assets/icons/search.svg"
        alt="Поиск"
        class="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-3"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheInput from "../components/TheInput.vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { usePhotoStore } from "../stores/photo";

const router = useRouter();
const route = useRoute();

const store = usePhotoStore();

const timeout = ref(0);

const onSearch = (v: Event) => {
  if (timeout.value) clearTimeout(timeout.value);
  timeout.value = setTimeout(() => {
    const val = v.target as HTMLInputElement;
    router.push({ path: route.fullPath, query: { q: val.value } });

    store.getPhoto(`query=${val.value}&count=9`);
  }, 1000);
};
</script>
