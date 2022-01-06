<template>
  <div>
    <h4>
      <span>Latest Articles</span>
    </h4>
    <div class="">
      <section
        v-for="post in articles"
        :key="post.title"
        class=""
      >
        <nuxt-link class="nav-link" :to="'/blog/' + post.path.split('/')[1]">
          <div class="">
            <div class="uk-card-media-top">
              <img
                v-if="post.image"
                :src="post.image"
                :alt="post.title"
                style="width: 100%; height: 250px"
              />
            </div>
            <div class="uk-card-body">
              <h3 class="uk-card-title" style="margin-top: 0px">
                {{ post.title }}
              </h3>
            </div>
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
