<script lang="ts" setup>
interface Props {
  path?: string
  title?: string
  date?: string
  description?: string
  image?: string
  alt?: string
  ogImage?: string
  category?: string
  tag?: Array<string>
  tags?: Array<string>
  published?: boolean
}

withDefaults(defineProps<Props>(), {
  path: '/',
  title: 'no-title',
  date: 'no-date',
  description: 'no-description',
  image: '/blogs-img/blog.jpg',
  alt: 'no-alt',
  ogImage: '/blogs-img/blog.jpg',
  tags: () => [],
  tag: () => [],
  category: 'no-category',
  published: false,
})
</script>

<template>
  <!-- Item -->
  <div class="mb-12 inline-block border border-solid border-gray-300 md:mb-8 lg:mb-10">
    <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPLaceholder%20Image%20Secondary.svg?alt=media&token=b8276192-19ff-4dd9-8750-80bc5f7d6844" alt="" class="max-h-64 object-cover w-full">
    <div class="px-5 py-8 sm:px-6">
      <h5 class="mb-3 text-xl font-bold">
        {{ title }}
      </h5>
      <p class="flex-col text-gray-500">
        {{ description }}
      </p>
      <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
        <div class="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-gray-700">
          <p>WEB DESIGN</p>
        </div>
        <div class="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-gray-700">
          <p>UI / UX</p>
        </div>
        <div class="rounded-sm bg-gray-300 p-2 text-sm font-semibold uppercase text-gray-700">
          <p>WEBFLOW</p>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-4">
        <a href="#" class="r flex max-w-full gap-2.5 text-sm font-bold uppercase text-black">
          <p>Ir para o site</p>
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b636d7c440a74b4076b278_button-link.svg" alt="" class="inline-block">
        </a>
        <a href="#" class="inline-block rounded-md bg-black px-6 py-3 text-center font-semibold text-white"> Sobre o projeto </a>
      </div>
    </div>
  </div>
</template>
