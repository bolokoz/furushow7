<script setup lang="ts">
interface Props {
  title: string
  image: string
  alt: string
  description: string
  date: string
  category: string
  tags: Array<string>
}

withDefaults(defineProps<Props>(), {
  title: 'no-title',
  image: '#',
  alt: 'no-img',
  description: 'no description',
  date: 'no-date',
  category: 'no-category',
  tags: () => ([]),
})
</script>

<template>
  <header>
    <h1 class="text-xl dark:text-zinc-300 md:text-3xl lg:text-4xl m-7 font-bold text-center">
      {{ title || '' }}
    </h1>
    <NuxtImg
      :src="image || ''"
      :alt="alt || ''"
      width="600"
      class="m-auto rounded-2xl shadow-lg h-32 md:h-72 w-4/6 md:w-4/5 content-center object-cover"
    />
    <p class="text-xs sm:text-sm my-3 max-w-xl mx-auto text-center text-zinc-600 dark:text-zinc-400">
      {{ description }}
    </p>
    <div class="flex w-full justify-center text-xs md:text-base my-8">
      <div class="md:flex text-black dark:text-zinc-300 content-center gap-8 text-xs sm:text-sm">
        <div class="flex items-center font-semibold">
          <LogoDate />
          <p>{{ date || '' }}</p>
        </div>
        <div class="flex items-center gap-1 flex-wrap pb-1.5">
          <Icon name="material-symbols:category" />
          <span class="inline-flex items-center gap-x-1.5 py-1 px-3 rounded-md text-xs font-medium border border-gray-200 bg-slate-200 text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">{{ category }}</span>
        </div>
        <div class="flex items-center gap-2 flex-wrap my-5">
          <LogoTag />
          <template v-for="tag in tags" :key="tag">
            <span class="bg-gray-200 dark:bg-slate-900 rounded-md px-2 py-1 font-semibold">{{ tag }}</span>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>
