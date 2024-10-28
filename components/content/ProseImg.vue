<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<template>
  <NuxtImg
    loading="lazy"
    :src="src"
    :alt="props.alt"
    sizes="100vw sm:50vw md:400px"
    placeholder
    :modifiers="{ roundCorner: '20:40' }"
    :width="props.width"
    :height="props.height"
  />
</template>

<style>

</style>
