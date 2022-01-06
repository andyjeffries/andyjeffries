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
  <article class="post">
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </article>
</template>
