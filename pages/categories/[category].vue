<script lang="ts" setup>
const route = useRoute()

// take category from route params & make first char upper
const category = computed(() => {
  const name = route.params.category || ''
  let strName = ''

  if (Array.isArray(name))
    strName = name.at(0) || ''
  else strName = name
  return strName
})

const { data } = await useAsyncData(`category-data-${category.value}`, () =>
  queryContent('/')
    .where({ category: { $contains: category.value } })
    .find(),
)

const allTagsArray = computed(() => {
  const allTags = new Set()
  data.value?.forEach((article) => {
    const tags = article.tags || []
    tags.forEach((tag) => {
      allTags.add(tag)
    })
  })
  return Array.from(allTags)
})

const selectedTags = ref(allTagsArray)

function removeTag(index) {
  selectedTags.value = selectedTags.splice(index)
}

function filterArticlesByTags(articles, selectedTags) {
  return articles.filter(article =>
    article.tags.some(tag => selectedTags.includes(tag)),
  )
}

function formatArticles(articles) {
  return articles.map((article) => {
    return {
      path: article._path,
      title: article.title || 'no-title available',
      description: article.description || 'no-description available',
      image: article.image || '/blogs-img/blog.jpg',
      alt: article.alt || 'no alter data available',
      ogImage: article.ogImage || '/blogs-img/blog.jpg',
      date: article.date || 'not-date-available',
      tags: article.tags || [],
      category: article.category || 'no-category',
      published: article.published || false,
    }
  })
}

const filteredData = computed(() => {
  const formatedData = formatArticles(data?.value)
  return filterArticlesByTags(formatedData || [], selectedTags.value)
})

useHead({
  title: category.value,
  meta: [
    {
      name: 'description',
      content: `You will find all the ${category.value} related post here`,
    },
  ],
})

// Generate OG Image
const siteData = useSiteConfig()
defineOgImage({
  props: {
    title: category.value?.toUpperCase(),
    description: `You will find all the ${category.value} related post here`,
    siteName: siteData.url,
  },
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600 px-4">
    <CategoryTopic />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <BlogCard
        v-for="post in filteredData"
        :key="post.title"
        :path="post.path"
        :title="post.title"
        :date="post.date"
        :description="post.description"
        :image="post.image"
        :alt="post.alt"
        :og-image="post.ogImage"
        :tags="post.tags"
        :category="post.category"
        :published="post.published"
      />
      <BlogEmpty v-if="data?.length === 0" />
    </div>
  </main>
</template>
