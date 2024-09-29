<script setup lang="ts">
const { path } = useRoute()
const articles = await queryContent(path).findOne()

const links = articles?.body?.toc?.links || []
</script>

<template>
  <div class="lg:col-span-3 sticky top-28 h-96  hidden lg:block  justify-self-end">
    <div class="border dark:border-gray-800 p-3 rounded-md min-w-[200px] dark:bg-slate-900">
      <h1 class="text-sm font-bold mb-3 border-b dark:border-gray-800 pb-2">
        Table Of Content
      </h1>
      <ul>
        <li v-for="link in links" :key="link.id">
          <NuxtLink
            :href="`#${link.id}`"
            class="block text-sm mb-3 hover:underline"
          >
            {{ link.text }}
          </NuxtLink>
          <ul>
            <li v-for="child in link.children" :key="child.id" class="ml-4">
              <NuxtLink
                :href="`#${child.id}`"
                class="block text-xs mb-3 hover:underline"
              >
                {{ child.text }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
