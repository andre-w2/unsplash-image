<template>
  <div class="relative">
    <input
      :id="id"
      :type="type"
      class="block rounded-md px-6 pt-6 pb-1 w-full text-md text-black bg-white appearance-none focus:outline-none focus:ring-0 peer"
      placeholder=" "
      autocomplete="off"
      @input="onchange"
    />
    <label
      class="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      :for="id"
    >
      {{ label }}
    </label>
  </div>
</template>

<script lang="ts" setup>
defineProps({
    id: {
        required: true,
        type: String
    },
    type: {
        required: false,
        type: String
    },
    label: {
        required: true,
        type: String
    },
    onchange: {
      required: true,
      type: Function as any
    }
})
</script>