<template>
  <img :src="src" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      // try {
        const { article } = this.$parent;
        console.log(`~/content/${article.path.split('/')[1]}/images/${this.src}`);
        return require(`~/content/${article.path.split('/')[1]}/images/${this.src}`);
      // } catch (error) {
      //   return null
      // }
    }
  }
}
</script>
