<template>
  <div class="max-w-5xl mx-auto">
    <div class="flex items-start space-x-4">
      <img src="/images/andy.jpg" class="rounded-full h-16 shadow" />
      <div>
        <h1 class="text-3xl text-blue-800 dark:text-blue-200 font-medium">Taekwondo instructor and technologist</h1>
        <h2 class="text-xl text-blue-600">Random writings on martial arts.</h2>

        <p class="mt-2 text-lg leading-6 text-gray-800 dark:text-gray-200 max-w-3xl">I'm one guy on a journey to learn Taekwondo as accurately as I can, pass it on as accurately as I can and do justice to the founders and seniors of this art that has given me so much in trying to play a good part in ensuring its future is secure.</p>
      </div>
    </div>

    <h4 class="text-xl mt-20 text-gray-800 dark:text-gray-200">My articles</h4>
    <div class="mt-8 text-gray-800 dark:text-gray-200 grid grid-cols-2 gap-10">
      <section
        v-for="post in articles"
        :key="post.title"
        class="hover:bg-gray-200 p-4 rounded"
      >
        <nuxt-link class="h-full" :to="'/blog/' + post.path.split('/')[1]">
          <div class="h-full flex flex-col">
            <div class="uk-card-media-top">
              <img
                v-if="post.image"
                :src="post.image"
                :alt="post.title"
                class="object-cover rounded w-full aspect-video"
              />
            </div>
            <h3 class="mt-4 text-xl text-gray-800 dark:text-gray-100 font-medium">{{ post.title }}</h3>
            <p class="mt-4 text-gray-600 dark:text-gray-400 flex-grow flex-1">{{ post.description }}</p>
          </div>
        </nuxt-link>
      </section>
    </div>
    <button
        class="uk-button uk-button-default"
        @click="getMorePosts"
        style="margin-top: 30px"
      >
        See more articles
      </button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      page: 1,
    }
  },
  methods: {
    async getMorePosts() {
      const blogPosts = await this.$content({ deep: true })
        .only(['title', 'description', 'image', 'path'])
        .sortBy('date', 'desc')
        .skip(9 * this.page)
        .limit(9)
        .fetch()
      blogPosts.forEach((post) => {
        this.articles.push(post)
      })
      this.page++
    },
    lowerCase(s) {
      return s.toLowerCase()
    },
  },
  async asyncData({ $content, params }) {
    try {
      const articles = await $content({ deep: true })
        .only(['title', 'description', 'image', 'path'])
        .sortBy('date', 'desc')
        .limit(9)
        .fetch()
      return { articles }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
}
</script>
