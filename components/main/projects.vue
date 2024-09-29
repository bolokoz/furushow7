<template>
  <div class="bg-gradient-to-b from-slate-100 to-green-200 dark:from-slate-950 dark:to-cyan-950 py-6 sm:py-8 lg:py-12 rounded-3xl">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-6 flex items-end justify-between gap-4">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-slate-300 lg:text-3xl">
          Portfolio
        </h1>
      </div>

      <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        <!-- product - start -->
        <div v-for="i in 4" :key="i">
          <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
            <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110">
          </a>

          <div class="flex flex-col">
            <span class="text-gray-500 dark:text-slate-300">Men</span>
            <a href="#" class="text-lg font-bold text-gray-800 dark:text-slate-500 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
          </div>
        </div>
        <!-- product - end -->
      </div>
    </div>
  </div>
</template>
