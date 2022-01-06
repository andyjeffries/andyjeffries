<script>
  export default {
    async asyncData({ $content, params, error }) {
      try {
        const [article] = await $content({ deep: true })
          .where({ dir: `/${params.slug}` })
          .fetch()
        const moreStories = await $content({ deep: true })
          .only(['title', 'image', 'path'])
          .where({ title: { $ne: article.title } })
          .sortBy('createdAt', 'desc')
          .limit(3)
          .fetch()
        return { article, moreStories }
      } catch (err) {
        error({
          statusCode: 404,
          message: 'Page could not be found',
        })
      }
    }
  }
</script>

<template>
  <article class="container mx-auto text-gray-800 dark:text-gray-200">
    <h3 class="text-center">{{ article.date | formatDate }}</h3>
    <h1 class="mt-4 text-6xl text-center max-w-5xl mx-auto">{{ article.title }}</h1>

    <img
      v-if="article.image"
      :src="article.image"
      :alt="article.title"
      class="mt-10 rounded max-w-6xl mx-auto"
    />

    <div class="px-4 lg:px-0 mt-20 prose lg:prose-xl dark:prose-invert mx-auto">
      <nuxt-content :document="article" />
    </div>
  </article>
</template>
