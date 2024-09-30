<script setup lang="ts">
import { makeFirstCharUpper } from '@/utils/helper'

const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name
  return makeFirstCharUpper(strName)
})
</script>

<template>
  <div class="container mx-auto">
    <div class="p-6 my-4 mx-2 rounded-md bg-gray-200 dark:bg-slate-900">
      <span class="text-black dark:text-white font-light leading-tight text-xl md:text-2xl"> Categoria: </span>
      <span class="text-black dark:text-white font-semibold leading-tight text-xl md:text-2xl">
        {{ category }}
      </span>
    </div>
  </div>
</template>
