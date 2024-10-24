<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'Furushow',
  script: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
  ],
  meta: [
    {
      name: 'description',
      content:
        'Welcome To My Blog Site. Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: 'Greetings 👋',
  title: navbarData.homeTitle,
  description: 'Dive into web development with me and learn Js, Ts, Vue, Nuxt, Docker, k8s',
  link: 'https://res.cloudinary.com/boloko/image/upload/f_auto/v1728951339/furushow7/image_smko7k.png',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <NuxtImg class="object-cover object-center rounded" alt="hero" src="http://lorempixel.com.br/720/600/" />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Furushow
            <br class="hidden lg:inline-block">Meu anti alzheimer
          </h1>
          <p class="mb-8 leading-relaxed">
            Portfolio, notas e observações
          </p>
          <!-- <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div> -->
        </div>
      </div>
    </section>
    <!-- <MainHero /> -->
    <MainRecent />
    <NotesCategories />
    <!-- <MainTrending /> -->
  </main>
</template>
