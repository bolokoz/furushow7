<script setup>
// Get Last 6 Publish Post from the content/blog directory
const { data } = await useAsyncData('recent-post', () =>
  queryContent('/projects').limit().sort({ _id: -1 }).find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})
</script>

<template>
  <!-- Card Grid -->
  <div class="py-12 px-2 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
    <!-- Card -->
    <NuxtLink v-for="project in formattedData" :key="project.title" class="group flex flex-col  focus:outline-none focus:bg-gray-200 transition pa-2" :to="project.path">
      <div class="aspect-w-16 aspect-h-12 overflow-hidden bg-gray-100 rounded-2xl dark:bg-neutral-800">
        <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl" src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Image">
      </div>

      <div class="pt-4">
        <h3 class="relative inline-block font-medium text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-lime-400 before:transition before:origin-left before:scale-x-0 group-hover:before:scale-x-100 dark:text-white">
          {{ project.title }}
        </h3>
        <p class="mt-1 text-gray-600 dark:text-neutral-400">
          {{ project.title }}
        </p>

        <div class="mt-3 flex flex-wrap gap-2">
          <span class="py-1 px-3 bg-white text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
            {{ project.category }}
          </span>
        </div>
      </div>
    </NuxtLink>
    <!-- End Card -->
  </div>
<!-- End Card Grid -->
</template>
