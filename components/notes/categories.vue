<script setup>
const { data } = await useAsyncData('all-blog-post-for-category', () => queryContent('/').sort({ _id: -1 }).find())

const allTags = new Map()
const allCategories = new Map()

data.value?.forEach((blog) => {
  const tags = blog.tags || []
  tags.forEach((tag) => {
    if (allTags.has(tag)) {
      const cnt = allTags.get(tag)
      allTags.set(tag, cnt + 1)
    }
    else {
      allTags.set(tag, 1)
    }
  })
  const categories = blog.category || []
  categories.forEach((category) => {
    if (allCategories.has(category)) {
      const cnt = allCategories.get(category)
      allCategories.set(category, cnt + 1)
    }
    else {
      allCategories.set(category, 1)
    }
  })
})
</script>

<template>
  <!-- Card Section -->
  <div class="max-w-[85rem] px-4  sm:px-6 lg:px-8  mx-auto">
    <div class="mb-6 flex items-end justify-between gap-4">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-slate-300 lg:text-3xl">
        Categorias
      </h1>
    </div>
    <!-- Grid -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
      <!-- Card -->
      <NuxtLink v-for="category in allCategories" :key="category" class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" :to="`notes/categories/${category[0]}`">
        <div class="p-4 md:p-5">
          <div class="flex justify-between items-center gap-x-3">
            <div class="grow">
              <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                {{ category[0] }}
              </h3>
              <p class="text-sm text-gray-500 dark:text-neutral-500">
                {{ category[1] }} postagens
              </p>
            </div>
            <div>
              <svg class="shrink-0 size-5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </div>
          </div>
        </div>
      </NuxtLink>
      <!-- End Card -->
    </div>
    <div class="mb-6 pt-6 flex items-end justify-between gap-4">
      <h1 class="text-2xl font-bold text-gray-800 dark:text-slate-300 lg:text-3xl">
        Tags
      </h1>
    </div>
    <div class="py-4">
      <NuxtLink v-for="tag in allTags" :key="tag" :to="`notes/tags/${tag[0]}`" class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">
        {{ tag[0] }}
        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
          {{ tag[1] }}
        </span>
      </NuxtLink>
    </div>
    <!-- End Grid -->
  </div>
<!-- End Card Section -->
</template>
