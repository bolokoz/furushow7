<template>
  <section>
    <!-- Container -->
    <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 bg-gradient-to-b from-slate-100 to-green-200 dark:from-slate-950 dark:to-green-900">
      <!-- Title -->
      <h2 class="text-center text-3xl font-bold md:text-5xl">
        Notas e obs
      </h2>
      <p class="msm:text-base mb-8 mt-4 text-center text-sm text-gray-500 md:mb-12 lg:mb-16">
        Mais variados temas, menos profundo ainda
      </p>
      <!-- Content -->
      <div class="grid justify-items-center gap-1 sm:grid-cols-2 md:grid-cols-3">
        <!-- Item -->
        <a v-for="n in 4" :key="n" href="#" class="flex flex-col rounded-md p-4 lg:p-2">
          <img src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074" alt="" class="mb-3 inline-block h-10 object-cover lg:w-96">
          <p class="mb-1 text-center font-bold">Project Name</p>
          <p class="text-center text-sm text-gray-500">Web Design</p>
        </a>
      </div>
    </div>
  </section>
</template>
