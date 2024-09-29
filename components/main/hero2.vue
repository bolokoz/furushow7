<script setup>
defineProps({
  title: {
    type: String,
    default: 'titulo',
  },
})
</script>

<template>
  <header>
    <!-- Hero top -->
    <div class="bg-gradient-to-b from-slate-100 to-green-200 dark:from-slate-950 dark:to-cyan-950 py-6 sm:py-8 lg:py-12 rounded-3xl">
      <!-- Container -->
      <div class="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-20">
        <!-- Title -->
        <h1 class="mb-6 max-w-3xl text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12 dark:text-zinc-300">
          {{ title }}
        </h1>
        <!-- Buttons -->
        <div class="flex items-stretch">
          <a href="#" class="mr-6 rounded-md bg-black px-8 py-4 text-center font-semibold text-white lg:mr-8"> Edit on github </a>
          <a href="#" class="flex items-center justify-center rounded-md border border-solid border-black bg-white px-6 py-3 font-bold">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94d411e6cf99_Vector%20(6).svg" alt="" class="mr-2 max-h-4 w-5">
            <p>Compartilhar</p>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
