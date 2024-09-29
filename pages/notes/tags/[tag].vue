<script lang="ts" setup>
const route = useRoute()

// take category from route params & make first char upper
const tag = computed(() => {
  const name = route.params.tag || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data } = await useAsyncData(`category-data-${tag.value}`, () =>
  queryContent('/')
    .where({ tags: { $contains: tag.value } })
    .find(),
)

const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || 'no-description available',
      image: articles.image || '/blogs-img/blog.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/blogs-img/blog.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  })
})

useHead({
  title: tag.value,
  meta: [
    {
      name: 'description',
      content: `You will find all the ${tag.value} related post here`,
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: tag.value?.toUpperCase(),
    description: `You will find all the ${tag.value} related post here`,
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
    <CategoryTopic />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in formattedData"
        :key="post.title"
        :path="post.path"
        :title="post.title"
        :date="post.date"
        :description="post.description"
        :image="post.image"
        :alt="post.alt"
        :og-image="post.ogImage"
        :tags="post.tags"
        :published="post.published"
      />
      <BlogEmpty v-if="data?.length === 0" />
    </div>
  </main>
</template>
