<template>
  <router-link
    class="cursor-pointer"
    :to="{ name: 'details', params: { id: imgs.id } }"
  >
    <img
      class="w-[420px] h-[400px] mt-3"
      :src="imgs.urls.small_s3"
      :alt="imgs.alt_description"
    />
  </router-link>
</template>

<script lang="ts" setup>
defineProps({
  imgs: {
    type: Object,
    required: true,
  },
});
</script>
